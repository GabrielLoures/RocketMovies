import { Container } from './styles';

export function Button({ icon: Icon, title }) {

  return(
    <Container type="button">
      {Icon && <Icon size={20} />}
      { title }
    </Container>
  );

}