import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


const HomeLayout = () => {

    return (
        <>
            <Box className="scroll-bar">
                <Box sx={{ py: .6, px: { xs: 1, sm: 2 }, position: 'sticky', top: 0, zIndex: 1000, left: 0, backgroundColor: 'background.card', borderBottom: '1px solid #EAEDF0' }}>
                    <Navbar />
                </Box>
                <Box>
                    <Outlet />
                </Box>
                <Box>
                    <Footer />
                </Box>
            </Box>

        </>
    )
}

export default HomeLayout