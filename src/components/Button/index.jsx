import { Container } from './styles';

export function Button({ isDelete, icon: Icon, title, ...rest }) {

  return(
    <Container type="button" isDelete={isDelete} {...rest}>
      {Icon && <Icon size={20} />}
      { title }
    </Container>
  );

}