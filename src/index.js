import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Container } from 'react-bootstrap';
import './index.css';

const App = () => {
  const [robertoCarlos, setRobertoCarlos] = useState([]);

  const gerarRobertoCarlos = () => {
    const novaSelecao = [];
    while (novaSelecao.length < 6) {
      const gol = Math.floor(Math.random() * 60) + 1;
      if (!novaSelecao.includes(gol)) {
        novaSelecao.push(gol);
      }
    }
    setRobertoCarlos(novaSelecao);
  };

  return (
    <Container className="text-center mt-5">
      <div className="box">
        <div className="title-container">
          <h1 className="title">Mega Sena</h1>
        </div>
        <div className="number-container">
          {robertoCarlos.map((gol, index) => (
            <div key={index} className="number">{gol}</div>
          ))}
        </div>
        <Button variant="primary" onClick={gerarRobertoCarlos} className="generate-button mt-4">
          Gerar Jogo
        </Button>
      </div>
    </Container>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
