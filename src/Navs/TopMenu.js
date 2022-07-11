import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";

function logoutOnClick(setToken) {
    localStorage.removeItem('account')
    setToken({email: "", hash: "", user: {}, uuid: "", isLogged: false});
}

function TopMenu(props) {
    return(
        <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
            <Container fluid>
                <Navbar.Brand className={"brand-margin"}>CRM система</Navbar.Brand>
                <Nav>
                    <Nav.Link>
                        {props.token.isLogged
                            ? props.token.user.username
                            : 'Вход'
                        }
                    </Nav.Link>
                    {props.token.isLogged
                        ?   <Nav.Link onClick={()=> logoutOnClick(props.setToken)}>
                                Выход
                            </Nav.Link>
                        :   null
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default TopMenu;