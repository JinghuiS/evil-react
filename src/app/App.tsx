import React, { useState } from 'react';
import logo from '@/assets/logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

const App: React.FC = ({ children }) => {
    return <div>{children}</div>;
};

export default App;
