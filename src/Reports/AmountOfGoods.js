import React, {useState} from 'react';
import {Form, Modal, Container, Row, Col, Button} from "react-bootstrap";
import ReportsAPI from "../API/ReportsAPI";
import PDFViewer from "../Prints/PDFViewer";
import react from "react";
import PrintOrder from "../Prints/PrintOrder";
import Reports from "./Reports.css"

function dateOnChange(e, setDate, setRepresentation) {
    setDate(e.target.value)
    setRepresentation(`Отчет по остаткам товаров от ${e.target.value}`)
}

function formReportOnClick(date, setPdf) {
    let params = {
        type: 'amountOfGoods',
        body: {
            paramDate: date
        }
    }
    ReportsAPI.getAmountOfGoodsReport(params={params}).then(response => {
        let url = PrintOrder.base64toBlobURL(response)
        setPdf({url: url, show: true})
    })
}

function closeReportOnClock(setShow) {
    setShow(false)
}

function AmountOfGoods(props) {

    const [representation, setRepresentation] = useState('Отчет по остаткам товаров')
    const [pdf, setPdf] = react.useState({url: "", show: false});
    const [date, setDate] = useState('')

    return (
        <Modal
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title>{representation}</Modal.Title>
            </Modal.Header>
            <Form>
                <Container>
                    <Row>
                        <Col>
                            {/*Дата*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Дата</Form.Label>
                                <Form.Control type={'text'} name={'date'} value={date} onChange={(e)=> dateOnChange(e, setDate, setRepresentation)}/>
                            </Form.Group>
                            {/*Сформировать*/}
                            <Button variant='primary' onClick={()=> formReportOnClick(date, setPdf)} className={'mb-from-report'}>Сформировать</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
            {pdf.show
                ? <PDFViewer pdf={pdf} title={representation} setPdf={setPdf} />
                :<div></div>}
            <Modal.Footer>
                {/*Закрыть отчет*/}
                <Button variant='secondary' onClick={()=>closeReportOnClock(props.setShow)}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AmountOfGoods;