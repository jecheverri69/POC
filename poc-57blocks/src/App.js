import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './components/Auth/AuthContext';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import NavBar from './components/NavBar/NavBar';
import DetailPage from './components/Home/DetailPage';
import './index.css';

const App = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <>
            {isLoggedIn ? (
                <>
                    <NavBar />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/detail/:name" element={<DetailPage />} />
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
            )}
        </>
    );
};

export default App;
