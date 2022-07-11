import React, {useState} from 'react';
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import logoAmountOfGoods from './img/amountOfGoods.png'
import stuckTasks from './img/stuckTasks.PNG'
import bussinesP from './img/bp.PNG'
import overdueTasks from './img/overdueTasks.PNG'
import AmountOfGoods from "./AmountOfGoods";

function amountOfGoodsOnClick(setShow) {
    setShow(true)
}

function Reports() {

    const [showAmountOfGoods, setShowAmountOfGoods] = useState(false)

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        {/*остатки товаров*/}
                        <AmountOfGoods show={showAmountOfGoods} setShow={setShowAmountOfGoods}/>
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={logoAmountOfGoods} />
                            <Card.Body>
                                <Card.Title>Остатки товаров</Card.Title>
                                <Card.Text>
                                    Отчет позволяет посмотреть актуальные остатки на указаную дату в аналитике по складам и организации
                                </Card.Text>
                                <Button variant="primary" onClick={()=> amountOfGoodsOnClick(setShowAmountOfGoods)}>Открыть отчет</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        {/*зависшие задачи*/}
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={stuckTasks} />
                            <Card.Body>
                                <Card.Title>Зависшие задачи</Card.Title>
                                <Card.Text>
                                    Предназначен для мониторинга задач и бизнес-процессов.
                                </Card.Text>
                                <Button variant="primary" >Открыть отчет</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        {/*бизнес процессы*/}
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={bussinesP} />
                            <Card.Body>
                                <Card.Title>Бизнес-процессы</Card.Title>
                                <Card.Text>
                                    Предназначен для мониторинга бизнес-процессов.
                                </Card.Text>
                                <Button variant="primary" >Открыть отчет</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        {/*просроченные задачи*/}
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={overdueTasks} />
                            <Card.Body>
                                <Card.Title>Просроченные задачи</Card.Title>
                                <Card.Text>
                                    Предназначен для мониторинга бизнес-процесса Задание.
                                </Card.Text>
                                <Button variant="primary">Открыть отчет</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>)
}

export default Reports;