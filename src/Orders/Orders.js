import {Table} from "react-bootstrap";
import Order from "./Order";
import OrderModal from "../Modals/OrderModal";
import OrdersAPI from "../API/OrdersAPI";
import React, {useEffect} from "react";

function orderOnDblClick(order, setCurrentOrder, setShowModal) {
    OrdersAPI.getOrderByUUID(order).then(data => {
        setShowModal(true)
        setCurrentOrder(data)
    });
}

function Orders(props) {
    const [orders, setOrders] = React.useState([]);
    const [currentOrder, setCurrentOrder] = React.useState({});
    const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        OrdersAPI.getOrders().then(data => {
            setOrders(data.orders)
        });
    }, []);

    return(
        <>
            <h4 style={{textAlign: 'left'}}>Заказы клиентов</h4><br/>
            <OrderModal show={showModal} setShow={setShowModal} order={currentOrder}/>
            <Table hover size="sm">
                <thead>
                <tr>
                    <th>Номер</th>
                    <th>Дата</th>
                    <th>Состояние</th>
                    <th>Организация</th>
                    <th>Контрагент</th>
                    <th>Склад</th>
                    <th>Событие</th>
                    <th>Автор</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => {
                    return (
                        <Order order={order} key={order.uuid} setCurrentOrder={setCurrentOrder} setShowModal={setShowModal} orderOnDblClick={orderOnDblClick}/>
                    )})}
                </tbody>
            </Table>
        </>
    )
}

export default Orders;