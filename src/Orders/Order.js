import React from "react";
import OrderGoods from "./OrderGoods";

function Order(props) {

    let statusClass
    if(props.order.status === 'В работе') {
        statusClass = "table-warning"
    } else if(props.order.status === 'Выполнен') {
        statusClass = "table-success"
    } else if(props.order.status === 'Отменен') {
        statusClass = "table-info"
    }

    return (
        <>
            <tr onDoubleClick={() => props.orderOnDblClick(props.order, props.setCurrentOrder, props.setShowModal)} className={statusClass}>
                <td>{props.order.num}</td>
                <td>{props.order.date}</td>
                <td>{props.order.status}</td>
                <td>{props.order.organization}</td>
                <td>{props.order.client}</td>
                <td>{props.order.warehouse}</td>
                <td>{props.order.action}</td>
                <td>{props.order.author}</td>
            </tr>
        </>
    )
}

export default Order;