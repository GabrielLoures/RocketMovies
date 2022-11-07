import { useState } from 'react'
import { Container, Form } from './styles';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';

import { Textarea } from '../../components/Textarea';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

export function CreateMovie() {

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag() {

    setTags(prevState => [...prevState, newTag])
    setNewTag("")

  }

  function handleRemoveTag(deleted) {

    setTags(prevState => prevState.filter(tag => tag !== deleted))

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
          <Input placeholder="Título" type="text" />
          <Input placeholder="Sua nota (de 0 a 5)" type="number" />
        </div>

        <Textarea placeholder="Observações"></Textarea>

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
          <Button title="Excluir Filme" isDelete />
          <Button title="Salvar Alterações"/>
        </div>

      </Form>

    </Container>
  )

}