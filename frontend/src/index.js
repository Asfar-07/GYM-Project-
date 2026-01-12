import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from "@react-oauth/google";
import {Provider} from "react-redux"
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root1'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="">
    <Provider store={store}>
    <App />
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
