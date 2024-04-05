import { Alert, Slide, Snackbar } from '@mui/material';

function SlideTransition(props) {
    return <Slide {...props} direction='left'/>;
}

export const SnackbarNotification = ({ message, colorAlert, isOpen, onClose }) => {
    return (
        <Snackbar
        anchorOrigin = {{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration = {2000}
        onClose = {onClose}
        open = {isOpen}
        TransitionComponent = { SlideTransition }>
            <Alert
            severity = {colorAlert}
            variant = 'filled'>
                {message}
            </Alert>
        </Snackbar>
    )
}
