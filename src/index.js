import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "react-toastify/dist/ReactToastify.css";
import 'reactjs-popup/dist/index.css';
import {toast} from "react-toastify";
import logService from './services/logService';
import App from './App';

toast.configure();
logService.init();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
