import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';
import Spinner from 'react-bootstrap/Spinner';

import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { getError } from '../utils';

export default function SignupScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [nit, setNit] = useState('');

  const [idsector, setIdector] = useState([]);
  const [selectedNomsector, setSelectedNomsector] = useState('');

  const [nomestablecimiento, setNomestablecimiento] = useState('');
  const [direccion, setDireccion] = useState('');
  const [comuna, setComuna] = useState('');
  const [barrio, setBarrio] = useState('');
  const [email, setEmail] = useState('');
  const [nomresponsable, setNomresponsable] = useState('');
  const [numero, setNumero] = useState('');
  const [password, setPassword] = useState('');

  // const { userInfo } = state;

  useEffect(() => {
    fetchSectores();
  }, []);

  const fetchSectores = async () => {
    try {
      const response = await Axios.get('http://localhost:4000/crearusuario/12');
      setIdector(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await Axios.post('http://localhost:4000/crearusuario', {
        nit,
        idsector: selectedNomsector,
        nomestablecimiento,
        direccion,
        comuna,
        barrio,
        email,
        nomresponsable,
        numero,
        password,
      });

      //localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  // useEffect(() => {
  //  if (userInfo) {
  //   navigate(redirect);
  //  }
  // }, [navigate, redirect, userInfo]);

  const [loading, setLoading] = useState(false);

  return (
    <Container className="small-container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <h4 className="my-3">Registrar Usuario</h4>
      <br></br>

      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="nit">
          <Form.Label>Nit</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setNit(e.target.value)}
            required
            placeholder="Digite el NIT sin digito de verificación"
          />
        </Form.Group>

        <br></br>

        <Form.Group className="mb-3" controlId="nomsector">
          <Form.Label>Nombre del sector</Form.Label>
          <Form.Select
            value={selectedNomsector}
            onChange={(e) => setSelectedNomsector(e.target.value)}
          >
            <option value="">Seleccionar opción</option>
            {idsector.map((sector) => (
              <option key={sector.id} value={sector.id}>
                {sector.nombre}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="nomestablecimiento">
          <Form.Label>Nombre del establecimiento</Form.Label>
          <Form.Control
            onChange={(e) => setNomestablecimiento(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="direccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="comuna">
          <Form.Label>Comuna</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setComuna(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="barrio">
          <Form.Label>Barrio</Form.Label>
          <Form.Control onChange={(e) => setBarrio(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="name@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="nomresponsable">
          <Form.Label>Nombre del responsable del SGIRS</Form.Label>
          <Form.Control
            onChange={(e) => setNomresponsable(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero de contacto</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setNumero(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <div className="mb-3">
          <Button variant="success" type="submit">
            {loading ? <Spinner animation="grow" size="sm" /> : 'Registrar'}
          </Button>
        </div>
        <div className="mb-3">
          Ya tiene una cuenta?{' '}
          <Link to={`/HomeScreen?redirect=${redirect}`}>Ingresar</Link>
        </div>
      </Form>
    </Container>
  );
}
