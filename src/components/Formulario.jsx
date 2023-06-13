// import React from 'react';
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Resultados from './Resultados';

const Formulario = () => {
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [clima, setClima] = useState({})

  useEffect(()=> {
    // consultarAPI();
  },[]);
  const consultarAPI = async () =>{
    try{
      const respuesta = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=17bbea418e838f2155c2a01f07874871`);
      const dato = await respuesta.json()
      console.log(respuesta);
      console.log(dato);
      setClima(dato);
      console.log(clima);
    } catch(error){
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCiudad(e.target.value);
    setPais(e.target.value);
    console.log(pais);
    console.log(ciudad);
    consultarAPI();
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="ubicacion">
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
            <Button variant="warning" type="submit">
              Buscar
            </Button>
          </Form.Group>
        </Form>
        <Resultados clima={clima}></Resultados>
      </Container>
    </div>
  );
};

export default Formulario;
