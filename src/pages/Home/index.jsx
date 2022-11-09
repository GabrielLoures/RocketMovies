import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

import {RiAddFill} from 'react-icons/ri'

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';

import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';


export function Home() {

  const { user } = useAuth()
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  const navigate = useNavigate()

  function handlePreview(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {

    async function fetchMovies() {
      const res = await api.get(`/notes?user_id=${user.id}&title=${search}`)
      setMovies(res.data)
    }

    fetchMovies()

  }, [search])

  return(
    <Container>

      <Header>
                     
        <Input
         placeholder="Pesquisar pelo título"
         onChange={(e) => setSearch(e.target.value)}
        />
                    
      </Header>

      <div>
        <h1>Meus Filmes</h1>
        <Link to="/create">
          <Button title="Adicionar Filme" icon={RiAddFill}/>
        </Link>
      </div>

      <main>

        {
          movies.map(movie => (
            <Card 
              key={String(movie.id)}
              data={movie}
              onClick={() => handlePreview(movie.id)}
            />
          ))
          
        }


      </main>

    </Container>
  );
  
}