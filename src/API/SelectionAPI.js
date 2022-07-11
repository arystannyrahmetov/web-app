import React from 'react';
import host from './host';

async function getSelections(props) {

    let selections = {}
    await fetch(`${host}/?param=` + props.param + '&type=' + props.type)
        .then(res => res.json())
        .then(result => {
            selections = result
        })
        .catch(error => console.log(error))

    return selections

}

export default { getSelections }