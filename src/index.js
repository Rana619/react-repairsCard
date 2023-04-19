import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import configureStore, { history } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import firebase from 'firebase';
import config from './config/index';
import "firebase/database";
const { store, persistor } = configureStore();

firebase.initializeApp(config.firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={<div>loading</div>} persistor={persistor}>
        <App history={history} />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();