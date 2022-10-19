import { Container, Background, Form } from './styles';

import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlineArrowSmLeft } from 'react-icons/hi';

import { Input } from '../../components/Input';

import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

export function SignUp() {

  return(
    <Container>

      <Form>

        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Crie sua Conta</h2>
        
        <Input placeholder="Nome" type="text" icon={HiOutlineUser} />
        <Input placeholder="E-mail" type="text" icon={HiOutlineMail} />
        <Input placeholder="Senha" type="password" icon={HiOutlineLockClosed} />

        <Button title="Cadastrar" />

        <Link to="/">
          <HiOutlineArrowSmLeft />
          Voltar para o login
        </Link>
      </Form>
    
      <Background></Background>

    </Container>
  )
  
}