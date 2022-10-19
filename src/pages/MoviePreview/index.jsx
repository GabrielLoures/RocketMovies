import { Container } from './styles';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';

import { Header } from '../../components/Header';
import { MovieHeader } from '../../components/MovieHeader';
import { Tag } from '../../components/Tag';


export function MoviePreview() {

  return (
    <Container>

      <Header/>

      <div>

        <a href="#">
          <HiOutlineArrowSmLeft />
          Voltar
        </a>

        <MovieHeader data={{
          title: "Interstellar",
          tags: [
            { id: '1', name: 'Ficção Científica'},
            { id: '2', name: 'Drama'},
            { id: '3', name: 'Família'},
          ]
        }}/>

      </div>

      


    </Container>
  )

}