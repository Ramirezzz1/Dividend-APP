import React from 'react'
import Dashboard from '../components/Dashboard';
import NASDAQ from '../components/Dashboard/Chart/Chart';
import Navbar from '../components/Navbar';
import { Container } from '../components/Signin/SigninElements';

const dashboardPage = () => {
    return (
        <>
            <Navbar/>
            <Container/>
            <Dashboard/>
            <Dashboard/>
            <NASDAQ/>
        </>
    )
}

export default dashboardPage;
