import React from 'react';
import Header from "./components/Header";
import Routing from "./components/Routing";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Header/>
      <Routing/>
    </div>
  );
};

export default App;