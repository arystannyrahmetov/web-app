import React from 'react'
import axios from "axios";

async function getUsers(props) {

    let users = {}
    await fetch('http://localhost/crm_system/hs/1c/users/' + '?excludedUser=' + props.uuid)
        .then(res => res.json())
        .then(result => {
            users = result
        })
        .catch(error => console.log(error))

    return users

}

export default { getUsers }