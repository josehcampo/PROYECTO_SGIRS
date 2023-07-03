import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';

export default function EntidadesPublicasIndicadores() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <Container className="small-container2">
      <br></br>
      <h4 className="my-3">INDICADORES DEL SGIRS (ENTIDADES PUBLICAS)</h4>
      <br></br>
      <Form onSubmit>
        {/* INDICADOR 1 */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                Indicador 1: Porcentaje de ejecución de actividades IEC:
              </th>
              <th className="columnas">Enero</th>
              <th className="columnas">Febrero</th>
              <th className="columnas">Marzo</th>
              <th className="columnas">Abril</th>
              <th className="columnas">Mayo</th>
              <th className="columnas">Junio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Número de Actividades IEC Ejecutadas</td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Número de Actividades IEC Programadas</td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Resultado Indicador 1 </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
            </tr>
          </tbody>
        </Table>

        {/* INDICADOR 2 */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                Indicador 2: Porcentaje de residuos sólidos aprovechables
                reincorporados a la cadena productiva de reciclaje:
              </th>
              <th className="columnas">Enero</th>
              <th className="columnas">Febrero</th>
              <th className="columnas">Marzo</th>
              <th className="columnas">Abril</th>
              <th className="columnas">Mayo</th>
              <th className="columnas">Junio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Peso total de residuos sólidos aprovechados (kg)</td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Peso total de residuos sólidos generados (kg)</td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Resultado Indicador 2 </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
            </tr>
          </tbody>
        </Table>

        {/* INDICADOR 3 */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                Indicador 3: Porcentaje de disminución de residuos sólidos no
                aprovechables generados en la entidad pública
              </th>
              <th className="columnas">Enero</th>
              <th className="columnas">Febrero</th>
              <th className="columnas">Marzo</th>
              <th className="columnas">Abril</th>
              <th className="columnas">Mayo</th>
              <th className="columnas">Junio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Peso total de residuos No aprovechables (kg)</td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Peso total de residuos generados (kg)</td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Resultado Indicador 3 </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
              <td className="columnas">
                <Form.Control disabled />
              </td>
            </tr>
          </tbody>
        </Table>

        {/* INDICADOR 4 */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={4}>
                Indicador 4: Cumplimiento de las condiciones técnicas de la
                unidad de almacenamiento de residuos UAR
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                ¿La UAR cuenta mínimo con las siguientes carácterísticas?
              </td>
              <td className="columnas">Si</td>
              <td className="columnas">No</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Recubrimiento que permita facil limpieza e impide el desarrollo
                de microorganismos
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div>
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-`}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>
                Ventilación e iluminación como rejillas o ventanas que impidan
                acceso de roedores, materiales factibles para rejillas,
                iluminación artificial.
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div>
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-`}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Se realiza control de vectores y roedores</td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div>
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-`}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>
                La ubicación y accesibilidad facilita la recoleción por la
                empresa prestadora del servicio de aseo y otros gestores, y
                además permanece cerrada permitiendo el solo el acceso del
                personal autorizado.
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div>
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-`}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>
                El punto hidráulico esta cercano y dentro de la UAR, además la
                frecuencia de lavado y desifencción se realiza una vez finalice
                el evento o diaria.
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div>
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-`}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>6</td>
              <td>
                Cuenta con elementos de seguridad como equipos de extición de
                incendios ubicados al exterior de la UAR y personal capacitado
                en manejo.
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div>
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-`}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>7</td>
              <td>
                Señalización en todos los lugares de almacenamiento, señales de
                seguridad y de obligación a cumplir.
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div>
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-`}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>8</td>
              <td>
                El área debe disponer de espacio suficiente para realizar el
                almacenamiento, la actividad de separación, evitar deterioro de
                material y ubica estibas y/o soportes de material resistentes
                para el almacenameinto de residuos aprovechables aislandolos del
                piso durante su almacenamiento.
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div>
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-`}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Resultado Indicador en porcentaje</td>
              <td colSpan={2}>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Disabled input" disabled />
                </Form.Group>
              </td>
            </tr>
          </tbody>
        </Table>

        <div className="boton">
          <Button variant="success" type="submit">
            Guardar
          </Button>
        </div>
        <br></br>
      </Form>
    </Container>
  );
}
