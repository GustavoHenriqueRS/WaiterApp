import { FlatList } from 'react-native';
import { products } from '../../mocks/products';
import { Text } from '../Text';
import { Product , ProductImage, Productdetails, Separator, AddToCartButton} from './styles';
import { FormatCurrency, LocalHostPort } from '../../utils/api';
import { PlusCircle } from '../Icons/PlusCircle';

export function Menu(){
  return(
    <FlatList
      style = {{marginTop: 32}}
      contentContainerStyle = {{ paddingHorizontal : 24}}
      data = {products}
      keyExtractor = {products => products._id}
      ItemSeparatorComponent = {Separator}
      renderItem ={({item}) => (
        <Product>
          <ProductImage
            source={{
              uri: `http://${LocalHostPort}/uploads/${item.imagePath}`,
            }}
          />
          <Productdetails>
            <Text weight='600'>{item.name}</Text>
            <Text size={14} color='#666' style = {{
              marginVertical: 8
            }}>{item.description}</Text>
            <Text size={14} weight = '600'>{FormatCurrency(item.price)}</Text>
          </Productdetails>
          <AddToCartButton>
            <PlusCircle/>
          </AddToCartButton>
        </Product>
      )}/>
  );
}
