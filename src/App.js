import React, {useEffect, useRef} from "react"
import { HashRouter as BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.scss";
import { createBrowserHistory } from "history";
import gsap from 'gsap'
import {AnimatePresence, motion} from 'framer-motion'

//screens
import ParticleScreen from './screens/ParticleScreen'
import PapayaScreen from './screens/PapayaScreen'
import DigitalScreen from './screens/DigitalScreen'
import RechardScreen from './screens/RechardScreen'
import VibrantScreen from './screens/VibrantScreen'
import IcoshadrenScreen from './screens/IcoshadrenScreen'

//About Component
import AboutMe from './components/AboutComponents/AboutMe'
import AboutSite from './components/AboutComponents/AboutSite'

//Memory Component
import MemoryFullGallery from './components/MemoryComponents/MemoryFullGallery'
import MemoryPhotoGallery from './components/MemoryComponents/MemoryPhotoGallery'

import Galapagos from './components/MemoryComponents/SouthAmerica/Galapagos'
import ElCalafate from './components/MemoryComponents/SouthAmerica/ElCalafate'
import Toress from './components/MemoryComponents/SouthAmerica/Toress'
import ElCharten from './components/MemoryComponents/SouthAmerica/ElCharten'
import Copacabana from './components/MemoryComponents/SouthAmerica/Copacabana'
import Uyuni from './components/MemoryComponents/SouthAmerica/Uyuni'
import Cusco from './components/MemoryComponents/SouthAmerica/Cusco'
import Macchuppichu from './components/MemoryComponents/SouthAmerica/Macchuppichu'
import Lapaz from './components/MemoryComponents/SouthAmerica/Lapaz'
import Santiago from './components/MemoryComponents/SouthAmerica/Santiago'
import SSYProject from './components/MemoryComponents/SSYProject'
import Thanks from './components/MemoryComponents/Thanks'

//WorkComponent
import WorkScreen from './components/WorkComponents/WorkScreen'
import WorkScreenART from './components/WorkComponents/WorkScreenART'
import WorkScreenWEB from './components/WorkComponents/WorkScreenWEB'
import WorkScreenETC from './components/WorkComponents/WorkScreenETC'

import WorkDetailAI from './components/WorkComponents/AIDetail/WorkDetailAI'
import WorkDetailNLP from './components/WorkComponents/AIDetail/WorkDetailNLP'
import WorkDetailPA from './components/WorkComponents/AIDetail/WorkDetailPA'
import WorkDetailDT from './components/WorkComponents/AIDetail/WorkDetailDT'
import WorkDetailAIHR from './components/WorkComponents/AIDetail/WorkDetailAIHR'
import WorkDetailRC from './components/WorkComponents/AIDetail/WorkDetailRC'
import WorkDetailSB from './components/WorkComponents/AIDetail/WorkDetailSB'
import WorkDetailBCP from './components/WorkComponents/AIDetail/WorkDetailBCP'

import WorkDetailART from './components/WorkComponents/ARTDetail/WorkDetailART'
import WorkDetailART2 from './components/WorkComponents/ARTDetail/WorkDetailART2'
import WorkDetailART3 from './components/WorkComponents/ARTDetail/WorkDetailART3'
import WorkDetailART5 from './components/WorkComponents/ARTDetail/WorkDetailART5'
import WorkDetailART6 from './components/WorkComponents/ARTDetail/WorkDetailART6'
import WorkDetailART7 from './components/WorkComponents/ARTDetail/WorkDetailART7'

import WorkDetailWEB from './components/WorkComponents/WorkDetailWEB'

import WorkDetailETC from './components/WorkComponents/ETCDetail/WorkDetailETC'
import WorkDetailETC2 from './components/WorkComponents/ETCDetail/WorkDetailETC2'
import WorkDetailETC3 from './components/WorkComponents/ETCDetail/WorkDetailETC3'
import WorkDetailETCPaper from './components/WorkComponents/ETCDetail/WorkDetailETCPaper'

//ShopComponent
import ShopScreen from './components/ShopComponents/ShopScreen'
import ShopProductDetail from './components/ShopComponents/ShopProductDetail'
import CartScreen from './components/ShopComponents/CartScreen'
import OrderScreen from './components/ShopComponents/OrderScreen'

//RecordComponent
import RecordScreen from './components/RecordComponents/RecordScreen'
import RecordDetail from './components/RecordComponents/RecordDetail'
import RecordListScreen from './components/RecordComponents/RecordListScreen'
import RecordEditScreen from './components/RecordComponents/RecordEditScreen'

import BoilerScreen from './screens/BoilerScreen'
import MainScreen from './screens/MainScreen'
import InitialMainScreen from './screens/InitialMainScreen'
import ParticleBackgroundScreen from './screens/ParticleBackgroundScreen'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from "./screens/UserEditScreen"
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

import ShippingScreen from './components/ShopComponents/ShippingScreen'
import PaymentScreen from './components/ShopComponents/PaymentScreen'
import PlaceOrderScreen from './components/ShopComponents/PlaceOrderScreen'

//model
import IcoshadrenModel from './components/ModelComponents/IcoshadrenModel'
import Earth2ModelFrame from './components/ModelComponents/Earth2ModelFrame'

//basic Components
import Header from "./components/componentParts/Header"
import Footer from "./components/componentParts/Footer"
import Banner from "./components/componentParts/Banner"
import IntroOverlay from "./components/componentParts/IntroOverlay"
import Empty from "./components/componentParts/Empty"
import WarningScreen from "./components/componentParts/WarningScreen"
import UpdatingScreen from "./components/componentParts/UpdatingScreen"

function App() {

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

  const customHistory = createBrowserHistory();

  return (
    <>
      {/* <EarthModel/> */}
      <BrowserRouter history={customHistory}>
        {/* <IcoshadrenScreen/> */}
        <IcoshadrenModel/>
        <Header/>
        {/* <IcoshadrenModelReboot/> */}
        {/* <IntroOverlay/> */}
        <div className="overall-Layout" >
        
              <AnimatePresence exitBeforeEnter >
                <Switch >
              
                  {/* <Route exact path="/" component={Earth2ModelFrame}/> */}

                  <Route exact path="/" component={InitialMainScreen}/>
                  <Route exact path="/login" component={LoginScreen}/>
                  <Route exact path="/register" component={RegisterScreen}/>
                  <Route exact path="/profile" component={ProfileScreen}/>

                  <Route exact path="/MainScreen" component={MainScreen}/>

                  
                  <Route path="/AboutMe" component={AboutMe}/>
                  <Route path="/AboutSite" component={AboutSite}/>

                  {/* memory */}
                    <Route path="/MemoryFullGallery" component={MemoryFullGallery}/>
                    <Route path="/MemoryPhotoGallery" component={MemoryPhotoGallery}/>
{/* 
                    <Route path="/Galapagos" component={Galapagos}/>
                    <Route path="/ElCalafate" component={ElCalafate}/>
                    <Route path="/Toress" component={Toress}/>
                    <Route path="/ElCharten" component={ElCharten}/>
                    <Route path="/Copacabana" component={Copacabana}/>
                    <Route path="/Uyuni" component={Uyuni}/>
                    <Route path="/Cusco" component={Cusco}/>
                    <Route path="/Macchuppichu" component={Macchuppichu}/>
                    <Route path="/Lapaz" component={Lapaz}/>
                    <Route path="/Santiago" component={Santiago}/> */}
                    <Route path="/SSYProject" component={SSYProject}/>
                    <Route path="/Thanks" component={Thanks}/>
                  {/* <Route exact path="/MemoryScreen" component={Earth2ModelFrame}/> */}
                  <Route exact path="/MemoryScreen" component={({ history }) => { window.appHistory = history; return <Earth2ModelFrame />;}}/>

                  <Route path="/WorkScreen" component={WorkScreen}/>
                  <Route path="/WorkScreenART" component={WorkScreenART}/>
                  <Route path="/WorkScreenWEB" component={WorkScreenWEB}/>
                  <Route path="/WorkScreenETC" component={WorkScreenETC}/>

                  <Route path="/WorkDetailAI" component={WorkDetailAI}/>
                  <Route path="/WorkDetailNLP" component={WorkDetailNLP}/>
                  <Route path="/WorkDetailPA" component={WorkDetailPA}/>
                  <Route path="/WorkDetailDT" component={WorkDetailDT}/>
                  <Route path="/WorkDetailAIHR" component={WorkDetailAIHR}/>
                  <Route path="/WorkDetailRC" component={WorkDetailRC}/>
                  <Route path="/WorkDetailSB" component={WorkDetailSB}/>
                  <Route path="/WorkDetailBCP" component={WorkDetailBCP}/>

                  <Route path="/WorkDetailART" component={WorkDetailART}/>
                  <Route path="/WorkDetailART2" component={WorkDetailART2}/>
                  <Route path="/WorkDetailART3" component={WorkDetailART3}/>
                  <Route path="/WorkDetailART5" component={WorkDetailART5}/>
                  <Route path="/WorkDetailART6" component={WorkDetailART6}/>
                  <Route path="/WorkDetailART7" component={WorkDetailART7}/>

                  <Route path="/WorkDetailWEB" component={WorkDetailWEB}/>

                  <Route path="/WorkDetailETC" component={WorkDetailETC}/>
                  <Route path="/WorkDetailETC2" component={WorkDetailETC2}/>
                  <Route path="/WorkDetailETC3" component={WorkDetailETC3}/>
                  <Route path="/WorkDetailETCPaper" component={WorkDetailETCPaper}/>

                  <Route path="/banner" component={Banner}/>
                  <Route path="/ShopScreen" component={ShopScreen}/>
                  <Route path="/Shipping" component={ShippingScreen}/>
                  <Route path="/Payment" component={PaymentScreen}/>
                  <Route path="/PlaceOrder" component={PlaceOrderScreen}/>
                  <Route path="/order/:id" component={OrderScreen}/>
                  <Route path="/ShopProduct/:id" component={ShopProductDetail} />
                  <Route path="/cart/:id?" component={CartScreen} />

                  <Route path="/RecordScreen" component={RecordScreen} />
                  <Route path="/Records/:id" component={RecordDetail} />
                  
                  <Route exact path="/admin/userlist" component={UserListScreen}/>
                  <Route exact path="/admin/user/:id/edit" component={UserEditScreen}/>
                  
                  <Route exact path="/admin/productlist" component={ProductListScreen}/>
                  <Route exact path="/admin/product/:id/edit" component={ProductEditScreen}/>
                  
                  <Route exact path="/admin/orderlist" component={OrderListScreen}/>
                  
                  <Route path="/admin/recordlist" component={RecordListScreen} />
                  <Route path="/admin/record/:id/edit" component={RecordEditScreen} />
                  
                  <Route path="/WarningScreen" component={WarningScreen} />
                  <Route path="/UpdatingScreen" component={UpdatingScreen} />
                  
                </Switch>
              </AnimatePresence>
        </div>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

export default App;
