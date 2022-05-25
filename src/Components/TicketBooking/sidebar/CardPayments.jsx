import axios from 'axios';
import React, { useState } from 'react'
import { Alert, ModalFooter } from 'reactstrap';
import { PAYMENT_URL } from "../Resources/CONST.json"

const CardPayment = ({ sethidden }) => {

    //Modal
    const [dropHidden, setDropHidden] = useState(false);

    // Payment info
    const [cardType, setcardType] = useState('Select...');
    const [cardName, setcardName] = useState('');
    const [cardNumber, setcardNumber] = useState('');
    const [cvv, setcvv] = useState(0);
    const [expiry, setexpiary] = useState('');
    const [postcode, setpostcode] = useState('');
    const [toC, settoC] = useState(false);

    // Alerts
    const [hideAlert, sethideAlert] = useState(false);
    const [successAlert, setsuccessAlert] = useState(false);
    const [tocAlert, settocAlert] = useState(false);

    const hiddenState = () => {
        setDropHidden(!dropHidden);
    }

    const closeModal = () => {
        sethidden(false);
    }

    const dangerAlertFadeAway = () => {
        setTimeout(() => {
            sethideAlert(false);
        }, 3000);
    }

    const successAlertFadeAway = () => {
        setTimeout(() => {
            sethidden(false);
        }, 4000);
    }

    const tocAlertFadeAway = () => {
        setTimeout(() => {
            settocAlert(false);
        }, 4000);
    }
}