import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import { Login } from '../components/Auth/Login/Login';
import { Route, Routes } from 'react-router-dom';
import { SearchHotels } from '../components/SearchHotels/SearchHotels';

function App() {

  return (
    // <div>
    <Routes>
      <Route path="/" element={<SearchHotels />} />
      <Route path="/search-for-hotels" element={<SearchHotels />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    // </div>
  );
}

export default App;
