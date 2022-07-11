import React from 'react'
import Action from './Action'
import {Table} from "react-bootstrap";


function Actions(props) {
    return(
        <>
            <h4 style={{textAlign: 'left'}}>Взаимодействия с клиентами</h4><br/>
            <Table hover size="sm">
                <thead>
                <tr>
                    <th>Номер</th>
                    <th>Вид</th>
                    <th>Дата</th>
                    <th>Автор</th>
                    <th>Важность</th>
                    <th>Тема</th>
                </tr>
                </thead>
                <tbody>
                    {props.actions.map((action) => {
                        return (
                            <Action action={action} key={action.uuid} dblclickAction={props.dblclickAction}/>
                    )})}
                </tbody>
            </Table>
        </>
    )
}

export default Actions