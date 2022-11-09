import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Form } from './styles';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';

import { Textarea } from '../../components/Textarea';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

import { api } from '../../services/api';

import { Link } from 'react-router-dom';

export function CreateMovie() {

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {

    setTags(prevState => [...prevState, newTag])
    setNewTag("")

  }

  function handleRemoveTag(deleted) {

    setTags(prevState => prevState.filter(tag => tag !== deleted))

  }

  async function handleNewMovie() {

    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    })

    alert("Filme adicionado com sucesso!")
    navigate("/")

  }

  return (
    <Container>

      <Header/>

      <div>
        <Link to="/">
          <HiOutlineArrowSmLeft />
          Voltar
        </Link>
        <h1>Novo Filme</h1>
      </div>

      <Form>

        <div>
          <Input 
            placeholder="Título"
            type="text" 
            onChange={e => setTitle(e.target.value)}  
          />
          <Input 
            placeholder="Sua nota (de 0 a 5)" 
            type="number" 
            onChange={e => setRating(e.target.value)}  
          />
        </div>

        <Textarea 
          placeholder="Sinopse" 
          onChange={e => setDescription(e.target.value)}  
        />

        <h1>Marcadores</h1>

        <div className="tags">

          {
            tags.map((tag, index) => (
              <NoteItem
                key={String(index)} 
                value={tag} 
                onClick={() => handleRemoveTag(tag)}
                />
            ))          
          }
          
          <NoteItem 
            isNew 
            placeholder="Novo marcador"
            onChange={e => setNewTag(e.target.value)}
            value={newTag}
            onClick={handleAddTag}
          />
        </div>

        <div className="buttons">
          <Button title="Salvar Alterações" onClick={handleNewMovie}/>
        </div>

      </Form>

    </Container>
  )

}