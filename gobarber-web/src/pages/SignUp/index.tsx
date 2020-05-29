import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      });
      console.log(data);
      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      console.log(error);

      const erros = getValidationErrors(error);
      formRef.current?.setErrors(erros);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form
          // initialData={{
          //   name: 'bruno',
          //   email: 'bruno.ale@mail.com',
          //   password: '123123ß',
          // }}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h1>Faça seu cadastro</h1>
          <Input name="name" Icon={FiUser} placeholder="Nome" />

          <Input name="email" Icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            Icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
