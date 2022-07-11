import {Button, Col, Container, Form, Modal, Row, Tab, Tabs} from "react-bootstrap";
import {useState} from "react";
import AuthAPI from '../API/AuthAPI';
import Hash from "./Hash";
import '../App.css'

function emailOnChange(e, setAccount, account) {
    setAccount({...account, email: e.target.value})
}

function passwordOnChange(e, setAccount, account) {
    setAccount({...account,
        password: e.target.value})
}

function putIntoLocalStorage(token) {
    localStorage.setItem('account', JSON.stringify(token));
}

function signInOnClick(e, setToken, account, setAccount) {

    let hashedPassword = Hash.hashPassword(account.password)

    AuthAPI.signIn({email: account.email, password: hashedPassword}).then(response => {
        console.log(response);
        if(response.data.error === "") {
            let token = {
                email: account.email,
                hash: hashedPassword,
                user: response.data.user,
                uuid: response.data.uuid,
                isLogged: true
            }
            setToken(token);
            putIntoLocalStorage(token);
        } else {
            setAccount({...account,
                error: response.data.error})
        }

    });
}

function SignIn(props) {
    const [account, setAccount] = useState({
        email: '',
        password: '',
        hashedPassword: '',
        error: ''
    });

    return (
           <Container className={'w30'}>
               <Row className="justify-content-md-center">
                   <Col xs>
                       <Form>
                           <h1>Вход</h1><br/>
                           {/*Почта*/}
                           <Form.Group className="mb-3 ml1 mt1 mr1">
                               <Form.Label>Почта</Form.Label>
                               <Form.Control type={'email'} name={'email'} value={account.email} onChange={(e)=> emailOnChange(e, setAccount, account)}
                               placeholder="Введите почту" className={''}/>
                           </Form.Group>
                           <Form.Group className="mb-3 ml1 mt1 mr1">
                               <Form.Label>Пароль</Form.Label>
                               <Form.Control type={'password'} name={'password'} value={account.password} onChange={(e)=> passwordOnChange(e, setAccount, account)}
                               controlid="formBasicPassword" className={''}/>
                           </Form.Group>

                           <Form.Text className="text-muted">
                               {account.error}
                           </Form.Text>

                           <Modal.Footer>
                               <Button variant={'primary'} onClick={(e)=> signInOnClick(e, props.setToken, account, setAccount)}>Войти</Button>
                               <Button variant={'secondary'}>Регистрация</Button>
                           </Modal.Footer>
                       </Form>
                   </Col>
               </Row>
           </Container>
    )}

export default SignIn;