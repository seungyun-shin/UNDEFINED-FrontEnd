import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

//redux store
import store from './store';

// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { GlobalStyles } from "./styles/jsStyles/globalStyle"
import './styles/fonts/fonts.css'
import { ThemeProvider } from 'styled-components'; 
import theme from './styles/theme'
import SimpleReactLightbox from 'simple-react-lightbox'

import { HashRouter as BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <SimpleReactLightbox>  <Provider store={store}>
      <GlobalStyles/>
      
      <BrowserRouter history={customHistory}>
        <Route
          component={({ history }) => {
            window.appHistory = history;
            return <App />;
          }}
        />
      {/* <App /> */}
      </BrowserRouter>
      
  </Provider>
  </SimpleReactLightbox>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
