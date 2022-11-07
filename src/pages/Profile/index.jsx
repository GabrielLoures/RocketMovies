import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { Container, Header, Form, Avatar } from './styles';

import { HiOutlineArrowSmLeft, HiOutlineCamera, HiOutlineUser, HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

import { Input } from '../../components/Input';

import { Button } from '../../components/Button';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Link } from 'react-router-dom';
import { api } from '../../services/api';

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const user = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew
    }

    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(e) {

    const file = e.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)

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

        <img src={avatar} alt="Avatar do Usuário" />
        <label>
          <HiOutlineCamera/>
          <input 
            id="avatar" 
            type="file" 
            onChange={handleChangeAvatar}
          />
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