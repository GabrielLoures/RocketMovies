import { Container, Profile, Brand } from './styles';

import { Input } from '../Input';

export function Header() {

  return(

   <Container>

      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input placeholder="Pesquisar pelo título"></Input>

      <Profile>
        <div>
          <p>Gabriel Loures</p>
          <a href="#">sair</a>
        </div>

        <img src="https://github.com/GabrielLoures.png" alt="Avatar do Usuário" />
      </Profile>
    
   </Container> 

  )

}