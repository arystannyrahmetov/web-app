import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { printPlugin } from '@react-pdf-viewer/print';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';
import {Button, Modal} from "react-bootstrap";

function onClose(pdf, setPdf) {
    setPdf({...pdf, show: false});
}

function PDFViewer(props) {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const printPluginInstance = printPlugin({enableShortcuts: true});
    return (
        <Modal
            show={props.pdf.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Worker workerUrl={"https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js"} >
                <Viewer fileUrl={props.pdf.url} plugins={[defaultLayoutPluginInstance, printPluginInstance]}/>
            </Worker>
            <Modal.Footer>
                <Button variant={'primary'} onClick={() => onClose(props.pdf, props.setPdf)}>Закрыть</Button>
            </Modal.Footer>
        </Modal>)
}

export default PDFViewer;