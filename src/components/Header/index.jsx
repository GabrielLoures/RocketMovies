import { Container, Profile, Brand } from './styles';

import { Input } from '../Input';

import { Link } from 'react-router-dom';

export function Header() {

  return(

   <Container>

      <Brand to='/'>
        <h1>RocketMovies</h1>
      </Brand>

      <Input placeholder="Pesquisar pelo título"></Input>

      <Profile>

        <div>
          <p>Gabriel Loures</p>
          <a href="#">sair</a>
        </div>

        <Link className='profileImg' to="/profile">
          <img src="https://github.com/GabrielLoures.png" alt="Avatar do Usuário" />
        </Link>

      </Profile>
    
   </Container> 

  )

}