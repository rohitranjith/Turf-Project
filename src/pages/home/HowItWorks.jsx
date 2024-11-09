import React from 'react'
import { Box, Button, Container, Paper, Typography, Grid } from '@mui/material'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import Data from '../../data/JsonData';

const updateIcon = (cardId) => {
    switch (cardId) {
        case 1:
            return <HandshakeOutlinedIcon sx={{ fontSize: 35, color: 'text.secondarydefault', transition: '.4s', position: 'relative' }} />
        case 2:
            return <GrassOutlinedIcon sx={{ fontSize: 35, color: 'text.secondarydefault', transition: '.4s', position: 'relative' }} />
        case 3:
            return <LibraryBooksOutlinedIcon sx={{ fontSize: 35, color: 'text.secondarydefault', transition: '.4s', position: 'relative' }} />
        default:
            return
    }
}

const HowItWorks = () => {
    return (
        <Box>
            <Container maxWidth='lg' sx={{ py: 8 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, color: 'text.title' }}>How It <Typography component={'span'} sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, background: 'linear-gradient(105.55deg, #085A6C -6.68%, #269089 43.13%, #7ABC82 96.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Works</Typography></Typography>
                    <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: 'text.secondarydefault', mt: 1 }}>Simplifying the booking process for venues, and athletes.</Typography>
                </Box>
                <Box sx={{ mt: 5 }}>
                    <Grid container spacing={2}>
                        {
                            Data.howitworks.map((item, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <Paper sx={{ '&:hover .bg-icon::before': { backgroundColor: 'background.primary', transform: 'rotate(45deg)' }, '&:hover .bg-icon svg': { color: '#fff' }, py: 4, px: 3, boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', border: '1px solid #EAEDF0', borderRadius: '10px', textAlign: 'center', height: 1 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', height: 1 }}>
                                            <Box>
                                                <Box className="bg-icon" sx={{ alignBoth: 'center', width: 100, height: 100, mx: 'auto', position: 'relative', "&:before": { content: '""', backgroundColor: '#F9F9F6', width: 100, height: 100, mx: 'auto', transition: '.4s', borderRadius: '10px', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, } }}>
                                                    {updateIcon(item.id)}
                                                </Box>
                                                <Typography sx={{ fontSize: 22, fontWeight: 600, mt: 3, color: 'text.title' }}>{item.title}</Typography>
                                                <Typography sx={{ color: 'text.secondarydefault', mt: 2, fontSize: 15 }}>{item.description}</Typography>
                                            </Box>
                                            <Box sx={{ mt: 4, width: 1 }}>
                                                <Button variant="outlined" size='medium' sx={{ width: 1 }} endIcon={<ArrowForwardIcon />}>{item.btn_text}</Button>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default HowItWorks