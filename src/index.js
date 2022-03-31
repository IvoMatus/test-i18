import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next'

import en from './Translations/en.json'
import es from './Translations/es.json'
import pt from './Translations/pt.json'

i18next.init({
  lng: 'es', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: en
    },
    pt: {
      translation: pt
    },
    es: {
      translation: es
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
