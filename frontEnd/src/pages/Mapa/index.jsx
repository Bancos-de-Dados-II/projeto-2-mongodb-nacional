
import Mapa from "../../components/Mapa/Mapa"; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import "../Mapa/styles.css"
function PaginaMapa() {
  return (
    <div>
      <Header/>
       <Mapa />
      <div className='mapa'>
     <div className='mapa-inside'>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default PaginaMapa;
