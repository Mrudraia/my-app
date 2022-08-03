import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Projects from './pages/Projects';
import Customizations from './pages/Customizations';
import Settings from './pages/Settings';
import Header from './components/Header';
import Clusters from './pages/Clusters';



const App = () => {
  return (
    <BrowserRouter>
    <div className='parent'>
    
    <Sidebar>
    <Routes>
      <Route path="/" element={<Clusters />} />
      <Route path="/clusters" element={<Clusters />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/customizations" element={<Customizations />} />
      <Route path="/settings" element={<Settings />} />
     </Routes>
     </Sidebar>
     <Header />
     </div>
    
    
    </BrowserRouter>
  );
};

export default App;