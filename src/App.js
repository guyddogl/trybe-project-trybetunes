import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import BackToTop from './components/BackToTop/BackToTop';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="d-flex flex-nowrap">
          <Switch>
            <Route exact path="/trybe-project-trybetunes" component={ Login } />
            <Route exact path="/home" component={ Home } />
            <Route exact path="/search" component={ Search } />
            <Route exact path="/album/:id" component={ Album } />
            <Route exact path="/favorites" component={ Favorites } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/profile/edit" component={ ProfileEdit } />
            <Route component={ NotFound } />
          </Switch>
          <BackToTop />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
