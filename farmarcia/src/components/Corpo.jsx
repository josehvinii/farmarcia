import React from 'react';
import './Corpo.css';

function Corpo() {
  return (
    <div className='Corpo-container'>
      <img className='logoGrande' src="./images/farmarcia-logo-grande.PNG.png" alt="Logo da Farmácia" />
      <h1 className='boasVindas'>Bem-vindo à Farmárcia!</h1>
      <p className='textoApresentacao'>
        Estamos aqui para cuidar da sua saúde e bem-estar. Navegue pelo nosso site e descubra uma ampla variedade de medicamentos, produtos de cuidados pessoais e muito mais. Sua saúde é nossa prioridade!
      </p>
      <div className='convite-container'>
        <h2 className='tituloConvite'>Convite para a Inauguração!</h2>
        <p className='textoConvite'>
          Temos o prazer de convidá-lo para a inauguração da nossa farmácia!
        </p>
        <p className='detalhesConvite'>
          📅 Data: 15 de novembro de 2024<br />
          🕒 Horário: 10h às 18h<br />
          📍 Local: Rua da Saúde, 123 - Centro
        </p>
        <p className='textoConvite'>
          Venha conhecer nossas ofertas especiais e participar de atividades gratuitas!
        </p>
      </div>
    </div>
  );
}

export default Corpo;
