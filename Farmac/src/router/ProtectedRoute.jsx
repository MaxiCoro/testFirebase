// Redux
import { useSelector } from 'react-redux';

// React Router
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, redirectTo }) => {
    
    const isAuthenticated = useSelector(state => state.auth.isLoggedIn);
    
    if (!isAuthenticated) {
        return <Navigate to = {redirectTo}/>
    } else {
        return children;
    }
}
