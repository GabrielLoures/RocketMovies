import { useState } from 'react';

import { Container, Background, Form } from './styles';

import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

import { Input } from '../../components/Input';

import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

export function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  }

  return(
    <Container>

      <Form>

        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu Login</h2>
        
        <Input 
          placeholder="E-mail" 
          type="text" 
          icon={HiOutlineMail}
          onChange={e => setEmail(e.target.value)} 
        />
        <Input 
          placeholder="Senha" 
          type="password" 
          icon={HiOutlineLockClosed}
          onChange={e => setPassword(e.target.value)} 
        />

        <Button title="Entrar" onClick={ handleSignIn }/>

        <Link to="/register">Criar Conta</Link>
      </Form>
    
      <Background></Background>

    </Container>
  )
  
}