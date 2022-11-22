import { FooterContainer,Container ,CategoriesContainer,Footer,MenuContainer} from './styles';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';

export function Main(){
  return(
    <>

      <Container>
        <Header />
        <CategoriesContainer>
          <Categories/>
        </CategoriesContainer>
        <MenuContainer>
          <Menu/>
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          <Button label='Novo Pedido' onPress={() => alert('Novo Pedido')} disabled/>
        </FooterContainer>
      </Footer>
    </>
  );
}
