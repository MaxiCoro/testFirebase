// React
import { useState } from 'react';

// Material UI
import { Box, Button, TextField } from '@mui/material';

//Images & Styles
import logo from '../../assets/images/logo.png';
import '../../ui/styles/colors.css';

export const FormLogin = ({ setstatusLogin}) => {

    // State de Informacion
    const [dataLogin, setdataLogin] = useState({
        username: '',
        password: ''
    });

    // Handlers
    const handleUsernameInput = (e, lengthLimit) => {
        if (e.target.value.length <= lengthLimit) {
            setdataLogin(prevState => ({
                ...prevState,
                username: e.target.value.toUpperCase()
            }));
        }
    }

    const handlerPasswordInput = (e, lengthLimit) => {
        if (e.target.value.length <= lengthLimit) {
            setdataLogin(prevState => ({
                ...prevState,
                password: e.target.value
            }));
        }
    }

    const handlerBtnLogin = () => {
        if ( dataLogin.username == 'ROOT' && dataLogin.password == 'ROOT'){
            setstatusLogin(prevState => ({
                ...prevState,
                colorSnackbar: 'success',
                messageSnackbar: 'Bienvenido!',
                isSnackbarActive: true
            }));
        } else {
            setstatusLogin(prevState => ({
                ...prevState,
                colorSnackbar: 'error',
                messageSnackbar: 'Credenciales Invalidas',
                isSnackbarActive: true
            }));
        }
    }

    return (  
        <Box 
        sx = {{ width: '100%', height: '100%', p: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            <Box
            sx = {{ width: '40%' }}>

                <Box
                sx = {{ display: 'flex', flexDirection: 'column', border: 1, borderRadius: 3, px: 7, py: 5, justifyContent: 'center', alignItems: 'center' }}>

                    <img 
                    alt = '404_NOT_FOUND'
                    src = {logo}
                    style={{ filter: 'invert(1)', paddingBottom: 20 }}
                    width={300}/>

                    <TextField 
                    fullWidth
                    label = 'Usuario' 
                    onChange = {(e) => handleUsernameInput(e, 20)}
                    sx = {{ mb: 3 }}
                    value = {dataLogin.username} 
                    variant = 'outlined' />
                    
                    <TextField
                    fullWidth
                    label = 'Contraseña'
                    onChange = {(e) => handlerPasswordInput(e, 10)} 
                    sx = {{ mb: 3 }}
                    type = 'password' 
                    value = {dataLogin.password}
                    variant = 'outlined' />

                    <Button 
                    color = 'success'
                    fullWidth
                    onClick = {handlerBtnLogin}> Ingresar </Button>
                </Box>
            </Box>

        </Box>
    ) 
}
