// import React from 'react';
import { Container } from "react-bootstrap";
import { Form, Button, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import Resultados from "./Resultados";

const Formulario = () => {
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [clima, setClima] = useState({});
  const [mostrarClima, setMostrarClima] = useState(0);

  useEffect(() => {
    // consultarAPI();
  }, []);
  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=17bbea418e838f2155c2a01f07874871`
      );
      const dato = await respuesta.json();
      // console.log(respuesta);
      // console.log(respuesta.ok);
      // console.log(dato);
      if (respuesta.ok) {
        setClima(dato);
        setMostrarClima(1);
        // console.log(clima);
      }else{
        setMostrarClima(2);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCiudad(e.target.value);
    setPais(e.target.value);
    // console.log(pais);
    // console.log(ciudad);
    consultarAPI();
  };

  return (
    <div>
      <Container>
        <h1>Tiempo en el Mundo</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 row" controlId="ubicacion">
            <Form.Label>Ingrese su pais:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Argentina"
              onChange={(e) => setPais(e.target.value)}
              value={pais}
            />
            <Form.Label>Ingrese su ciudad:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buenos Aires"
              onChange={(e) => setCiudad(e.target.value)}
              value={ciudad}
            />
            <Button variant="warning" type="submit" className="my-3">
              Buscar
            </Button>
          </Form.Group>
        </Form>
        {
          mostrarClima === 1 && <Resultados clima={clima}></Resultados>
        }
        {
          mostrarClima === 2 && <Alert variant="danger">
         La localizacion ingresada no existe, intenta nuevamente.
         </Alert>
        }
      </Container>
    </div>
  );
};

export default Formulario;
