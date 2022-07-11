import {Col, Nav, Row, Tab} from "react-bootstrap";
import ActionModal from "../Modals/ActionModal";
import Actions from "../Actions/Actions";
import React from "react";
import Reports from "../Reports/Reports";
import Messenger from '../Messenger/Messenger';

function LeftTab(props) {

    //states for interface
    const [toggleTab, setToggleTab] = React.useState(1)

    function onClickLeftTap(index) {
        setToggleTab(index)
    }

    return(
        <Tab.Container id="left-tabs-example" defaultActiveKey="documents">
            <Row className={"tab-margin"}>
                <Col sm={1}>
                    <Nav className={"flex-column"}>
                        <Nav.Item>
                            <Nav.Link className={toggleTab==1 ? "left-tab left-tab-active" : "left-tab" } eventKey="documents" onClick={() => onClickLeftTap(1)}>Документы</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={toggleTab==2 ? "left-tab left-tab-active" : "left-tab" } eventKey="reports" onClick={() => onClickLeftTap(2)}>Отчеты</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={toggleTab==3 ? "left-tab left-tab-active" : "left-tab" } eventKey="messenger" onClick={() => onClickLeftTap(3)}>Мессенджер</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col>
                    <Tab.Content>
                        <Tab.Pane eventKey="documents">
                            {props.documents}
                        </Tab.Pane>
                        <Tab.Pane eventKey="reports">
                            <h1>Отчеты</h1><br/>
                            <Reports/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="messenger">
                            <h1>Мессенджер</h1><br/>
                            <Messenger/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default LeftTab;