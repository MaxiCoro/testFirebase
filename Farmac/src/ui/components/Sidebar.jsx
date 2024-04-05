// Material UI 
import { AppBar, Box, Divider, Drawer, List, Toolbar } from '@mui/material';
import { AllInbox as AllInboxIcon, AttachMoney as AttachMoneyIcon, Assessment as AssessmentIcon, Home as HomeIcon } from '@mui/icons-material';

// Components
import { ElementDrawer } from './';

// Style & Images
import '../styles/colors.css'
import logo_img from '../../assets/images/logo.png';

const drawerWidth = 290;

export const Sidebar = ({ children }) => {
    return (
        <Box 
        sx = {{ display: 'flex' }}>
            <Drawer
            sx = {{ 
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box'
                }}}
            variant = 'permanent'
            anchor = 'left'>
                <AppBar sx = {{ boxShadow: 2 }}>
                    <Toolbar
                    sx = {{ backgroundColor: 'var(--primary-color)', justifyContent: 'center' }}>
                        <img 
                        alt = "404_NOT_FOUND"
                        style = {{ filter: 'invert(1)' }}
                        src = {logo_img} 
                        width = {100}/>
                    </Toolbar>
                </AppBar>
                <Toolbar></Toolbar>
                <List>
                    <ElementDrawer 
                    icon = {<HomeIcon sx = {{ color: 'var(--sidebar-color-option)' }}/>}
                    redirectTo = ''
                    textButton = 'Inicio'/>
                </List>
                
                <Divider />

                <List>
                    <ElementDrawer 
                    icon = {<AllInboxIcon sx = {{ color: 'var(--sidebar-color-option)' }}/>}
                    redirectTo = ''
                    textButton = 'Inventario'/>

                    <ElementDrawer 
                    icon = {<AttachMoneyIcon sx = {{ color: 'var(--sidebar-color-option)' }}/>}
                    redirectTo = ''
                    textButton = 'Ventas'/>
                </List>
                
                <Divider />
                <List>    
                    <ElementDrawer 
                    icon = {<AssessmentIcon sx = {{ color: 'var(--sidebar-color-option)' }}/>}
                    redirectTo = ''
                    textButton = 'Reportes'/>
                </List>
            </Drawer>

            <Box
            component = 'main'
            sx = {{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    ) 
}
