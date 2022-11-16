import { OrdersBoards } from '../Orders.board';
import { Container } from './styles';
import { Order } from '../../types/Order';

const orders : Order[] = [
  {
    '_id': '6374255194d674054e642c85',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1668476296123-coca-cola.png',
          'price': 5,
        },
        'quantity': 3,
        '_id': '6374255194d674054e642c86'
      },
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668474892533-quatro-queijos.png',
          'price': 40,

        },
        'quantity': 3,
        '_id': '6374255194d674054e642c87'
      }
    ],
  }
];

export function Orders(){
  return (
    <Container>
      <OrdersBoards icon = "🕑" title = "Fila de Espera" orders={orders}/>
      <OrdersBoards icon = "👩‍🍳" title = "Em produção" orders={[]}/>
      <OrdersBoards icon = "✅" title = "Pronto!" orders = {[]}/>
    </Container>
  );
}
