// Material UI 
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

// React Router
import { Link } from 'react-router-dom';

// Styles
import '../styles/sidebar_style.css';

export const ElementDrawer = ({ textButton, icon, redirectTo }) => {
    return (
        <ListItem 
        disablePadding 
        sx = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ListItemButton 
            //component = { Link }
            //to = { redirectTo }
            sx = {{ justifyContent: 'center', px: 2.5 }}>
                <ListItemIcon 
                sx = {{ minWidth: 0, mr: 3, justifyContent: 'center' }}>
                    {icon}
                </ListItemIcon>
                <ListItemText 
                className = "listItem_TextButton"
                primary = {textButton}
                sx = {{ color: 'var(--sidebar-color-option)' }} />
            </ListItemButton>
        </ListItem>
    )
}
