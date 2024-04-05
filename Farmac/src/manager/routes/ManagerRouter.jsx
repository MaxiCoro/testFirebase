//React Router
import { Routes, Route } from 'react-router-dom';

// Pages
import { Home } from '../home/page/Home';
import { Inventory } from '../inventory/page/Inventory';
import { Reports } from '../reports/page/Reports';
import { Sales } from '../sales/page/Sales';

export const ManagerRouter = () => {
    return (
        <Routes>
            <Route path='/' element = { <Home /> } /> 
            <Route path='/home' element = { <Home /> } /> 

            <Route path='/inventory' element = {<Inventory />} />

            <Route path='/reports' element = {<Reports />} />

            <Route path='/sales' element = {<Sales />} />
        </Routes>
    )
}
