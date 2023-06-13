/* eslint-disable react/prop-types */
// import React from 'react';
// import { Container, Card } from "react-bootstrap";

const Resultados = ({ clima }) => {
  return (
    <>
    {console.log(clima)};
    <h2>Ciudad: {clima.name}</h2>
    <h2>Nubes: {clima.clouds.all}</h2>
    <h2>Sensacion Termica: {parseInt((clima.main.feels_like - 273))}°C</h2>
    <h2>Humedad: {clima.main.humidity}</h2>
    <h2>Presion: {clima.main.pressure}</h2>
    <h2>Temperatura: {parseInt((clima.main.temp - 273.15))}°C</h2>
    <h2>Temp. Maxima: {parseInt((clima.main.temp_max - 273.15))}°C</h2>
    <h2>Temp. Minima: {parseInt((clima.main.temp_min - 273.15))}°C</h2>
    <h2>Clima: {clima.weather[0].description}</h2>
    <h2>{clima.weather[0].main}</h2>
    </>
  );
};

export default Resultados;
