import logo from './logo.svg';
import React from "react"
import './App.css'
import Actions from './Actions/Actions'
import ActionModal from "./Modals/ActionModal";
import Orders from "./Orders/Orders";
import LeftTab from "./Navs/LeftTab";
import TopMenu from "./Navs/TopMenu";
import ActionsAPI from "./API/ActionsAPI"
import {useEffect} from "react"
import {Tab, Col, Row, Nav, Navbar, Container } from "react-bootstrap"
import SignIn from "./Authentification/Auth";

//get actions from api
function updateActions(setActions) {
    ActionsAPI.getActions().then(data => {
        setActions(data.actions)
    })
}

function App() {
    //states and hooks
    const [actions, setActions] = React.useState({})
    const [currentAction, setCurrentAction] = React.useState({})
    const [showActionModal, setShowActionModal] = React.useState(false)
    const [token, setToken] = React.useState({email: "", hash: "", user: {}, uuid: "", isLogged: false})

    //actions modal functions
    function dblclickAction(action) {
        //console.log(action)
        ActionsAPI.getActionByUUID(action).then(data => {
            setShowActionModal(true)
            setCurrentAction(data)
            //console.log(data)
        })
    }

    //effects
    useEffect(()=> {
        updateActions(setActions)
        let localToken = JSON.parse(localStorage.getItem("account"))
        if (localToken) {
            setToken(localToken)
        }
    }, [])

    function Documents() {
        return (
            <div>
                <ActionModal show={showActionModal} showActionModal={showActionModal}
                             setShowActionModal={setShowActionModal} action={currentAction} update={updateActions}
                             setActions={setActions}/>
                {!token.isLogged
                    ? <SignIn setToken={setToken}/>
                    : <div>
                        {actions.length ? (<Actions actions={actions} dblclickAction={dblclickAction}/>) : <p>Нет взаимодействий</p>}
                        <Orders/>
                      </div>}
            </div>
        )
    }

    //main render
    return (
        <div className="App">
            <TopMenu token={token} setToken={setToken}/>
            <LeftTab documents={Documents()}/>
        </div>
    );
}

export default App;
