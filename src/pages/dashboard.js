import React from 'react'
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const dashboardPage = () => {
    return (
        <>
            <Sidebar/>
            <Navbar/>
            <Dashboard/>
            <Dashboard/>
        </>
    )
}

export default dashboardPage;
