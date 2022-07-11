import react from 'react';
import { Modal, Button, Form }  from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Tabs, Tab } from 'react-bootstrap';
import SelectionAPI from "../../API/SelectionAPI";
import '../modalStyles.css';
import eventHandler from '../CommonModules/ModalEventHandlers';


function MeetingModal(props) {

    const [action, setAction] = react.useState(props.action);
    const [selectionResponsibles, setSelectionResponsibles] = react.useState([]);

    function controlOnChange(event) {
        let upd_action = {...action};
        upd_action[event.target.name] = event.target.value;
        setAction(upd_action);
    }

    function responsibleOnChange(event) {
        let upd_action = {...action};

        if(event.target.value.replace(/\s/g, '') !== '') {
            SelectionAPI.getSelections({param: event.target.value, type: 'responsible'}).then(result => {
                setSelectionResponsibles(result.selection);
                console.log(result.selection);
            })
        }
        upd_action[event.target.name] = event.target.value;
        setAction(upd_action);
    }

    return (
        <Modal
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title>{props.action.representation}</Modal.Title>
            </Modal.Header>

            <Form>
                <Container>
                    <Row>
                        <Col>
                            {/*Дата*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Дата</Form.Label>
                                <Form.Control type={'text'} name={'date'} value={action.date} onChange={controlOnChange}/>
                            </Form.Group>

                            {/*Дата начала и окончания*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Начало</Form.Label>
                                <Form.Control type={'text'} name={'date_beginning'} value={action.date_beginning} onChange={controlOnChange}/>

                                <Form.Label>Окончание</Form.Label>
                                <Form.Control type={'text'} name={'date_ending'} value={action.date_ending} onChange={controlOnChange}/>
                            </Form.Group>

                            {/*Место встречи*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Место встречи</Form.Label>
                                <Form.Control type={'text'} name={'meeting_place'} value={action.meeting_place} onChange={controlOnChange}/>
                            </Form.Group>

                            {/*Тема*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Тема</Form.Label>
                                <Form.Control type={'text'} name={'theme'} value={action.theme} onChange={controlOnChange}/>
                            </Form.Group>
                            <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="mb-3 ml1 mt1 mr1">
                                <Tab eventKey='description' title='Описание'>
                                    {/*Описание*/}
                                    <Form.Group className="mb-3 ml1 mt1 mr1" controlid="form.Textarea">
                                        <Form.Label>Описание</Form.Label>
                                        <Form.Control as={'textarea'} name={'description'} rows={9} value={action.description} onChange={controlOnChange}/>
                                    </Form.Group>
                                </Tab>
                                <Tab eventKey='comment' title='Комментарий'>
                                    {/*Комментарий*/}
                                    <Form.Group className="mb-3 ml1 mt1 mr1" controlid="form.Textarea">
                                        <Form.Label>Комментарий</Form.Label>
                                        <Form.Control as={'textarea'} name={'comment'} rows={9} value={action.comment} onChange={controlOnChange}/>
                                    </Form.Group>
                                </Tab>
                            </Tabs>

                            <Modal.Body>

                            </Modal.Body>
                        </Col>
                        <Col>
                            {/*Пердмет*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Пердмет</Form.Label>
                                <Form.Control type={'text'} name={'actions_basis_representation'} value={action.actions_basis_representation} onChange={controlOnChange}/>
                            </Form.Group>

                            {/*Ответственный*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Ответственный</Form.Label>
                                <Form.Control type={'text'} name={'responsible'} value={action.responsible} list={'responsibles'} onChange={responsibleOnChange}/>
                                <datalist id="responsibles">
                                    {typeof selectionResponsibles === typeof [] &&
                                        selectionResponsibles.map((item) => {
                                            return <option key={item.uuid} value={item.name}/>
                                    })}
                                </datalist>
                            </Form.Group>

                            {/*Важность*/}
                            <Form.Group className="mb-3 ml1 mt1 mr1">
                                <Form.Label>Важность</Form.Label>
                                {/*<Form.Control type={'text'} name={'importance'} value={action.importance} onChange={controlOnChange}/>*/}
                                <Form.Select name={'importance'} value={action.importance} onChange={controlOnChange}>
                                    <option>Низкая</option>
                                    <option>Обычная</option>
                                    <option>Высокая</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <Modal.Footer>
                    <Button variant={'secondary'} onClick={props.close}>Закрыть</Button>
                    <Button variant={'primary'} onClick={()=> props.save(action)}>Записать и закрыть</Button>
                </Modal.Footer>


            </Form>
        </Modal>
    )
}

export default MeetingModal;