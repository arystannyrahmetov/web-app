import React from 'react'
import axios from "axios";

async function getSelections(props) {

    let selections = {}
    await fetch('http://localhost/crm_system/hs/1c/selection/?param=' + props.param + '&type=' + props.type)
        .then(res => res.json())
        .then(result => {
            selections = result
        })
        .catch(error => console.log(error))

    return selections

}

export default { getSelections }