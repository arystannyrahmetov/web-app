import React, {useEffect} from 'react';
import OrderGoodRow from "./OrderGoodRow";
import {Table} from "react-bootstrap";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Номер', type: 'number', editable: false },
    { field: 'good', headerName: 'Товар', type: 'string', editable: true },
    { field: 'amount', headerName: 'Количество', type: 'number', editable: true },
    { field: 'price', headerName: 'Цена', type: 'number', editable: true },
    { field: 'sum', headerName: 'Сумма', type: 'number', editable: true },
]

function OrderGoods({ order, setOrder }) {

    //const [goodsList, setGoodsList] = React.useState([])

    function cellEditCommit(data) {
        let arr = order.goods.map(item => {
            if (item.id === data.id) {
                return {...item, [data.field]:data.value}
            } else {
                return {...item}
            }
        })
        console.log(arr)
        setOrder(order => ({...order, goods: arr}))
        //setOrder({...order}, {goods: arr})
        //props.order
        //props.setOrder(...props.order, {goods: arr})
    }

    // useEffect(() => {
    //     setGoodsList(props.order.goods)
    // }, [props.goods])

    return (
        <div style={{ height: 300, width: '100%' }}>
            {
                order.goods !== undefined
                    ?
                        <DataGrid onCellEditCommit={cellEditCommit}
                                  rows={order.goods}
                                  columns={columns}
                        />
                    :
                        <div>Заказ не содержит товаров</div>
            }
        </div>
    )
}

// function OrderGoods(props) {
//
//     const [goodsList, setGoodsList] = React.useState([])
//
//     useEffect(() => {
//         setGoodsList(props.goods)
//     }, [props.goods])
//
//
//
//     return (
//         <Table hover size="sm" style={{width: '90%', marginLeft: '2rem'}}>
//             <thead>
//             <tr>
//                 <th>Номер</th>
//                 <th>Товар</th>
//                 <th>Количество</th>
//                 <th>Цена</th>
//                 <th>Сумма</th>
//             </tr>
//             </thead>
//             <tbody>
//             {goodsList.map((goodRow) => {
//                 return (
//                     <OrderGoodRow goodRow={goodRow} key={goodRow.position} />
//                 )})}
//             </tbody>
//         </Table>
//     );
// }

export default OrderGoods;