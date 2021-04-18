import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MainLayout from './pages/layout/MainLayout';
import { store } from './app/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout />
      </Router>
    </Provider>
  );
};

export default App;
