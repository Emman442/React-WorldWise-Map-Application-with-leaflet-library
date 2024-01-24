import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import {useUrlPosition} from "../hooks/useUrlPosition";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
export default function Map() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate(); //Returns a function called Navigate we can then use navigate to navigate to any url
  const { cities } = useCities();

  const [mapPosition, setMapPosition] = useState([40, 0]);
  
  const {
    isLoading: isLoadingPosition,
    position: GeoLocationPosition,
    getPosition,
  } = useGeolocation();
const [mapLat, mapLng] = useUrlPosition()
  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLat]);
    },
    [mapLat, mapLng]
  );
  useEffect(function(){
    if(GeoLocationPosition)setMapPosition([GeoLocationPosition.lat,GeoLocationPosition.lng])
  },[GeoLocationPosition])
  return (
    <div
      className={styles.mapContainer}
      // onClick={() => {
      //   navigate("form");
      // }}
    >
     {!GeoLocationPosition && <Button type="position" onClick={getPosition}>{isLoadingPosition?'Loading...': 'Use your position'}</Button>}
      <MapContainer
        center={mapPosition}
        // center={[40,0]}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker key={city.id} position={mapPosition}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap(); //used to get the current instance f the map that is currently being displayed

  map.setView(position);
  return null;
}
function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
