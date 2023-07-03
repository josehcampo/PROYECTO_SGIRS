import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';

export default function EventosMasivosIndicadores() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <Container className="small-container2">
      <br></br>
      <h4 className="my-3">INDICADORES DEL SGIRS (EVENTOS MASIVOS)</h4>
      <br></br>
      <Form onSubmit>
        {/* INDICADOR 1 */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                Indicador 1: Porcentaje de residuos aprovechables reincorporados
                a la cadena productiva de reciclaje
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
              <td>
                Porcentaje de residuos aprovechables entregados al reciclador de
                oficio (kg)
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
              <td className="columnas">
                <Form.Control type="number" required />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Peso total de residuos no aprovechables aforados (kg)</td>
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
                Indicador 2: Vinculación a un prestador de la actividad de
                aprovechamiento (Reciclador de oficio eventos públicos)
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
              <td>Cumple</td>
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
              <td>No cumple </td>
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
                Indicador 3: Porcentaje de actividades IEC ejecutadas al
                interior del desarrollo de eventos masivo
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
              <td>Número de actividades IEC ejecutadas </td>
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
              <td>1</td>
              <td>Número de actividades IEC programadas </td>
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
              <th colSpan={2}>
                Indicador 4: Evaluar la evolución de la incorporación de los RSO
                a la cadena de aprovechamiento mensualmente
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
              <td>RSO entregados a gestores de aprovechamiento (kg)</td>
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
              <td>Residuos sólidos ordinarios generados (kg)</td>
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
              <td colSpan={2}>Resultado Indicador 4 </td>
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
