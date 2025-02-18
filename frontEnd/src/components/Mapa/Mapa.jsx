import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axiosApi from "../../services/axios.js";
import logo from "../../../public/img/pinmapa.png";
import "./styles.css";
import BuscaGeocodificada from "../../components/BuscaGeocodificada"

import LocationMarker from "../LocalizacaoAtual/index.jsx";
import CadastraLocalizacao from "../FormCadastraLocalização/index.jsx";


const customIcon = new L.Icon({
  iconUrl: logo,
  iconSize: [200, 200],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function Mapa() {
  const [locais, setLocais] = useState([]);  

  
  useEffect(() => {
    axiosApi
      .get("http://localhost:1010/map")
      .then((res) => {
        setLocais(res.data);  
      })
      .catch((err) => {
        console.error("Erro ao buscar locais: ", err);
      });
  }, []); 


  const cadastrarLocalizacao = (novaLocalizacao) => {
    const dados = {
      localizacao: {
        nome: novaLocalizacao.nome,
        type: "Point",
        coordinates: [
          parseFloat(novaLocalizacao.coordinates[0]),
          parseFloat(novaLocalizacao.coordinates[1]),
        ],
      },
    };

    
  
    axiosApi
      .post("http://localhost:1010/map", dados)
      .then((res) => {
        console.log("Localização cadastrada com sucesso!");
        setLocais((prevLocais) => [...prevLocais, res.data]); // Atualiza a lista de locais com a nova localização
      })
      .catch((err) => {
        console.error("Erro ao cadastrar localização: ", err.response || err.message, err);
      });
  };

  return (
    <div className="container-mapa">
       <div className="flex-container">
     
      <MapContainer
        className="mapa"
        center={[-6.888601818211769, -38.56707625327777]}
        zoom={13}
        style={{ height: "500px", width: "50%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* mostra cadastrados e adiciona um marcador */}
        {locais.map((local) => {
          const latitude = parseFloat(local.localizacao.coordinates[1]);
          const longitude = parseFloat(local.localizacao.coordinates[0]);

         
          if (isNaN(latitude) || isNaN(longitude) || latitude === 0 || longitude === 0) {
            console.log("Coordenadas inválidas:", latitude, longitude);
            return null; 
          }

          return (
            <Marker
              key={local._id}
              position={[latitude, longitude]}
              icon={customIcon}
            >
              <Popup>{local.localizacao.nome}</Popup>
            </Marker>
          );
        })}

        <LocationMarker />  {/*minha localizacao atual*/}
      </MapContainer>
      <div className="campo-busca">
        <div className="campo-container-busca">
         <BuscaGeocodificada />
          <CadastraLocalizacao onSubmit={cadastrarLocalizacao} /> 
          </div>
      </div>
      </div>
    </div>
  );
}

export default Mapa;
