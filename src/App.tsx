import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import {AdminPage} from "./pages/AdminPage";
import {InventoryPage} from "./pages/InventoryPage";
import {SchedulePage} from "./pages/SchedulePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/bookings' render={BookingPage}
          />

          <Route path='/admin' render={AdminPage}
          />

          <Route path='/inventory' render={InventoryPage}
          />

          <Route path='/schedule' render={SchedulePage}
          />

          <Route path='*' render={()  => {
            return <Redirect to='/bookings' />
          }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
