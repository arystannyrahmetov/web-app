import React from 'react';
import axios from "axios";
import host from './host';
async function getAmountOfGoodsReport(props) {

    let pdf = {}

    await axios.post(`${host}/reports/?type=` + props.params.type, props.params.body, {
        headers : {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            pdf = res.data.pdf_base64
        })
        .catch(error => console.log(error))

    return pdf
}

export default { getAmountOfGoodsReport }