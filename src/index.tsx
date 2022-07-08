import React from 'react';
import './index.css';
import App from './components/app/app';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
// import {createStore, applyMiddleware} from "services";
// import {rootReducer} from "./services/rootReducer";
// import thunk from "services-thunk";
import ReactDOM from "react-dom";
import {setupStore} from "./services/setupStore";

const store = setupStore()

// const store = createStore(rootReducer, applyMiddleware(thunk));

// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
// root.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App/>
//         </BrowserRouter>
//     </Provider>
// );
// reportWebVitals();


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);