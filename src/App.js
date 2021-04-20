import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import CustomContext from './Components/Contextapi/CustomContext';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute';
import AdminLayout from './Pages/AdminPanel/AdminLayout/AdminLayout';
import BuyService from './Pages/BuyService/BuyService';
import Home from './Pages/Home/Home';

function App() {
  return (
      <CustomContext>
          <Router>
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <PrivateRoute exact path="/admin">
                      <AdminLayout />
                  </PrivateRoute>

                  <PrivateRoute exact path="/admin/:panelId">
                      <AdminLayout />
                  </PrivateRoute>
                  <Route exact path="/login">
                      <Login/>
                  </Route>
                  <PrivateRoute exact path="/buy-service/:serviceId">
                      <BuyService/>
                  </PrivateRoute>
              </Switch>
          </Router>
      </CustomContext>
  );
}

export default App;
