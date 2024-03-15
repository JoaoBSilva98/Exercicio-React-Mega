import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <h1>Jogo da Mega Sena</h1>
          <Button variant="primary">Gerar Jogo</Button>
          <div className="mt-3">
            <h2>Números Sorteados:</h2>
            <ul>
              {}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
