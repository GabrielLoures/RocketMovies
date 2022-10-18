import { Container, Header, Form, Avatar } from './styles';

import { HiOutlineArrowSmLeft, HiOutlineCamera, HiOutlineUser, HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

import { Input } from '../../components/Input';

import { Button } from '../../components/Button';

export function Profile() {

  return(

    <Container>

      <Header>
        <a href="#">
          <HiOutlineArrowSmLeft />
          Voltar
        </a>
      </Header>

      <Avatar>

        <img src="https://github.com/GabrielLoures.png" alt="Avatar do Usuário" />
        <label>
          <HiOutlineCamera/>
          <input id="avatar" type="file" />
        </label>

      </Avatar>

      <Form>

        <Input placeholder="Nome" type="text" icon={HiOutlineUser} />
        <Input placeholder="E-mail" type="text" icon={HiOutlineMail} />
        <Input placeholder="Senha Atual" type="password" icon={HiOutlineLockClosed} />
        <Input placeholder="Nova Senha" type="password" icon={HiOutlineLockClosed} />

        <Button title="Salvar"/>

      </Form>

    </Container>

  );

}