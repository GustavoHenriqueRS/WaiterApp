import { Board, OrdersContainer } from './styles';
import {Order} from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { useState } from 'react';

interface OrdersBoardProps {
  icon : string;
  title : string;
  orders : Order[]
}

export function OrdersBoards({icon, title, orders,}: OrdersBoardProps){
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, isSelectedOrder] = useState<null | Order>(null);

  function handleOpenOrder(order: Order){
    setIsModalVisible(true);
    isSelectedOrder(order);
  }
  function handleCloseModal(order: Order){
    setIsModalVisible(false);
    isSelectedOrder(null);
  }

  return(
    <Board>
      <OrderModal visible = {isModalVisible} order = {selectedOrder} onClose = {handleCloseModal}/>

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders.length}</span>
      </header>

      {orders.length > 0 &&(
        <OrdersContainer>
          {orders.map((order)=> (
            <button type='button' key={order._id} onClick= {() => handleOpenOrder(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} Itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
