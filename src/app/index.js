import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './screens/Navbar';

export default () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};
