import React from 'react'

const noSelection = {
    msUserSelect: 'none'
}

function Action(props) {

    let importanceClass
    if(props.action.importance === 'Высокая') {
        importanceClass = "table-danger"
    } else if(props.action.importance === 'Обычная') {
        importanceClass = ""
    } else if(props.action.importance === 'Низкая') {
        importanceClass = "table-success"
    }

    return (

        <tr onDoubleClick={() => props.dblclickAction(props.action)} style={noSelection} className={importanceClass}>
            <td>{props.action.num}</td>
            <td>{props.action.frontDocName}</td>
            <td>{props.action.date}</td>
            <td>{props.action.author}</td>
            <td>{props.action.importance}</td>
            <td>{props.action.theme}</td>
        </tr>
    )
}

export default Action