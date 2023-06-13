/* eslint-disable react/prop-types */
// import React from 'react';
// import { Container, Card } from "react-bootstrap";

const Resultados = ({ clima }) => {
  return (
    <>
    {console.log(clima)};
    <h2>{clima.name}</h2>
    <h2>{clima.clouds.all}</h2>
    <h2>{clima.main.feels_like}</h2>
    <h2>{clima.main.humidity}</h2>
    <h2>{clima.main.pressure}</h2>
    <h2>{clima.main.temp}</h2>
    <h2>{clima.main.temp_max}</h2>
    <h2>{clima.main.temp_min}</h2>
    <h2>{clima.weather[0].description}</h2>
    <h2>{clima.weather[0].icon}</h2>
    <h2>{clima.weather[0].main}</h2>
    </>
  );
};

export default Resultados;
