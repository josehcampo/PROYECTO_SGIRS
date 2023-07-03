import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import seleccion from '../images/seleccion.png';
import consulta from '../images/consulta.png';

function RegistroConsulta() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <Container className="small-container1">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4 className="my-3">REGISTRO O CONSULTA DE INDICADORES</h4>
      <br></br>
      <br></br>
      <Form onSubmit>
        <div className="padre">
          <div>
            <Card style={{ width: '14rem' }}>
              <Link to={`/RegistrarPreguntas?redirect=${redirect}`}>
                <Card.Img variant="top" src={seleccion} />
              </Link>
              <Card.Body>
                <Card.Title>Nuevo registro de indicadores</Card.Title>
              </Card.Body>
              <Card.Body>
                <Link to={`/RegistrarPreguntas?redirect=${redirect}`}>
                  <Button variant="success">Responder Formulario</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '14rem' }}>
              <a href={`/RegistrarPreguntas?redirect=${redirect}`}>
                <Card.Img variant="top" src={consulta} />
              </a>
              <Card.Body>
                <Card.Title>Consulta de registro de indicadores</Card.Title>
              </Card.Body>
              <Card.Body>
                <Button variant="success">Consultar Formulario</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default RegistroConsulta;
