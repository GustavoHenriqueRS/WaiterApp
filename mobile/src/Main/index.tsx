import { FooterContainer,Container ,CategoriesContainer,Footer,MenuContainer} from './styles';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import { useState } from 'react';

export function Main(){
  const[isTableOpen, setIsTableOpen] = useState(false);
  const[selectedTable, setSelectedTable] = useState('');

  function handleSaveTable(table :string){
    setSelectedTable(table);
  }

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
          {!selectedTable && (
            <Button onPress={() => setIsTableOpen(true)} >
              Novo Pedido
            </Button>
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible = {isTableOpen}
        onClose={() => setIsTableOpen(false)}
        onSave ={handleSaveTable}
      />

    </>
  );
}
