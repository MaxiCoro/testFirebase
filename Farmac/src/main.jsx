// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux
import { Provider } from 'react-redux';
import { store } from './storage/store.js';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Components
import { FarmaSoftRouter } from './router/FarmaSoftRouter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store = {store}>
            <BrowserRouter>
                <FarmaSoftRouter/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
