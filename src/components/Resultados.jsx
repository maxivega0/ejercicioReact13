/* eslint-disable react/prop-types */
// import React from 'react';
import { Card } from "react-bootstrap";

const Resultados = ({ clima }) => {
  return (
    <>
    <Card>
        <Card.Header><Card.Title>{clima.name}</Card.Title></Card.Header>
        <Card.Body>
          <Card.Text>
          Clima: {clima.weather[0].main} - {clima.weather[0].description} <br />
          Temperatura: {parseInt((clima.main.temp - 273.15))}°C <br />
          Sensacion Termica: {parseInt((clima.main.feels_like - 273))}°C <br />
          Maxima y Minima: {parseInt((clima.main.temp_max - 273.15))}°C - {parseInt((clima.main.temp_min - 273.15))}°C <br />
          Humedad: {clima.main.humidity} <br />
          Presion: {clima.main.pressure}

          </Card.Text>
        </Card.Body>
      </Card>
    {/* {console.log(clima)};
    <h2>Ciudad: {clima.name}</h2>
    <h2>Nubes: {clima.clouds.all}</h2>
    <h2></h2>
    <h2></h2>
    <h2></h2>
    <h2></h2>
    <h2></h2>
    <h2>Temp. Minima: </h2>
    <h2>Clima: {clima.weather[0].description}</h2>
    <h2></h2> */}
    </>
  );
};

export default Resultados;
