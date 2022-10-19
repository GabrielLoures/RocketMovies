import { Container } from './styles';

export function Button({ isDelete, icon: Icon, title }) {

  return(
    <Container type="button" isDelete={isDelete}>
      {Icon && <Icon size={20} />}
      { title }
    </Container>
  );

}