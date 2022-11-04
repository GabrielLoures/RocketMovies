import { Container, Profile, Brand } from './styles';
import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';

import { Link } from 'react-router-dom';

export function Header() {

  const { signOut } = useAuth();

  return(

   <Container>

      <Brand to='/'>
        <h1>RocketMovies</h1>
      </Brand>

      <Input placeholder="Pesquisar pelo título"></Input>

      <Profile>

        <div>
          <p>Gabriel Loures</p>
          <a onClick={signOut}>sair</a>
        </div>

        <Link className='profileImg' to="/profile">
          <img src="https://github.com/GabrielLoures.png" alt="Avatar do Usuário" />
        </Link>

      </Profile>
    
   </Container> 

  )

}