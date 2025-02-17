import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axiosApi from "../../axios";
import logo from"../../../public/img/pinmapa.png";
import "../Mapa/styles.css"

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
        console.log("tudo certooooo")
        setLocais(res.data);
      })
      .catch((err) => {
        console.error("deu erroooo: ", err);
      });
  }, []);

  return (

   <div className="container-mapa">
    <MapContainer 
    className="mapa"
      center={[-6.872043381486839, -38.558450105874826]}
      zoom={13}
      style={{ height: "500px", width: "50%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      

      {locais.map((local) => (
        <Marker
          key={local._id}
          position={[
            local.localizacao.coordinates[1],
            local.localizacao.coordinates[0],
          ]}
          icon={customIcon}
        >
          <Popup>{local.localizacao.nome}</Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
   
  );
}

export default Mapa;
