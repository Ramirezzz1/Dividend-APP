import React from 'react'
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Container } from '../components/Signin/SigninElements';

const dashboardPage = () => {
    return (
        <>
            <Navbar/>
            <Container/>
            <Dashboard/>
            <Dashboard/>
        </>
    )
}

export default dashboardPage;
