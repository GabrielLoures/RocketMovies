import { useState, useEffect } from 'react'
import { Container } from './styles';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';

import { Link, useParams, useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MovieHeader } from '../../components/MovieHeader';
import { api } from '../../services/api';

export function MoviePreview() {

  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  async function handleRemove() {
    const confirm = window.confirm("Tem certeza que deseja remover esse filme da sua lista?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {

    async function fetchMovie() {
      const res = await api.get(`/notes/${params.id}`)
      setData(res.data)
    }

    fetchMovie()

  }, [])

  return (
    <Container>

      <Header/>

      {
        data &&
        <main>

          <Link to="/">
            <HiOutlineArrowSmLeft />
            Voltar
          </Link>

          <MovieHeader data={{
            title: data.title,
            tags: data.tags,
            rating: data.rating,
            date: data.created_at
          }}/>

          <p>
            {data.description}
          </p>

        </main>
      }

      <div className='button'>
        <Button 
          title="Excluir Filme" 
          onClick={handleRemove}
          isDelete />
      </div>      

    </Container>
  )

}