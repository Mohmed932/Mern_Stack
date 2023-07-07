import React, { Fragment } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
        </Fragment>
    )
}

export default Layout
