import { Box, Button, Container, Paper, Typography, Grid } from '@mui/material'
import React from 'react'
import Construction from '../../assets/under-constructions-1.svg'
import { useNavigate } from 'react-router-dom'

const ForbiddenError = () => {

    const navigate = useNavigate();

    return (
        <Container maxWidth="xl">
            <Box sx={{ my: { xs: 4, md: 0 }, minHeight: { xs: 'auto', md: "calc(100vh - 98px)" }, display: "flex", alignItems: "center", }}>
                <Paper sx={{ width: '100%', borderRadius: 7, overflow: 'hidden', minHeight: { xs: 'auto', md: "75vh" }, boxShadow: '0px 0px 5px 1px rgb(212 212 212 / 44%)' }}>
                    <Grid container spacing={2} sx={{ alignItems: "center", flexDirection: { xs: "column-reverse", md: 'row' } }}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ pt: { xs: 0, sm: 6 }, pb: { xs: 4, sm: 6 }, px: { xs: 2, sm: 4, md: 8 }, }}>
                                <Box>
                                    <Typography sx={{ fontSize: { xs: "2rem", sm: "4rem" }, fontWeight: 600, color: 'text.secondary' }}>Coming Soon...</Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Typography sx={{ fontSize: { xs: 14, sm: 15 }, color: "grey", lineHeight: '22px', }}>An exciting new experience is coming soon! Stay tuned for updates and be among the first to know when we go live. We can't wait to share what's next!</Typography>
                                </Box>
                                <Box sx={{ mt: { xs: 1, sm: 2 } }}>
                                    <Typography sx={{ fontSize: { xs: 16, sm: 20 }, color: 'text.secondary', fontWeight: 600 }}>Stay connected, Stay updated!</Typography>
                                </Box>
                                <Box sx={{ mt: { xs: 2, sm: 4 } }}>
                                    <Button sx={{ backgroundColor: "text.secondary", fontSize: "17px", padding: "6px 24px", textTransform: 'initial', letterSpacing: .6, fontWeight: 400 }} onClick={() => { navigate(-1) }}>Back to Home</Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ py: { xs: 0, sm: 4 }, px: { xs: .5, sm: 4, md: 6 }, }}>
                                <Box>
                                    <Box>
                                        <Box component={'img'} src={Construction} alt="" sx={{ width: '100%', height: '100%' }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    )
}

export default ForbiddenError