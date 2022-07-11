import React from 'react'
import axios from "axios";

async function getOrders() {

    let orders = {}
    await fetch('http://localhost/crm_system/hs/1c/orders/')
        .then(res => res.json())
        .then(result => {
            orders = result
        })
        .catch(error => console.log(error))

    return orders

}

async function getOrderByUUID(props) {

    let order = {}
    await fetch('http://localhost/crm_system/hs/1c/orders/?uuid=' + props.uuid + '&print=false')
        .then(res => res.json())
        .then(result => {
            order = result.orders
        })
        .catch(error => console.log(error))

    return order

}

async function getOrderPrintByUUID(uuid) {

    let pdf = {}
    await fetch('http://localhost/crm_system/hs/1c/orders/?uuid=' + uuid + '&print=true')
        .then(res => res.json())
        .then(result => {
            pdf = result.pdf_base64
        })
        .catch(error => console.log(error))

    return pdf

}

async function saveOrder(props) {

    let response = {}
    await axios.post('http://localhost/crm_system/hs/1c/orders/', props, {
        headers : {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        console.log(res)
        response = res
        console.log(response)
    })
    .catch(error => console.log(error))

    return response

}

export default { getOrders, getOrderByUUID, saveOrder, getOrderPrintByUUID }