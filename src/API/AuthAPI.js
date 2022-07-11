import axios from "axios";
import host from './host'

async function signIn(props) {
    let response = {}
    await axios.post(`${host}/signin/`, props, {
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

export default { signIn }