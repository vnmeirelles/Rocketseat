import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do reposiório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/40375673?s=460&u=bd614481b88a09958357d8ee1f9b2d4636f66dcf&v=4"
            alt="Vinicius Meirelles"
          />
          <div>
            <strong>vnmeirelles/rocketseat</strong>
            <p>
              Rocketseat - Bootcamp 14 - Treinamento imersivo em tecnologias Web
              (ReactJs, ReactNative, NodeJS)
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/40375673?s=460&u=bd614481b88a09958357d8ee1f9b2d4636f66dcf&v=4"
            alt="Vinicius Meirelles"
          />
          <div>
            <strong>vnmeirelles/rocketseat</strong>
            <p>
              Rocketseat - Bootcamp 14 - Treinamento imersivo em tecnologias Web
              (ReactJs, ReactNative, NodeJS)
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/40375673?s=460&u=bd614481b88a09958357d8ee1f9b2d4636f66dcf&v=4"
            alt="Vinicius Meirelles"
          />
          <div>
            <strong>vnmeirelles/rocketseat</strong>
            <p>
              Rocketseat - Bootcamp 14 - Treinamento imersivo em tecnologias Web
              (ReactJs, ReactNative, NodeJS)
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
