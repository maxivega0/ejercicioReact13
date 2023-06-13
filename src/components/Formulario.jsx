// import React from 'react';
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Formulario = () => {
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");

  return (
    <div>
      <Container>
        <Form >
          <Form.Group className="mb-3" controlId="ubicacion">
            <Form.Label>Ingrese su pais:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Argentina"
              
            />
            <Form.Label>Ingrese su ciudad:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buenos Aires"
              
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
