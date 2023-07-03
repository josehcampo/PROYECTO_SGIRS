import Axios from 'axios';

import { Link, useLocation, useNavigate } from 'react-router-dom';
// import data from '../data';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
//import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';

import { useContext, useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { getError } from '../utils';

export default function SigninScreen() {
  const navigate = useNavigate();

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const { state, dispatch: ctxDispatch } = useContext(Store);
  //const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      //    ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  // useEffect(() => {
  //  if (userInfo) {
  navigate(redirect);
  // }
  // }, [navigate, redirect, userInfo]);

  return (
    <div>
      <section className="formulario">
        <Container className="small-container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h4 className="my-3">Iniciar Sesión</h4>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="mb-3">
              <Button variant="success" type="submit">
                Ingresar
              </Button>
            </div>
            <div className="mb-3">
              Nuevo usuario?{' '}
              <Link to={`/CrearUsuario?redirect=${redirect}`}>
                Crear una cuenta
              </Link>
            </div>
            <div className="mb-3">
              Olvido su contraseña?{' '}
              <Link to={`/forget-password`}>Restaurar contraseña</Link>
            </div>
          </Form>
        </Container>
      </section>
    </div>
  );
}
