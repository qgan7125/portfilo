import React, { useState } from 'react';
import Home from 'pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'antd/dist/antd.min.css';
import SideBar from 'components/SideBar/SideBar';
import About from 'pages/About/About';
import './App.scss';

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App__layout" style={{ transform: `translateX(-${page * 100}vw)`}}>
      <SideBar />
      <Home setPage={setPage} />
      <About />
    </div>
  );
}

export default App;
