import { HashRouter as Router, Route } from 'react-router-dom'
import './App.scss';

//screens
import ParticleScreen from './screens/ParticleScreen'
import PapayaScreen from './screens/PapayaScreen'
import DigitalScreen from './screens/DigitalScreen'
import RechardScreen from './screens/RechardScreen'
import VibrantScreen from './screens/VibrantScreen'
import IcoshadrenScreen from './screens/IcoshadrenScreen'

import BoilerScreen from './screens/BoilerScreen'

import MainScreen from './screens/MainScreen'
import ParticleBackgroundScreen from './screens/ParticleBackgroundScreen'

//basic Components
import Header from "./components/componentParts/Header"

function App() {
  return (
    <>
      <Router>
        <IcoshadrenScreen/>
        <Header/>
        <Route path='/ParticleScreen' component={ParticleScreen} exact />
        <Route path='/PapayaScreen' component={PapayaScreen} exact />
        <Route path='/DigitalScreen' component={DigitalScreen} exact />
        <Route path='/RechardScreen' component={RechardScreen} exact />
        <Route path='/VibrantScreen' component={VibrantScreen} exact />
        <Route path='/BoilerScreen' component={BoilerScreen} exact />
        <Route path='/IcoshadrenScreen' component={IcoshadrenScreen} exact />

        <Route path='/ParticleBackgroundScreen' component={ParticleBackgroundScreen} exact />

        <Route path='/' component={MainScreen} exact />
      </Router>
    </>
  );
}

export default App;
