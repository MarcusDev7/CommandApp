import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const cartaoRef = useRef(null);
  const mesaRef = useRef(null);
  const usuarioRef = useRef(null);
  const [selectedInput, setSelectedInput] = useState(null);
  const navigate = useNavigate();

  const addToInput = (value) => {
    if (selectedInput === 'cartao') {
      cartaoRef.current.value += value;
    } else if (selectedInput === 'mesa') {
      mesaRef.current.value += value;
    } else if (selectedInput === 'usuario') {
      usuarioRef.current.value += value;
    }
  };

  const clearInput = () => {
    if (selectedInput === 'cartao') {
      cartaoRef.current.value = '';
    } else if (selectedInput === 'mesa') {
      mesaRef.current.value = '';
    } else if (selectedInput === 'usuario') {
      usuarioRef.current.value = '';
    }
  };

  const deleteLast = () => {
    if (selectedInput === 'cartao') {
      cartaoRef.current.value = cartaoRef.current.value.slice(0, -1);
    } else if (selectedInput === 'mesa') {
      mesaRef.current.value = mesaRef.current.value.slice(0, -1);
    } else if (selectedInput === 'usuario') {
      usuarioRef.current.value = usuarioRef.current.value.slice(0, -1);
    }
  };

  const handleConfirm = async () => {
    console.log('Botão CONFIRMAR foi clicado!');
    
    const data = {
      cartao: cartaoRef.current.value,
      mesa: mesaRef.current.value,
      usuario: usuarioRef.current.value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso');
        navigate('/pedido');
      } else {
        console.error('Erro ao salvar os dados');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <div className="body">
      <header className="header">
        <h1>
          COMMAND-APP - TERMINAL LIVRE <p className="version">Versão Teste 1.1.1</p>
        </h1>
      </header>

      <div className="terminal-titulo">
        <h1>TERMINAL PRINCIPAL</h1>
      </div>

      <div className="inputs-container">
        <h1 className="input-titulo">CARTÃO</h1>
        <input
          type="text"
          className="input-field"
          ref={cartaoRef}
          onFocus={() => setSelectedInput('cartao')}
        />
        <h1 className="input-titulo1">MESA</h1>
        <input
          type="text"
          className="input-field"
          ref={mesaRef}
          onFocus={() => setSelectedInput('mesa')}
        />
        <h1 className="input-titulo2">USUÁRIO</h1>
        <input
          type="text"
          className="input-field"
          ref={usuarioRef}
          onFocus={() => setSelectedInput('usuario')}
        />
      </div>

      <div>
        <button className="confirmar" onClick={handleConfirm}>CONFIRMAR</button>
      </div>

      <div className="button-container">
        <button className="buttonA" onClick={clearInput}>CE</button>
        <button className="buttonB" onClick={deleteLast}>DEL</button>
        <button className="button" onClick={() => addToInput('0')}>0</button>
        <button className="button" onClick={() => addToInput('7')}>7</button>
        <button className="button" onClick={() => addToInput('8')}>8</button>
        <button className="button" onClick={() => addToInput('9')}>9</button>
        <button className="button" onClick={() => addToInput('4')}>4</button>
        <button className="button" onClick={() => addToInput('5')}>5</button>
        <button className="button" onClick={() => addToInput('6')}>6</button>
        <button className="button" onClick={() => addToInput('1')}>1</button>
        <button className="button" onClick={() => addToInput('2')}>2</button>
        <button className="button" onClick={() => addToInput('3')}>3</button>
      </div>

      <footer className="rodape">
        <p>© 2025 CommandApp - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
