import React from 'react'
import { Box, Button, Container, Paper, Typography, Grid } from '@mui/material'
import Data from '../../data/JsonData';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const UpcomingTournament = () => {
    return (
        <Box>
            <Container maxWidth='lg' sx={{ py: 9 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, color: 'text.title' }}>The Upcoming <Typography component={'span'} sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, background: 'linear-gradient(105.55deg, #085A6C -6.68%, #269089 43.13%, #7ABC82 96.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tournament</Typography></Typography>
                    <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: 'text.secondarydefault', mt: 1 }}>Advanced sports venues offer the latest facilities, dynamic and unique environments for enhanced performance.</Typography>
                </Box>
                <Box sx={{ mt: 5 }}>
                    <Grid container spacing={2}>
                        {
                            Data.tournament.map((tour, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <Paper sx={{ boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', border: '1px solid #EAEDF0', borderRadius: '10px', height: 1, overflow: 'hidden', '&:hover img': { transform: 'scale(1)' } }}>
                                        <Box>
                                            <Box sx={{ width: '100%', height: '275px', overflow: 'hidden' }}>
                                                <Box component={"img"} src={tour.image} alt="" sx={{ width: '100%', height: 1, objectFit: 'cover', transition: '.4s', transform: 'scale(1.2)' }} />
                                            </Box>
                                            <Box sx={{ py: 2, px: 1.5 }}>
                                                <Box>
                                                    <Box>
                                                        <Typography sx={{ fontSize: 22, fontWeight: 600, color: 'text.title' }}>{tour.title}</Typography>
                                                    </Box>
                                                    <Typography sx={{ color: 'text.secondarydefault', mt: 1, fontSize: 15 }}>{tour.description}</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: .8, mt: 2 }}>
                                                    <Box sx={{ height: 18 }}>
                                                        <PlaceOutlinedIcon sx={{ color: '#A0A0A0', fontSize: 18 }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ color: 'text.title', fontSize: 15, lineHeight: 'normal' }}>{tour.location}</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: .8, mt: 1.5 }}>
                                                    <Box sx={{ height: 16 }}>
                                                        <CalendarTodayOutlinedIcon sx={{ color: '#A0A0A0', fontSize: 16 }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ color: 'text.title', fontSize: 15, lineHeight: 'normal' }}>{tour.date}</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ mt: 3, }}>
                                                    <Button fullWidth variant='outlined' size='medium' startIcon={<CalendarMonthOutlinedIcon />}>Book Now</Button>
                                                </Box>
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

export default UpcomingTournament