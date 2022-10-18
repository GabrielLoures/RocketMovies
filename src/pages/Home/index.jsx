import { Header } from '../../components/Header';

import { Container } from './styles';

import {RiAddFill} from 'react-icons/ri'

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

export function Home() {

  return(
    <Container>

      <Header />

      <div>
        <h1>Meus Filmes</h1>
        <Button title="Adicionar Filme" icon={RiAddFill}/>
      </div>

      <main>

        <Card data={{
          title: "Interstellar",
          tags: [
            { id: '1', name: 'Ficção Científica'},
            { id: '2', name: 'Drama'},
            { id: '3', name: 'Família'},
          ]
        }}/>
        <Card data={{
          title: "Interstellar",
          tags: [
            { id: '1', name: 'Ficção Científica'},
            { id: '2', name: 'Drama'},
            { id: '3', name: 'Família'},
          ]
        }}/>
        <Card data={{
          title: "Interstellar",
          tags: [
            { id: '1', name: 'Ficção Científica'},
            { id: '2', name: 'Drama'},
            { id: '3', name: 'Família'},
          ]
        }}/>
        <Card data={{
          title: "Interstellar",
          tags: [
            { id: '1', name: 'Ficção Científica'},
            { id: '2', name: 'Drama'},
            { id: '3', name: 'Família'},
          ]
        }}/>
        
      </main>

      
    </Container>
  );
  
}