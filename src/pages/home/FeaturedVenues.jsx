import React, { useState } from 'react'
import { Box, Button, Container, Paper, IconButton, Rating, Typography, Grid } from '@mui/material'
import Data from '../../data/JsonData';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const FavoriteIcon = () => {
    const [addToFavourite, setaddToFavourite] = useState(false);
    return (
        <Box>
            <IconButton onClick={() => { setaddToFavourite(prev => !prev) }}>
                {
                    addToFavourite ?
                        <FavoriteOutlinedIcon color='error' />
                        :
                        <FavoriteBorderOutlinedIcon sx={{ color: 'grey' }} />
                }
            </IconButton>
        </Box>
    )
}

const FeaturedVenues = () => {
    return (
        <Box sx={{ backgroundColor: 'background.light' }}>
            <Container maxWidth='lg' sx={{ py: 9 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, color: 'text.title' }}>Featured <Typography component={'span'} sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, background: 'linear-gradient(105.55deg, #085A6C -6.68%, #269089 43.13%, #7ABC82 96.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Venues</Typography></Typography>
                    <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: 'text.secondarydefault', mt: 1 }}>Advanced sports venues offer the latest facilities, dynamic and unique environments for enhanced performance.</Typography>
                </Box>
                <Box sx={{ mt: 5 }}>
                    <Grid container spacing={2}>
                        {
                            Data.venues.map((venue, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <Paper sx={{ boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', borderRadius: '10px', height: 1, overflow: 'hidden', '&:hover img': { transform: 'scale(1)' } }}>
                                        <Box>
                                            <Box sx={{ width: '100%', height: '275px', overflow: 'hidden' }}>
                                                <Box component={"img"} src={venue.image} alt="" sx={{ width: '100%', height: 1, objectFit: 'cover', transition: '.4s', transform: 'scale(1.2)' }} />
                                            </Box>
                                            <Box sx={{ py: 2, px: 1.5 }}>
                                                <Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                        <Box>
                                                            <Typography sx={{ fontSize: 22, fontWeight: 600, color: 'text.title' }}>{venue.title}</Typography>
                                                        </Box>
                                                        <FavoriteIcon />
                                                    </Box>
                                                    <Typography sx={{ color: 'text.secondarydefault', mt: 1.5, fontSize: 15 }}>{venue.description}</Typography>
                                                </Box>
                                                <Box sx={{ mt: 1.5 }}>
                                                    <Rating name="read-only" value={venue.rating_value} precision={0.5} readOnly />
                                                </Box>
                                                <Box sx={{ mt: 2, }}>
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

export default FeaturedVenues