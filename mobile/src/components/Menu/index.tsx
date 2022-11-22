import { FlatList } from 'react-native';
import { products } from '../../mocks/products';
import { Text } from '../Text';
import { Product , Image, Productdetails} from './styles';

export function Menu(){
  return(
    <FlatList
      style = {{marginTop: 32}}
      contentContainerStyle = {{ paddingHorizontal : 24}}
      data = {products}
      keyExtractor = {products => products._id}
      renderItem ={({item : product}) => (
        <Product>
          <Image source={{
            uri : `http://172.29.34.147:3001/uploads/${product.imagePath}`,
          }}/>
          <Productdetails>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
          </Productdetails>
        </Product>
      )}/>
  );
}
