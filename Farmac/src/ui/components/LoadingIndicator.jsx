// Material UI
import { Backdrop, CircularProgress } from '@mui/material';

export const LoadingIndicator = ({ isOpen }) => {
    return (
        <Backdrop
        sx = {{ color: 'white', zIndex: 99 }}
        open = {isOpen}>
            <CircularProgress/>
        </Backdrop>
    )
}
