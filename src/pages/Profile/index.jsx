import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { Container, Header, Form, Avatar } from './styles';

import { HiOutlineArrowSmLeft, HiOutlineCamera, HiOutlineUser, HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

import { Input } from '../../components/Input';

import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';
import { api } from '../../services/api';

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  async function handleUpdate() {
    const user = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew
    }

    await updateProfile({ user })
  }

  return(

    <Container>

      <Header>
        <Link to='/'>
          <HiOutlineArrowSmLeft />
          Voltar
        </Link>
      </Header>

      <Avatar>

        <img src="https://github.com/GabrielLoures.png" alt="Avatar do Usuário" />
        <label>
          <HiOutlineCamera/>
          <input id="avatar" type="file" />
        </label>

      </Avatar>

      <Form>

        <Input 
          placeholder="Nome" 
          type="text" 
          icon={HiOutlineUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder="E-mail" 
          type="text" 
          icon={HiOutlineMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha Atual" 
          type="password" 
          icon={HiOutlineLockClosed}
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input 
          placeholder="Nova Senha" 
          type="password" 
          icon={HiOutlineLockClosed}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}/>

      </Form>

    </Container>

  );

}