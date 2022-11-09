
import { Container, Profile, Brand } from './styles';
import { useAuth } from '../../hooks/auth';

import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({children}) {

  const { signOut, user } = useAuth();
  
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return(

   <Container>

      <Brand to='/'>
        <h1>RocketMovies</h1>
      </Brand>

      {children}

      <Profile>

        <div>
          <p>{user.name}</p>
          <a onClick={handleSignOut}>sair</a>
        </div>

        <Link className='profileImg' to="/profile">
          <img src={avatarURL} alt="Avatar do Usuário" />
        </Link>

      </Profile>
    
   </Container> 

  )

}