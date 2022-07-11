import React from 'react';
import host from './host';

async function getUsers(props) {

    let users = {}
    await fetch(`${host}/users/` + '?excludedUser=' + props.uuid)
        .then(res => res.json())
        .then(result => {
            users = result
        })
        .catch(error => console.log(error))

    return users

}

export default { getUsers }