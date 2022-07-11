import sha1 from 'js-sha1'

function hashPassword(password) {

    let binary_arr_fp = sha1.arrayBuffer(password)
    let base64_str_fp = btoa(String.fromCharCode(...new Uint8Array(binary_arr_fp)))

    let binary_arr_sp = sha1.arrayBuffer(password)
    let base64_str_sp = btoa(String.fromCharCode(...new Uint8Array(binary_arr_sp)))

    return base64_str_fp + ',' + base64_str_sp

}

export default { hashPassword }