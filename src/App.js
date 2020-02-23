import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';

import './App.css';

function App() {
  const siteTitle = 'moviepicker.'

  return (
    <React.Fragment>
      <Header title={siteTitle} />
      <HomePage />
    </React.Fragment>
  );
}

export default App;
