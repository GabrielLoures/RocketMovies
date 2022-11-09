import { Container } from './styles';

import { AiOutlineClockCircle } from 'react-icons/ai';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Tag } from '../Tag';
import { Stars } from '../Stars';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function MovieHeader({ data, ...rest }) {

  const { user } = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container {...rest}>

      <div>
        
        <h1>{data.title}</h1>
        <div className="stars">
          <Stars rating={data.rating} />
        </div>
  
      </div>

      <div className="infos">

        <img src={avatarURL} alt="Avatar do Usuário" />
        <span>Por {user.name}</span>
        <AiOutlineClockCircle/>
        <span>Criado em {data.date}</span>

      </div>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />) 
          }
        </footer>
      }

    </Container>
  )

}