import React, { useState } from 'react';
import "../BuscaGeocodificada/styles.css";
import { FaSearch } from 'react-icons/fa';
import axiosApi from 'axios';

export default function BuscaGeocodificada({ setCoordenadas }) {
  const [nomeLocal, setNomeLocal] = useState("");
  const [erro, setErro] = useState("");

  const buscarCoordenadas = () => {
    setErro("");
    if (!nomeLocal.trim()) {
      setErro("Por favor, insira um nome de local.");
      return;
    }

    // Fazendo a requisição para o Nominatim
    axiosApi
      .get("https://nominatim.openstreetmap.org/search", {
        params: {
          q: nomeLocal,
          format: "json",
          addressdetails: 1,
          limit: 1, 
        },
      })
      .then((response) => {
        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
          setCoordenadas([lat, lon]); 
        } else {
          setErro("Local não encontrado");
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar coordenadas:", err);
        setErro("Erro ao buscar coordenadas. Tente novamente.");
      });
  };

  return (
    <div className='conntainer-busca'>
      <input
        className="container-input-busca"
        type="text"
        value={nomeLocal}
        onChange={(e) => setNomeLocal(e.target.value)}
        placeholder='Encontre um ponto ReCircular perto de você'
      />
      <div className="container-botao-busca">
        <button className='botao-busca' onClick={buscarCoordenadas}>
          <FaSearch style={{ marginRight: '8px' }} />
        </button>
      </div>
    </div>
  );
}
