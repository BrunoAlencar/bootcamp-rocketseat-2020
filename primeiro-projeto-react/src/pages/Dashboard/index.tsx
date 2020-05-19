import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepository] = useState([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`);
    console.log(response.data);
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
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
      </Repositories>
    </>
  );
};

export default Dashboard;
