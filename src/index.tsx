import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import BookingPage from "./pages/BookingPage/BookingPage";
import {AdminPage} from "./pages/AdminPage";
import {InventoryPage} from "./pages/InventoryPage";
import {SchedulePage} from "./pages/SchedulePage";
import {TagElement} from "./elements/TagElement/TagElement";
import {NavigationPanel} from "./blocks/NavigationPanel/NavigationPanel";
import {Provider} from "react-redux";
import {store} from "./store";
// import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <NavigationPanel/>
        <BrowserRouter>
            <Switch>
                <Route path='/bookings' render={() => (<BookingPage/>)}
                />

                <Route path='/admin' render={() => (<AdminPage/>)}
                />

                <Route path='/inventory' render={() => (<InventoryPage/>)}
                />

                <Route path='/schedule' render={() => (<SchedulePage/>)}
                />

                <Route path='*' render={() => {
                    return <Redirect to='/bookings'/>
                }}
                />
            </Switch>
        </BrowserRouter>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
