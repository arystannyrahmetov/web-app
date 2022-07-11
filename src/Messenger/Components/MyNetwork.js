import React, {Component, useEffect} from 'react';
import {Container, Col, Row} from "react-bootstrap";
import Talk from "talkjs";
import MessengerAPI from "../../API/MessengerAPI";
import Users from './Users'

function messageOnClick(user, currentUser, container) {

    Talk.ready
        .then(() => {
            const me = new Talk.User(currentUser)
            const other = new Talk.User(user)

            const session = new Talk.Session({
                appId: "tDIomYJi",
                me: me
            })

            const conversationId = Talk.oneOnOneId(me, other)
            const conversation = session.getOrCreateConversation(conversationId)

            conversation.setParticipant(me)
            conversation.setParticipant(other)

            let chatbox = session.createInbox()
            chatbox.select(conversation)
            chatbox.mount(document.getElementById('talkjs-container'))
        })
        .catch(e => console.error(e))

}

function MyNetwork(props) {

    const [currentUser, setCurrentUser] = React.useState({});
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        let lsUser = localStorage.getItem('account')
        if (lsUser) {
            let usrObj = JSON.parse(lsUser)
            MessengerAPI.getUsers(usrObj.user).then(res => {
                setUsers(res.users)
                setCurrentUser(usrObj.user)
            })

        }
    }, []);

    return (
        <Container>
            <Row>
                <div className="users">
                    <Col>
                        <div className="current-user-container">
                            {currentUser &&
                                <div>
                                    <picture className="current-user-picture">
                                        <img alt={currentUser.name} src={currentUser.photoUrl}/>
                                    </picture>
                                    <div className="current-user-info">
                                        <h3>{currentUser.name}</h3>
                                        <p>{currentUser.info}</p>
                                    </div>
                                </div>
                            }
                        </div>
                    </Col>
                    <div className="users-container">
                        <Col>
                            {users &&
                                <Users users={users}
                                       messageOnClick={messageOnClick}
                                       currentUser={currentUser}/>
                            }
                        </Col>
                        <Col>
                            <div className="chatbox-container">
                                <div id="talkjs-container" style={{height: "90%"}}><i></i></div>
                            </div>
                        </Col>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default MyNetwork;