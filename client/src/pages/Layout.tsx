import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import TopNavigationBar from '../components/TopNavigationBar'

const Layout = () => {
    return (
        <>
            <TopNavigationBar />
            <Outlet />
        </>
    )
}

export default Layout