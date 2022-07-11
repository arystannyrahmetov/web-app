function base64toBlobURL(pdf_base64) {

    const bytes = atob(pdf_base64);
    let length = bytes.length;
    let out = new Uint8Array(length);

    while (length--) {
        out[length] = bytes.charCodeAt(length);
    }

    let blob = new Blob([out], { type: 'application/pdf' });
    return URL.createObjectURL(blob);
}

export default { base64toBlobURL };