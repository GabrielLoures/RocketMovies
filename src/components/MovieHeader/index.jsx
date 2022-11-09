import { Container } from './styles';

import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from 'react-icons/ai';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Tag } from '../Tag';

export function MovieHeader({ data, ...rest }) {

  const { user } = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container {...rest}>

      <div>
        <h1>{data.title}</h1>

        <div className="stars">
          < AiFillStar />
          < AiFillStar />
          < AiFillStar />
          < AiFillStar />
          < AiOutlineStar />
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