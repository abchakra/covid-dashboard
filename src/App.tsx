import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import MainLayout from './pages/layout/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
