import { Box, Container, IconButton, Typography, Paper, Rating, Button, Grid } from '@mui/material'
import bgImage from '../../assets/game-3.jpg'
import Data from '../../data/JsonData'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useState } from 'react';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

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

const SportsVenue = () => {
    return (
        <Box>
            <Box sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', height: 225, backgroundSize: 'cover', backgroundPositionY: '80%', boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 30%)', position: 'relative' }}>
                <Container maxWidth='lg'>
                    <Box sx={{ px: { xs: 1, sm: 2, md: 0 }, position: 'absolute', top: '50%', transform: 'translateY(-50%)', }}>
                        <Box>
                            <Typography sx={{ fontSize: { xs: '2rem', sm: "2.8rem" }, fontWeight: 700, color: 'text.default' }}>Sports Venue</Typography>
                            <Typography sx={{ fontSize: { xs: 15, sm: 18, }, color: 'text.default', mt: 1 }}>Simplifying the booking process for venues, and athletes.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ py: 6 }}>
                <Container maxWidth='lg'>
                    <Grid container spacing={2}>
                        {
                            Data.sportsvenue.map((venue, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <Paper sx={{ boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', borderRadius: '10px', height: 1, overflow: 'hidden', '&:hover img': { transform: 'scale(1)' }, '&:hover .date-bg': { backgroundColor: '#097E52' } }}>
                                        <Box>
                                            <Box sx={{ width: '100%', height: '275px', overflow: 'hidden', position: 'relative' }}>
                                                <Box component={"img"} src={venue.image} alt="" sx={{ width: '100%', height: 1, objectFit: 'cover', transition: '.4s', transform: 'scale(1.2)' }} />
                                                <Box className="date-bg" sx={{ width: 'auto', py: 1, px: 1.5, height: 'auto', transition: '.4s', alignBoth: 'center', flexDirection: 'column', backgroundColor: '#192335', position: 'absolute', top: { xs: 10, md: 20 }, right: { xs: 10, md: 20 }, borderRadius: '10px' }}>
                                                    <Typography sx={{ fontSize: 14, fontWeight: 700, lineHeight: 'normal', color: 'text.default' }}>{venue.hour}</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ py: 2, px: 1.5 }}>
                                                <Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                        <Box>
                                                            <Rating name="read-only" value={venue.rating_value} precision={0.5} readOnly />
                                                        </Box>
                                                        <FavoriteIcon />
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: 22, fontWeight: 600, color: 'text.title' }}>{venue.title}</Typography>
                                                    <Typography sx={{ color: 'text.secondarydefault', mt: 1.5, fontSize: 15 }}>{venue.description}</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: .8, mt: 2 }}>
                                                    <Box sx={{ height: 18 }}>
                                                        <PlaceOutlinedIcon sx={{ color: '#A0A0A0', fontSize: 18 }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ color: 'text.title', fontSize: 15, lineHeight: 'normal' }}>{venue.location}</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: .8, mt: 1.5 }}>
                                                    <Box sx={{ height: 16 }}>
                                                        <CalendarTodayOutlinedIcon sx={{ color: '#A0A0A0', fontSize: 16 }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ color: 'text.title', fontSize: 15, lineHeight: 'normal' }}>{venue.date}</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ mt: 2.5, }}>
                                                    <Button fullWidth variant='outlined' size='medium' startIcon={<CalendarMonthOutlinedIcon />}>Book Now</Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default SportsVenue