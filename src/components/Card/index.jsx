import { Container } from './styles';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { Tag } from '../Tag';

export function Card({ data, ...rest }) {

  return(

    <Container {...rest}>

      <a>{data.title}</a>

      <div>
        < AiFillStar />
        < AiFillStar />
        < AiFillStar />
        < AiFillStar />
        < AiOutlineStar />
      </div>

      <p>
        {data.description}
      </p>

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