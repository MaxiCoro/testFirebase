// React Router
import { Navigate, Routes, Route } from 'react-router-dom';

// Components 
import { ProtectedRoute } from './ProtectedRoute';

// Pages
import { Login } from '../auth/page/Login';
import { ManagerRouter } from '../manager/routes/ManagerRouter';

export const FarmaSoftRouter = () => {
    return (
        <Routes>
            <Route path = 'login' element = { <Login /> } />

            <Route path = 'management/*' element = {
                <ProtectedRoute redirectTo = '/login'>
                    <ManagerRouter/>
                </ProtectedRoute>
            } />
        </Routes>
    )
}
