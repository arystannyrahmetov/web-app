import React from 'react'
import axios from "axios";

async function getAmountOfGoodsReport(props) {

    let pdf = {}
    // await fetch('http://localhost/crm_system/hs/1c/reports/?type=' + props.type)
    //     .then(res => res.json())
    //     .then(result => {
    //         pdf = result.pdf_base64
    //         console.log(pdf)
    //     })
    //     .catch(error => console.log(error))
    //
    // return pdf

    await axios.post('http://localhost/crm_system/hs/1c/reports/?type=' + props.params.type, props.params.body, {
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