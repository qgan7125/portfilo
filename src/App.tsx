import React from 'react';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'antd/dist/antd.min.css'; 
import { Layout } from 'antd';
import SideBar from 'components/SideBar/SideBar';

function App() {
  return (
    <Layout>
      <SideBar />
      <Home />
    </Layout>
  );
}

export default App;
