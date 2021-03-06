
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import Overview from '../Overview/Overview'
import Map from '../Map/Map'
import Gallery from '../Gallery/Gallery'
import Rates from '../Rates/Rates'
import Availability from '../Availability/Avilability'
import Reviews from '../Reviews/Reviews'
import Contact from '../Contact/Contact'
import Book from '../Book/Book'
import Header from '../Header/Header'
import { ThemeProvider} from '@material-ui/core';
import { theme } from '../../themes/themes';


import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main className='App'>
        <header className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/overview' component={Overview} />
            <Route exact path='/map' component={Map} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/rates' component={Rates} />
            <Route exact path='/avilability' component={Availability} />
            <Route exact path='/reviews' component={Reviews} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/book' component={Book} />
          </Switch>
        </header>
      </main>
    </ThemeProvider>
  );
}

export default App;
