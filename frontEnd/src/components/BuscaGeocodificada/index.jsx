

import React from 'react';
import "../BuscaGeocodificada/styles.css"
import { FaSearch } from 'react-icons/fa';

export default function BuscaGeocodificada(){

   
    return (
      <div className='conntainer-busca'>
      
        <input className="container-input-busca "type="text" placeholder='Encontre um ponto ReCircular perto de você' />
         <div className="container-botao-busca">
            <button className='botao-busca'>
            <FaSearch style={{ marginRight: '8px' }} /></button>
        </div>
      </div>
    )
}