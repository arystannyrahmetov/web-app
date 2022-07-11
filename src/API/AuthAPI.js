import axios from "axios";

async function signIn(props) {
    let response = {}
    await axios.post('http://localhost/crm_system/hs/1c/signin/', props, {
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