import { Container, Profile, Brand } from './styles';
import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';

import { Link } from 'react-router-dom';

import { api } from '../../services/api';

export function Header() {

  const { signOut, user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return(

   <Container>

      <Brand to='/'>
        <h1>RocketMovies</h1>
      </Brand>

      <Input placeholder="Pesquisar pelo título"></Input>

      <Profile>

        <div>
          <p>{user.name}</p>
          <a onClick={signOut}>sair</a>
        </div>

        <Link className='profileImg' to="/profile">
          <img src={avatarURL} alt="Avatar do Usuário" />
        </Link>

      </Profile>
    
   </Container> 

  )

}