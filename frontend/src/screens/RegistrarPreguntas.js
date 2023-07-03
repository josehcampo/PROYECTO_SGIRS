import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

export default function ComercialyServicios() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  {
    /* CONDICIONAL ORGANICOS */
  }
  const [respuestaOrganicos, setRespuestaOrganicos] = useState('');
  const [mostrarPreguntaOrganicos, setMostrarPreguntaOrganicos] =
    useState(false);

  const handleRespuestaOrganicosChange = (event) => {
    setRespuestaOrganicos(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaOrganicos(true);
    } else {
      setMostrarPreguntaOrganicos(false);
    }
  };

  {
    /* CONDICIONAL APROVECHABLES */
  }
  const [respuestaAprovechables, setRespuestaAprovechables] = useState('');
  const [mostrarPreguntaAprovechables, setMostrarPreguntaAprovechables] =
    useState(false);

  const handleRespuestaAprovechablesChange = (event) => {
    setRespuestaAprovechables(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaAprovechables(true);
    } else {
      setMostrarPreguntaAprovechables(false);
    }
  };

  const [respuestaAprovechables1, setRespuestaAprovechables1] = useState('');

  const [mostrarPreguntaAprovechables1, setMostrarPreguntaAprovechables1] =
    useState(false);

  const [mostrarPreguntaAprovechables2, setMostrarPreguntaAprovechables2] =
    useState(false);

  const handleRespuestaAprovechablesChange1 = (event) => {
    setRespuestaAprovechables1(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaAprovechables1(true);
    } else {
      setMostrarPreguntaAprovechables1(false);
    }
    if (event.target.value === 'no') {
      setMostrarPreguntaAprovechables2(true);
    } else {
      setMostrarPreguntaAprovechables2(false);
    }
  };

  {
    /* CONDICIONAL ACU */
  }
  const [respuestaAcu, setRespuestaAcu] = useState('');
  const [mostrarPreguntaAcu, setMostrarPreguntaAcu] = useState(false);

  const handleRespuestaAcuChange = (event) => {
    setRespuestaAcu(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaAcu(true);
    } else {
      setMostrarPreguntaAcu(false);
    }
  };

  const [respuestaAcu1, setRespuestaAcu1] = useState('');

  const [mostrarPreguntaAcu1, setMostrarPreguntaAcu1] = useState(false);

  const handleRespuestaAcu1Change = (event) => {
    setRespuestaAcu1(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaAcu1(true);
    } else {
      setMostrarPreguntaAcu1(false);
    }
  };

  {
    /* CONDICIONAL RAEE */
  }
  const [respuestaRaee, setRespuestaRaee] = useState('');
  const [mostrarPreguntaRaee, setMostrarPreguntaRaee] = useState(false);

  const handleRespuestaRaeeChange = (event) => {
    setRespuestaRaee(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaRaee(true);
    } else {
      setMostrarPreguntaRaee(false);
    }
  };

  const [respuestaRaee1, setRespuestaRaee1] = useState('');

  const [mostrarPreguntaRaee1, setMostrarPreguntaRaee1] = useState(false);

  const handleRespuestaRaee1Change = (event) => {
    setRespuestaRaee1(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaRaee1(true);
    } else {
      setMostrarPreguntaRaee1(false);
    }
  };

  {
    /* CONDICIONAL RCD */
  }
  const [respuestaRcd, setRespuestaRcd] = useState('');
  const [mostrarPreguntaRcd, setMostrarPreguntaRcd] = useState(false);

  const handleRespuestaRcdChange = (event) => {
    setRespuestaRcd(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaRcd(true);
    } else {
      setMostrarPreguntaRcd(false);
    }
  };

  const [respuestaRcd1, setRespuestaRcd1] = useState('');

  const [mostrarPreguntaRcd1, setMostrarPreguntaRcd1] = useState(false);

  const handleRespuestaRcd1Change = (event) => {
    setRespuestaRcd1(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaRcd1(true);
    } else {
      setMostrarPreguntaRcd1(false);
    }
  };

  {
    /* CONDICIONAL PELIGROSOS */
  }
  const [respuestaPeligrosos, setRespuestaPeligrosos] = useState('');
  const [mostrarPreguntaPeligrosos, setMostrarPreguntaPeligrosos] =
    useState(false);

  const handleRespuestaPeligrososChange = (event) => {
    setRespuestaPeligrosos(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaPeligrosos(true);
    } else {
      setMostrarPreguntaPeligrosos(false);
    }
  };

  const [respuestaPeligrosos1, setRespuestaPeligrosos1] = useState('');

  const [mostrarPreguntaPeligrosos1, setMostrarPreguntaPeligrosos1] =
    useState(false);

  const handleRespuestaPeligrosos1Change = (event) => {
    setRespuestaPeligrosos1(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaPeligrosos1(true);
    } else {
      setMostrarPreguntaPeligrosos1(false);
    }
  };

  {
    /* CONDICIONAL VOLUMINOSOS */
  }
  const [respuestaVoluminosos, setRespuestaVoluminosos] = useState('');
  const [mostrarPreguntaVoluminosos, setMostrarPreguntaVoluminosos] =
    useState(false);

  const handleRespuestaVoluminososChange = (event) => {
    setRespuestaVoluminosos(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaVoluminosos(true);
    } else {
      setMostrarPreguntaVoluminosos(false);
    }
  };

  return (
    <Container className="small-container1">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4 className="my-3">CUESTIONARIO MANUAL DE SGIRS</h4>
      <br></br>
      <Form onSubmit>
        {/* PREGUNTA 1 */}
        <Form.Label>
          ¿Cuenta con un diagnóstico del SGIRS? Anexar documento de diagnóstico
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" />
        </Form.Group>
        <br></br>

        {/* PREGUNTA 2 */}
        <Form.Label>
          ¿Cuenta con la definición de un esquema organizacional en la que se
          asignen roles y responsabilidades para el cumplimiento del SGIRS?
          Anexar esquema con asignación de roles
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" />
        </Form.Group>
        <br></br>

        {/* PREGUNTA 3 */}
        <Form.Label>
          ¿Cuenta con una caracterización de residuos sólidos generados en el
          establecimiento? Si cuenta con la caracterización, anexar registro
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" />
        </Form.Group>
        <br></br>

        {/* PREGUNTA 4 */}
        <Form.Label>
          ¿Realiza separación en la fuente de acuerdo a la Resolución 2184 de
          2019?
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
        <br></br>

        {/* PREGUNTA 5 */}
        <Form.Label>
          ¿Cuenta con mobiliario para la separación de los residuos de acuerdo
          al código de colores exigidos en la Resolución 2184 de 2019?
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
        <br></br>

        {/* PREGUNTA 6 */}
        <Form.Label>
          ¿Cuénta con rutas de recolección interna de residuos?
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
        <br></br>

        {/* PREGUNTA 7 */}
        <Form.Label>
          ¿Cuenta con Unidad de Almacenamiento de Residuos (UAR)?
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
        <br></br>

        {/* PREGUNTA 8 */}
        <Form.Label>
          ¿Cual es la empresa del servicio público de aseo que realiza la
          recolección de los residuos no aprovechables?
        </Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Seleccione una opción</option>
          <option value="1">VEOLIA SA ESP</option>
          <option value="2">PROMOCALI SA ESP</option>
          <option value="3">PROMOVALLE SA ESP</option>
          <option value="4">CIUDAD LIMPIA SA ESP</option>
          <option value="5">PROASA SA ESP</option>
          <option value="6">LYS SA ESP</option>
          <option value="7">MISION AMBIENTAL SA ESP</option>
          <option value="8">PRO-AMBIENTALES SA ESP</option>
          <option value="9">SERVIAMBIENTALES SA ESP</option>
        </Form.Select>
        <br></br>

        {/* PREGUNTA 9 */}
        <Form.Label>
          ¿Cual es la frecuencia de recolección de residuos no aprovechables que
          realiza la empresa del servicio público de aseo?
        </Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Seleccione una opción</option>
          <option value="1">7 DÍAS A LA SEMANA</option>
          <option value="2">6 DÍAS A LA SEMANA</option>
          <option value="3">3 DÍAS A LA SEMANA</option>
          <option value="4">2 DÍAS A LA SEMANA</option>
          <option value="5">1 DÍA A LA SEMANA</option>
        </Form.Select>
        <br></br>

        {/* PREGUNTA 10 */}
        <Form.Label>
          ¿Se ha realizado aforo de los residuos ordinarios recolectados por la
          empresa del servicio público de aseo? Si cuenta con aforo, anexar el
          registro
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" />
        </Form.Group>
        <br></br>

        {/* PREGUNTA 11 */}
        <Form.Label>
          ¿Cuenta con plazoleta de comida, restaurante u ofrece un servicio que
          genere residuos sólidos orgánicos? Como cáscara de frutas, verduras,
          cáscara de huevos, entre otros.
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}

        {/* PREGUNTA 12 */}
        <Form.Label>
          ¿El establecimiento solicita la recolección de Residuos Sólidos
          Orgánicos - RSO a través de un gestor para su aprovechamiento? Si
          cuenta con certificados anexar en un solo archivo (formato PDF) los
          certificados correspondientes al periodo de reporte
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaOrganicos === 'si'}
              onChange={handleRespuestaOrganicosChange}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-2`}
              value="no"
              checked={respuestaOrganicos === 'no'}
              onChange={handleRespuestaOrganicosChange}
            />
          </div>
        ))}
        {mostrarPreguntaOrganicos && (
          <label>
            {/* PREGUNTA 13 */}
            <Form.Label>
              Especificar cuál es el gestor de Residuos Sólidos Orgánicos - RSO
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Seleccione una opción</option>
              <option value="1">HUMUS ABONOS ORGÁNICOS</option>
              <option value="2">GEMA GRIN</option>
              <option value="3">DISTRIABONOS LTDA</option>
              <option value="4">CORPOAMBIENTE</option>
              <option value="5">SOLTAC SAS</option>
              <option value="6">COMPOSTANDO</option>
              <option value="7">OTRO</option>
            </Form.Select>

            <br></br>
            {/* PREGUNTA 14 */}
            <Form.Label>
              ¿Cual es la frecuencia de recolección de los residuos sólidos
              orgánicos?
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Seleccione una opción</option>
              <option value="1">7 DÍAS A LA SEMANA</option>
              <option value="2">6 DÍAS A LA SEMANA</option>
              <option value="3">3 DÍAS A LA SEMANA</option>
              <option value="4">2 DÍAS A LA SEMANA</option>
              <option value="5">1 DÍA A LA SEMANA</option>
            </Form.Select>

            <br></br>
          </label>
        )}

        {/* PREGUNTA 15 */}
        <Form.Label>
          ¿El establecimiento genera residuos aprovechables? Como el papel,
          plastico, cartón, vídrio y metal
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaAprovechables === 'si'}
              onChange={handleRespuestaAprovechablesChange}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              value="no"
              checked={respuestaAprovechables === 'no'}
              onChange={handleRespuestaAprovechablesChange}
            />
          </div>
        ))}

        {mostrarPreguntaAprovechables && (
          <label>
            {/* PREGUNTA 16 */}
            <Form.Label>
              ¿Cuáles son los residuos aprovechables que genera? Seleccione una
              o varias opciones.
            </Form.Label>
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Plastico"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Cartón"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Vidrio"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Papel"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Metal"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}

            {/* PREGUNTA 17 */}
            <Form.Label>
              ¿Solicita recolección de residuos aprovechables a través de un
              gestor de aprovechamiento? Si cuenta con certificados de
              aprovechamiento anexar en un solo archivo (formato PDF) los
              certificados correspondientes al periodo de reporte
            </Form.Label>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" />
            </Form.Group>

            {/* PREGUNTA 18 */}
            <Form.Label>
              ¿El gestor es una Organización de Recicladores de Oficio
              reconocida por la UAESP?
            </Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Si"
                  type={type}
                  id={`inline-${type}-1`}
                  value="si"
                  checked={respuestaAprovechables1 === 'si'}
                  onChange={handleRespuestaAprovechablesChange1}
                />
                <Form.Check
                  inline
                  label="No"
                  type={type}
                  id={`inline-${type}-2`}
                  value="no"
                  checked={respuestaAprovechables1 === 'no'}
                  onChange={handleRespuestaAprovechablesChange1}
                />
              </div>
            ))}
            {mostrarPreguntaAprovechables1 && (
              <label>
                {/* PREGUNTA 19 */}
                <Form.Label>
                  Cual es la organización de recicladores de oficio que
                  recolecta los resiudos aprovechables
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">5</option>
                  <option value="2">4</option>
                  <option value="3">3</option>
                  <option value="4">2</option>
                  <option value="5">1</option>
                </Form.Select>
              </label>
            )}
            {mostrarPreguntaAprovechables2 && (
              <label>
                {/* PREGUNTA 20 */}
                <Form.Label>
                  Sino corresponde a una ORO reconocida por la UAESP ¿Cuál es el
                  gestor designado para la recolección de residuos
                  aprovechables?
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
                <br></br>
              </label>
            )}
            {/* PREGUNTA 21 */}
            <Form.Label>
              ¿Cual es la frecuencia de recolección de residuos aprovechables?
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Seleccione una opción</option>
              <option value="1">7 DÍAS A LA SEMANA</option>
              <option value="2">6 DÍAS A LA SEMANA</option>
              <option value="3">3 DÍAS A LA SEMANA</option>
              <option value="4">2 DÍAS A LA SEMANA</option>
              <option value="5">1 DÍA A LA SEMANA</option>
            </Form.Select>
            <br></br>
          </label>
        )}

        {/* PREGUNTA 22 */}
        <Form.Label>
          ¿El establecimiento genera Aceite de Cocina Usado - ACU?
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaAcu === 'si'}
              onChange={handleRespuestaAcuChange}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaAcu === 'no'}
              onChange={handleRespuestaAcuChange}
            />
          </div>
        ))}

        {mostrarPreguntaAcu && (
          <label>
            {/* PREGUNTA 23 */}
            <Form.Label>
              ¿El establecimiento solicita la recolección de Aceite de Cocina
              Usado - ACU a través de un gestor? Si cuenta con certificados
              anexar en un solo archivo (formato PDF) los certificados
              correspondientes al periodo de reporte
            </Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Si"
                  type={type}
                  id={`inline-${type}-1`}
                  value="si"
                  checked={respuestaAcu1 === 'si'}
                  onChange={handleRespuestaAcu1Change}
                />
                <Form.Check
                  inline
                  label="No"
                  type={type}
                  id={`inline-${type}-1`}
                  value="no"
                  checked={respuestaAcu1 === 'no'}
                  onChange={handleRespuestaAcu1Change}
                />
              </div>
            ))}

            {mostrarPreguntaAcu1 && (
              <label>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" />
                </Form.Group>

                {/* PREGUNTA 24 */}
                <Form.Label>
                  Especificar cuál es el gestor de Aceite de Cocina Usado - ACU.
                  Recuerde que la recolección solo se debe realizar por un
                  gestor autorizado por la autoridad ambiental competente, para
                  el Distrito de Santiago de Cali: DAGMA.{' '}
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">7</option>
                  <option value="2">6</option>
                  <option value="3">3</option>
                  <option value="4">2</option>
                  <option value="5">1</option>
                </Form.Select>
                <br></br>
              </label>
            )}
            {/* PREGUNTA 25 */}
            <Form.Label>
              ¿Cual es la frecuencia de recolección del Aceite de Cocina Usado -
              ACU?
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Seleccione una opción</option>
              <option value="1">7 DÍAS A LA SEMANA</option>
              <option value="2">6 DÍAS A LA SEMANA</option>
              <option value="3">3 DÍAS A LA SEMANA</option>
              <option value="4">2 DÍAS A LA SEMANA</option>
              <option value="5">1 DÍA A LA SEMANA</option>
            </Form.Select>
            <br></br>
          </label>
        )}

        {/* PREGUNTA 26 */}
        <Form.Label>
          ¿El establecimiento genera residuos de aparatos eléctricos y
          electrónicos - RAEE? Como pilas, luminarias, computadores
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaRaee === 'si'}
              onChange={handleRespuestaRaeeChange}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaRaee === 'no'}
              onChange={handleRespuestaRaeeChange}
            />
          </div>
        ))}

        <br></br>
        {mostrarPreguntaRaee && (
          <label>
            {/* PREGUNTA 27 */}
            <Form.Label>
              ¿Cuáles son los Residuos de Aparatos Electricos y Electrónicos -
              RAEE que genera? Seleccione una o varias opciones
            </Form.Label>
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Electrodomésticos"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Equipos de informática"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Radiografias"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Herramientas eléctricas"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Baterias"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Baterias"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Pilas"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Juguetes electrónicos"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Lamparas"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Bombillas"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Luminarias"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}

            {/* PREGUNTA 28 */}
            <Form.Label>
              ¿El establecimiento solicita la recolección de residuos de
              aparatos electricos y electrónicos - RAEE a través de un gestor?
              Si cuenta con certificados anexar en un solo archivo (formato PDF)
              los certificados correspondientes al periodo de reporte
            </Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Si"
                  type={type}
                  id={`inline-${type}-1`}
                  value="si"
                  checked={respuestaRaee1 === 'si'}
                  onChange={handleRespuestaRaee1Change}
                />
                <Form.Check
                  inline
                  label="No"
                  type={type}
                  id={`inline-${type}-1`}
                  value="no"
                  checked={respuestaRaee1 === 'no'}
                  onChange={handleRespuestaRaee1Change}
                />
              </div>
            ))}

            {mostrarPreguntaRaee1 && (
              <label>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" />
                </Form.Group>

                {/* PREGUNTA 29 */}
                <Form.Label>
                  Especificar cuál es el gestor de los Residuos de Aparatos
                  Electricos y Electrónicos - RAEE. Recuerde que la recolección
                  solo se debe realizar por un gestor autorizado por la
                  autoridad ambiental competente para gestionar RAEE, en este
                  caso CVC.
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">7</option>
                  <option value="2">6</option>
                  <option value="3">3</option>
                  <option value="4">2</option>
                  <option value="5">1</option>
                </Form.Select>
                <br></br>
              </label>
            )}
          </label>
        )}

        {/* PREGUNTA 30 */}
        <Form.Label>
          ¿El establecimento genera Residuos de Construcción y Demolición - RCD?
          Mal llamados escombros. Nota: Si el area de construcción donde se
          generan los RCD es igual o mayor a 2000 m2, la gestión de estos
          residuos les aplica otro tipo de lineamientos normativos.
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaRcd === 'si'}
              onChange={handleRespuestaRcdChange}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaRcd === 'no'}
              onChange={handleRespuestaRcdChange}
            />
          </div>
        ))}
        <br></br>

        {mostrarPreguntaRcd && (
          <label>
            {/* PREGUNTA 31 */}
            <Form.Label>
              ¿El establecimiento solicita la recolección de Residuos de
              Construcción y Demolición - RCD a través de un gestor? Si cuenta
              con certificados anexar en un solo archivo (formato PDF) los
              certificados correspondientes al periodo de reporte
            </Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Si"
                  type={type}
                  id={`inline-${type}-1`}
                  value="si"
                  checked={respuestaRcd1 === 'si'}
                  onChange={handleRespuestaRcd1Change}
                />
                <Form.Check
                  inline
                  label="No"
                  type={type}
                  id={`inline-${type}-1`}
                  value="no"
                  checked={respuestaRcd1 === 'no'}
                  onChange={handleRespuestaRcd1Change}
                />
              </div>
            ))}

            {mostrarPreguntaRcd1 && (
              <label>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" />
                </Form.Group>
                {/* PREGUNTA 32 */}
                <Form.Label>
                  <br></br>
                  Especificar cuál es el gestor de los Residuos de Construcción
                  y Demolición - RCD. Recuerde que la recolección solo se debe
                  realizar por un gestor autorizado por la autoridad ambiental
                  competente, para el Distrito de Santiago de Cali: DAGMA.
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">7</option>
                  <option value="2">6</option>
                  <option value="3">3</option>
                  <option value="4">2</option>
                  <option value="5">1</option>
                </Form.Select>
                <br></br>
              </label>
            )}
          </label>
        )}

        {/* PREGUNTA 33 */}
        <Form.Label>¿El establecimento genera Residuos Peligrosos?.</Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaPeligrosos === 'si'}
              onChange={handleRespuestaPeligrososChange}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaPeligrosos === 'no'}
              onChange={handleRespuestaPeligrososChange}
            />
          </div>
        ))}

        {mostrarPreguntaPeligrosos && (
          <label>
            {/* PREGUNTA 34 */}
            <Form.Label>
              ¿Cuáles son los Residuos Peligrosos que genera? Seleccione una o
              varias opciones
            </Form.Label>
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Jeringas"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
              </div>
            ))}

            {/* PREGUNTA 35 */}
            <Form.Label>
              ¿El establecimiento solicita la recolección residuos peligrosos a
              través de un gestor? Si cuenta con certificados anexar en un solo
              archivo (formato PDF) los certificados correspondientes al periodo
              de reporte
            </Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Si"
                  type={type}
                  id={`inline-${type}-1`}
                  value="si"
                  checked={respuestaPeligrosos1 === 'si'}
                  onChange={handleRespuestaPeligrosos1Change}
                />
                <Form.Check
                  inline
                  label="No"
                  type={type}
                  id={`inline-${type}-1`}
                  value="no"
                  checked={respuestaPeligrosos1 === 'no'}
                  onChange={handleRespuestaPeligrosos1Change}
                />
              </div>
            ))}

            {mostrarPreguntaPeligrosos1 && (
              <label>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" />
                </Form.Group>
                {/* PREGUNTA 36 */}
                <Form.Label>
                  <br></br>
                  Especificar cuál es el gestor de residuos peligrosos. Recuerde
                  que la recolección solo se debe realizar por un gestor
                  autorizado por la autoridad ambiental competente, para el
                  Distrito de Santiago de Cali: DAGMA.
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">7</option>
                  <option value="2">6</option>
                  <option value="3">3</option>
                  <option value="4">2</option>
                  <option value="5">1</option>
                </Form.Select>
                <br></br>
              </label>
            )}
          </label>
        )}
        {/* PREGUNTA 37 */}
        <Form.Label>
          ¿El establecimento genera residuos voluminosos? Como colchones,
          muebles, estanterias
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaVoluminosos === 'si'}
              onChange={handleRespuestaVoluminososChange}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaVoluminosos === 'no'}
              onChange={handleRespuestaVoluminososChange}
            />
          </div>
        ))}
        {mostrarPreguntaVoluminosos && (
          <label>
            {/* PREGUNTA 38 */}
            <Form.Label>
              ¿Cuáles son los Residuos Voluminosos que genera? Seleccione una o
              varias opciones
            </Form.Label>
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Muebles"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
              </div>
            ))}
          </label>
        )}

        {/* PREGUNTA 39 */}
        <Form.Label>
          ¿Conoce las lineas de atención para la recolección de Residuos
          Voluminosos?
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}

        {/* PREGUNTA 40 */}
        <Form.Label>
          ¿El establecimiento cuenta con un programa de comunicación donde
          realiza actividades de Información Educación y Comunicación - IEC con
          relación a la implementación del SGIRS? Anexar registro de soportes y
          actividades de IEC
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" />
        </Form.Group>

        {/* PREGUNTA 41 */}
        <Form.Label>
          ¿El establecimiento realiza acciones de mejora continua al SGIRS?
          ¿Cuales acciones de mejora ha implementado teniendo en cuenta el
          cuadro de “acciones de mejora” establecido en el manual.
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" />
        </Form.Group>
        <br></br>

        <div className="boton">
          <Link to={`/comercialIndicadores?redirect=${redirect}`}>
            <Button variant="success" type="submit">
              Siguiente
            </Button>
          </Link>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Form>
    </Container>
  );
}
