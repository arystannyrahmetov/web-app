import {Button, Col, Container, Form, Modal, Row, Tab, Tabs} from "react-bootstrap"
import react, {useEffect} from "react"
import OrdersAPI from "../API/OrdersAPI"
import PrintOrder from "../Prints/PrintOrder"
import PDFViewer from "../Prints/PDFViewer"
import OrderGoods from "../Orders/OrderGoods";

function controlOnChange(event, order, setOrder) {
    console.log(order)
    let upd_order = {...order};
    upd_order[event.target.name] = event.target.value;
    setOrder(upd_order);
}

function onClose(setShow) {
    setShow(false);
}

function onSaveAndClose(setShow) {
    //save order
    setShow(false);
}

function printOrderOnClick(uuid, setPdf) {
    OrdersAPI.getOrderPrintByUUID(uuid)
        .then(response => {
            let url = PrintOrder.base64toBlobURL(response)
            setPdf({url: url, show: true})
        })
}

function OrderModal(props) {

    const [pdf, setPdf] = react.useState({url: "", show: false});
    const [order, setOrder] = react.useState({})

    useEffect(() => {
        setOrder(props.order)
    }, [props.order])

    return (
        <Modal
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title>{order.representation}</Modal.Title>
            </Modal.Header>
            {pdf.show
            ? <PDFViewer pdf={pdf} title={order.representation} setPdf={setPdf} />
            :<div></div>}

            <Form>
                <Container>
                    <Row>
                        <Col>
                            {/*Дата*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Дата</Form.Label>
                                <Form.Control type={'text'} name={'date'} value={order.date} onChange={(e)=> controlOnChange(e, order, setOrder)}/>
                            </Form.Group>

                            {/*Состояние*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Состояние</Form.Label>
                                <Form.Control type={'text'} name={'status'} value={order.status} onChange={(e)=> controlOnChange(e, order, setOrder)}/>
                            </Form.Group>

                            {/*Организация*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Организация</Form.Label>
                                <Form.Control type={'text'} name={'organization'} value={order.organization} onChange={(e)=> controlOnChange(e, order, setOrder)}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/*Контрагент*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Контрагент</Form.Label>
                                <Form.Control type={'text'} name={'client'} value={order.client} onChange={(e)=> controlOnChange(e, order, setOrder)}/>
                            </Form.Group>

                            {/*Событие*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Событие</Form.Label>
                                <Form.Control type={'text'} name={'action'} value={order.action} onChange={(e)=> controlOnChange(e, order, setOrder)}/>
                            </Form.Group>

                            {/*Автор*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Автор</Form.Label>
                                <Form.Control type={'text'} name={'author'} value={order.author} onChange={(e)=> controlOnChange(e, order, setOrder)}/>
                            </Form.Group>
                        </Col>
                        {/*Таблица товары*/}
                        <OrderGoods order={order} setOrder={setOrder}/>
                    </Row>
                </Container>
                <Modal.Footer>
                    <Button variant={'secondary'} onClick={()=> printOrderOnClick(order.uuid, setPdf)}>Печать</Button>
                    <Button variant={'secondary'} onClick={()=> onClose(props.setShow)}>Закрыть</Button>
                    <Button variant={'primary'} onClick={()=> onSaveAndClose(props.setShow)}>Записать и закрыть</Button>
                </Modal.Footer>


            </Form>
        </Modal>
    )
}

export default OrderModal;