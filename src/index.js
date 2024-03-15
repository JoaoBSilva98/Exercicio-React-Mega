import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Container} from 'react-bootstrap';
import './index.css';

const App = () => {
  const [numbers, setNumbers] = useState([]);

  const generateRandomNumber = () => {
    const newNumbers = [];
    while (newNumbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 60) + 1;
      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
      }
    }
    setNumbers(newNumbers);
  };

  return (
    <Container className="text-center mt-5">
      <h1 className="title">Mega Sena</h1>
      <div className="box">
        <div className="number-container">
          {numbers.map((number, index) => (
            <div key={index} className="number">{number}</div>
          ))}
        </div>
        <Button variant="primary" onClick={generateRandomNumber} className="generate-button mt-4">
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
