import { Box, Button, Paper, Typography, Container, Grid } from '@mui/material'
import React from 'react'
import PageNotFound from '../../assets/page-not-found.svg'
import Logo from '../../assets/game-logo.png'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {

    const navigate = useNavigate();

    return (
        <Box>
            <Paper sx={{ px: 2, py: 1 }}>
                <Container maxWidth="xl">
                    <Box>
                        <Box sx={{ cursor: 'pointer' }} onClick={() => { navigate('/') }} component={"img"} src={Logo}></Box>
                    </Box>
                </Container>
            </Paper>
            <Box sx={{ minHeight: "calc(100vh - 100px)", display: "flex", alignItems: "center", }}>
                <Container maxWidth="xl">
                    <Paper sx={{ py: 2, px: { xs: 2, sm: 4, md: 8 }, borderRadius: 4, minHeight: '75vh', boxShadow: '0px 0px 5px 1px rgb(212 212 212 / 44%)' }}>
                        <Grid container spacing={2} sx={{ alignItems: "center", flexDirection: { xs: "column-reverse", md: 'row' } }}>
                            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                                <Box sx={{ mt: 1 }}>
                                    <Typography sx={{ fontSize: { xs: "1.5rem", sm: '2.5rem', md: "3rem", fontWeight: 400 } }}>Oops...</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: { xs: "1.7rem", sm: "2.7rem", md: "3.5rem" }, fontWeight: 600, color: '#000' }}>Page Not Found</Typography>
                                </Box>
                                <Box sx={{ mt: 1.4 }}>
                                    <Typography sx={{ fontSize: { xs: 14, sm: 15 }, color: "#838383", fontWeight: 400 }}>Oops! The page you’re looking for doesn’t exist. It may have been moved, deleted, or the URL could be incorrect. Please check the URL, or go back to our homepage.</Typography>
                                </Box>
                                <Box sx={{ mt: 4 }}>
                                    <Button sx={{ fontSize: "18px", padding: "4px 30px", }} onClick={() => { navigate('/') }}>Go home</Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box component={'img'} src={PageNotFound} alt="" sx={{ width: '100%', height: '100%' }} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        </Box>
    )
}

export default Notfound