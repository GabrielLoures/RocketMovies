import { Container, Background, Form } from './styles';

import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

import { Input } from '../../components/Input';

import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

export function SignIn() {

  return(
    <Container>

      <Form>

        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu Login</h2>
        
        <Input placeholder="E-mail" type="text" icon={HiOutlineMail} />
        <Input placeholder="Senha" type="passaword" icon={HiOutlineLockClosed} />

        <Button title="Entrar" />

        <Link to="/register">Criar Conta</Link>
      </Form>
    
      <Background></Background>

    </Container>
  )
  
}