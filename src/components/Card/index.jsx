import { Container } from './styles';

import { Tag } from '../Tag';

import { Stars } from '../Stars';

export function Card({ data, ...rest }) {

  return(

    <Container {...rest}>

      <a>{data.title}</a>

      <Stars rating={data.rating} />

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