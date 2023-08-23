import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import {AuthContextProvider} from './Context/AuthContext'
import { render } from "react-dom"
import { transitions , positions , Provider as  AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"


const options = {
  position : positions.TOP_CENTER ,
  timeout : 5000 ,
  offset : "30px" ,
  transition : transitions.SCALE
}


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <AlertProvider template ={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);