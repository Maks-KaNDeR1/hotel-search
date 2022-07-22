import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import { Login } from '../components/Auth/Login/Login';
import { Route, Routes } from 'react-router-dom';
import { SearchHotels } from '../components/SearchHotels/SearchHotels';
import { LinearProgress } from '@mui/material';
import { useAppSelector } from '../utils/hook';

function App() {

  const loading = useAppSelector(state => state.app.statusLoading)

  return (
    <div>

      {loading && <LinearProgress sx={linearStyle}
        color='info' />}
      <Routes>
        <Route path="/" element={<SearchHotels />} />
        <Route path="/search-for-hotels" element={<SearchHotels />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}


let linearStyle: React.CSSProperties = {
  position: 'absolute',
  top: '1vh',
  width: '99%',
  height: '5px'
}


export default App;
