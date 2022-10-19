import { Container } from './styles';

import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from 'react-icons/ai';

import { Tag } from '../Tag';

export function MovieHeader({ data, ...rest }) {

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

        <img src="https://github.com/GabrielLoures.png" alt="Avatar do Usuário" />
        <span>Por Gabriel Loures</span>
        <AiOutlineClockCircle/>
        <span>19/10/2022 às 10:32</span>

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