import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#a">
          <img
            src="https://avatars0.githubusercontent.com/u/11480376?s=460&u=249d0d0419f27e0e5915c40b0f4c9a538232ddd9&v=4"
            alt="Bruno Alencar"
          />
          <div>
            <strong>github/brunoalencar</strong>
            <p>Easy peasy lemon squeezy</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#a">
          <img
            src="https://avatars0.githubusercontent.com/u/11480376?s=460&u=249d0d0419f27e0e5915c40b0f4c9a538232ddd9&v=4"
            alt="Bruno Alencar"
          />
          <div>
            <strong>github/brunoalencar</strong>
            <p>Easy peasy lemon squeezy</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#a">
          <img
            src="https://avatars0.githubusercontent.com/u/11480376?s=460&u=249d0d0419f27e0e5915c40b0f4c9a538232ddd9&v=4"
            alt="Bruno Alencar"
          />
          <div>
            <strong>github/brunoalencar</strong>
            <p>Easy peasy lemon squeezy</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
