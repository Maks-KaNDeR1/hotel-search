import React, { useEffect } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import { Login } from '../components/Auth/Login/Login';
import { Route, Routes } from 'react-router-dom';
import { SearchHotels } from '../components/SearchHotels/SearchHotels';
import { useAppDispatch } from '../utils/hook';
import { setIsInitialize } from '../components/Auth/auth-reducer';

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    const sesstorage = sessionStorage.getItem('auth')
    const isAuth = sesstorage && JSON.parse(sesstorage).isAuth
    dispatch(setIsInitialize(isAuth))
  }, [dispatch])


  return (
    <div>
      <Routes>
        <Route path="/" element={<SearchHotels />} />
        <Route path="/search-for-hotels" element={<SearchHotels />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}


export default App;
