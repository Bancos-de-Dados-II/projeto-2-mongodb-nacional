import React from 'react';
import Mapa from "../../components/Mapa/Mapa"; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BuscaEnderecoReverso from '../../components/nomatin/buscaReversa';
import "../Mapa/styles.css"
function PaginaMapa() {
  return (
    <div>
      <Header/>
       <Mapa />
      <div className='mapa'>
     <div className='mapa-inside'>
      <BuscaEnderecoReverso/></div>
      </div>
      <Footer/>
    </div>
  );
}

export default PaginaMapa;
