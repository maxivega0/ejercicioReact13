// import React from 'react';
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Formulario = () => {
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    setCiudad(e.target.value);
    setPais(e.target.value);
    console.log(pais);
    console.log(ciudad);
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
      </Container>
    </div>
  );
};

export default Formulario;
