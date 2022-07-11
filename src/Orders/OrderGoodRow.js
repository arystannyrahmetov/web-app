import React from 'react';

function OrderGoodRow({ goodRow }) {
    return (
        <tr>
            <td>{goodRow.position}</td>
            <td>{goodRow.good}</td>
            <td>{goodRow.amount}</td>
            <td>{goodRow.price}</td>
            <td>{goodRow.sum}</td>
        </tr>
    )
}

export default OrderGoodRow;