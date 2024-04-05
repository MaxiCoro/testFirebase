// React
import { useState } from 'react';

// Components
import { SnackbarNotification } from '../../ui/components'; 
import { FormLogin } from '../layouts/FormLogin';

export const Login = () => {

    // State de Estados
    const [statusLogin, setstatusLogin] = useState({
        colorSnackbar: '',
        errorUsername: false,
        errorPassword: false,
        isLoading: true,
        isSnackbarActive: false,
        messageSnackbar: ''
    });

    return (
        <>
            <FormLogin 
            setstatusLogin = {setstatusLogin}/>

            <SnackbarNotification 
            colorAlert = {statusLogin.colorSnackbar}
            isOpen = {statusLogin.isSnackbarActive}
            message = {statusLogin.messageSnackbar}
            onClose={() => {setstatusLogin(prevState => ({ ...prevState, isSnackbarActive: false }))}}/>
        </>
    )
}
