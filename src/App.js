import React, {useEffect, useRef} from "react"
import { HashRouter as Router, BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import "./App.scss";
import gsap from 'gsap'
import {AnimatePresence, motion} from 'framer-motion'

//screens
import ParticleScreen from './screens/ParticleScreen'
import PapayaScreen from './screens/PapayaScreen'
import DigitalScreen from './screens/DigitalScreen'
import RechardScreen from './screens/RechardScreen'
import VibrantScreen from './screens/VibrantScreen'
import IcoshadrenScreen from './screens/IcoshadrenScreen'

//ShopComponent
import ShopScreen from './components/ShopComponents/ShopScreen'
import ShopProductDetail from './components/ShopComponents/ShopProductDetail'
import CartScreen from './components/ShopComponents/CartScreen'
import OrderScreen from './components/ShopComponents/OrderScreen'

import BoilerScreen from './screens/BoilerScreen'
import MainScreen from './screens/MainScreen'
import InitialMainScreen from './screens/InitialMainScreen'
import ParticleBackgroundScreen from './screens/ParticleBackgroundScreen'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './components/ShopComponents/ProfileScreen'
import ShippingScreen from './components/ShopComponents/ShippingScreen'
import PaymentScreen from './components/ShopComponents/PaymentScreen'
import PlaceOrderScreen from './components/ShopComponents/PlaceOrderScreen'

//model
import IcoshadrenModel from './components/ModelComponents/IcoshadrenModel'
import IcoshadrenModelReboot from './components/ModelComponents/IcoshadrenModelReboot'

//basic Components
import Header from "./components/componentParts/Header"
import Footer from "./components/componentParts/Footer"
import Banner from "./components/componentParts/Banner"
import IntroOverlay from "./components/componentParts/IntroOverlay"
import Empty from "./components/componentParts/Empty"

// import {CSSTransition, TransitionGroup} from 'react-transition-group';

// const routes = [
//   { path: "/", name:"MainScreen", Component: MainScreen },
//   { path: "/banner", name:"Banner", Component: Banner },
//   { path: "/boardAppScreen", name:"BoardAppScreen", Component: BoardAppScreen },
// ]
function App() {

  // const location = useLocation();

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  useEffect(()=>{
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    //prevent flashing
    gsap.to('body', 0, { css: {visibility: "visible" }});

  }, []);

  return (
    <>
      {/* <Router>
          <Route path='/ParticleScreen' component={ParticleScreen} exact />
          <Route path='/PapayaScreen' component={PapayaScreen} exact />
          <Route path='/DigitalScreen' component={DigitalScreen} exact />
          <Route path='/RechardScreen' component={RechardScreen} exact />
          <Route path='/VibrantScreen' component={VibrantScreen} exact />
          <Route path='/BoilerScreen' component={BoilerScreen} exact />
          <Route path='/IcoshadrenScreen' component={IcoshadrenScreen} exact />
          <Route path='/BoardAppScreen' component={BoardAppScreen} exact />

          <Route path='/ParticleBackgroundScreen' component={ParticleBackgroundScreen} exact />

          <Route path='/MainScreen' component={MainScreen} exact />
          <Route path='/Banner' component={Banner} exact />
      </Router> */}
  
      <BrowserRouter>
        {/* <IcoshadrenScreen/> */}
        <IcoshadrenModel/>
        <Header/>
        {/* <IcoshadrenModelReboot/> */}
        {/* <IntroOverlay/> */}
        <div className="overall-Layout">
        {/* {routes.map(({ path, Component }) => (
          <Route key='name' path={path} exact>
            {({ match }) => (
              <CSSTransition
              >
                <div className="page">
                  <Component/>
                </div>
              </CSSTransition>
            )}
          </Route>
        ))} */}
              <AnimatePresence exitBeforeEnter >
                <Switch >
                  <Route exact path="/" component={InitialMainScreen}/>
                  <Route exact path="/login" component={LoginScreen}/>
                  <Route exact path="/register" component={RegisterScreen}/>
                  <Route exact path="/profile" component={ProfileScreen}/>
                  <Route exact path="/MainScreen" component={MainScreen}/>
                  <Route path="/banner" component={Banner}/>
                  <Route path="/ShopScreen" component={ShopScreen}/>
                  <Route path="/Shipping" component={ShippingScreen}/>
                  <Route path="/Payment" component={PaymentScreen}/>
                  <Route path="/PlaceOrder" component={PlaceOrderScreen}/>
                  <Route path="/order/:id" component={OrderScreen}/>
                  <Route path="/ShopProduct/:id" component={ShopProductDetail} />
                  <Route path="/cart/:id?" component={CartScreen} />
                </Switch>
              </AnimatePresence>
        </div>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

export default App;
