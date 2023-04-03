import React, { useEffect } from 'react';
import Router from './Router';
import { ToastContainer } from 'react-toastify';


const App = () => {

  return (
    <div>
      {/* <Login /> */}
      <ToastContainer />
      <Router />

    </div>
  );
};

export default App;