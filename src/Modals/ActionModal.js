import React from "react";
import ActionsAPI from "../API/ActionsAPI";
import MeetingModal from "./types/MeetingModal";
import PlannedActionModal from "./types/PlannedActionModal";
import SMSModal from "./types/SMSModal";
import TelephoneModal from "./types/TelephoneCallModal";
import InboxModal from "./types/InboxMailModal";
import OutboxModal from "./types/OutboxMailModal";


function ActionModal(props) {

    function RelevantModal() {
        if (props.action.type === 'meeting') {
            return <MeetingModal action={props.action} save={saveActionModal} close={closeActionModal} show={props.show} />;
        } else if (props.action.type === 'plannedAction') {
            return <PlannedActionModal action={props.action} save={saveActionModal} close={closeActionModal} show={props.show} />;
        } else if (props.action.type === 'SMS') {
            return <SMSModal action={props.action} save={saveActionModal} close={closeActionModal} show={props.show} />;
        } else if (props.action.type === 'telephoneCall') {
            return <TelephoneModal action={props.action} save={saveActionModal} close={closeActionModal} show={props.show} />;
        } else if (props.action.type === 'inbox') {
            return <InboxModal action={props.action} save={saveActionModal} close={closeActionModal} show={props.show} />;
        } else if (props.action.type === 'outbox') {
            return <OutboxModal action={props.action} save={saveActionModal} close={closeActionModal} show={props.show} />;
        }
        return <></>
    }

    function closeActionModal() {
        props.setShowActionModal(false)
    }

    function saveActionModal(action) {
        ActionsAPI.saveAction(action).then(data => {
            console.log(data);
            props.setShowActionModal(false)
            props.update(props.setActions);
        })
    }

    return(<RelevantModal/>)
}

export default ActionModal;