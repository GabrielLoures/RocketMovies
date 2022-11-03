import { useState } from "react";

import { Container, Background, Form } from './styles';

import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlineArrowSmLeft } from 'react-icons/hi';

import { api } from "../../services/api"

import { Input } from '../../components/Input';

import { Button } from '../../components/Button';

import { Link, useNavigate } from 'react-router-dom';

export function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {

    if(!name || !email || !password) {
      return alert("Por favor, preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      }else{
        alert("Não foi possível cadastrar")
      }
    })

  }

  return(
    <Container>

      <Form>

        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Crie sua Conta</h2>
        
        <Input 
          placeholder="Nome" 
          type="text" 
          icon={HiOutlineUser} 
          onChange={e => setName(e.target.value)}
        />

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

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/">
          <HiOutlineArrowSmLeft />
          Voltar para o login
        </Link>
      </Form>
    
      <Background></Background>

    </Container>
  )
  
}