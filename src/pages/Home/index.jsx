import { Header } from '../../components/Header';

import { Container } from './styles';

import {RiAddFill} from 'react-icons/ri'

import { Button } from '../../components/Button';

export function Home() {

  return(
    <Container>
      <Header />

      <main>
        <Button title="Adicionar Filme" icon={RiAddFill}/>
      </main>

      
    </Container>
  );
  
}