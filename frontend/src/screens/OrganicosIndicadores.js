import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';

export default function OrganicosIndicadores() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <Container className="small-container2">
      <h3 className="my-3">INDICADORES DEL SGIRS (ORGANICOS)</h3>
      <br></br>
      <Form onSubmit>
        {/* INDICADOR 1 */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                Indicador 1: Evaluar la evolución de la incorporación de los RSO
                a la cadena de aprovechamiento mensualmente : RSO aprovechados
                (kg) RSO aprovechables generados *100
              </th>
              <th>Enero</th>
              <th>Febrero</th>
              <th>Marzo</th>
              <th>Abril</th>
              <th>Mayo</th>
              <th>Junio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>RSO aprovechados (kg)</td>
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
              <td>RSO aprovechables generados (kg)</td>
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

        <br></br>
        <div className="boton">
          <Button type="submit" variant="success">
            Guardar
          </Button>
        </div>
      </Form>
    </Container>
  );
}
