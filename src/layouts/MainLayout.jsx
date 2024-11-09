import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';
import MainNavbar from './MainNavbar'
import Sidebar from './Sidebar'

const MainLayout = () => {
      const [open, setOpen] = useState(true)
      const isLapView = useMediaQuery("(max-width: 1199px)")

      return (
            <>
                  <Box sx={{ backgroundColor: 'background.light', display: "flex", height: "100vh", position: "relative", transition: '.3s' }}>
                        <Sidebar open={Boolean(open && !isLapView)} />
                        <Box sx={{ width: { xs: '100%', md: "calc(100% - 70px)", lg: `calc(100% - ${open ? "280px" : "70px"})` }, ml: 'auto', position: 'relative', transition: { xs: 0, md: '.5s' }, overflow: "auto" }} className="scroll-bar">
                              <Box sx={{ px: { xs: "12px", sm: 2 }, py: 1.3, position: 'sticky', top: 0, zIndex: 1000, left: 0, backgroundColor: 'background.card' }}>
                                    <MainNavbar setOpenSideBar={() => { setOpen(!open) }} isOpenSidebar={open} />
                              </Box>
                              <Box sx={{ pb: 2, pt: { xs: 2.5, }, maxWidth: 1536, mx: "auto", px: { xs: "12px", sm: "24px" } }}>
                                    <Outlet />
                              </Box>
                        </Box>
                  </Box>

            </>

      )
}

export default MainLayout