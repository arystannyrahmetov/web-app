import React from 'react'
import axios from "axios";
import host from './host'

async function getActions() {

    let actions = {}
    await fetch(`${host}/actions/`)
        .then(res => res.json())
        .then(result => {
            actions = result
        })
        .catch(error => console.log(error))

    return actions

}

async function getActionByUUID(props) {

    let action = {}
    await fetch(`${host}/actions/?uuid=` + props.uuid + '&type=' + props.typeBack)
        .then(res => res.json())
        .then(result => {
            action = result.actions[0]
        })
        .catch(error => console.log(error))

    return action

}

async function saveAction(props) {

    let response = {}
    await axios.post(`${host}/actions/`, props, {
        headers : {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        console.log(res)
        response = res//JSON.parse(res.data.body)
        console.log(response)
    })
    .catch(error => console.log(error))

    return response

}

export default { getActions, getActionByUUID, saveAction }