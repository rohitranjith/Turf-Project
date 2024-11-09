import { Box, Container, Paper, Typography, Grid } from '@mui/material'
import bgImage from '../../assets/game-3.jpg'
import Data from '../../data/JsonData';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const Event = () => {
    return (
        <Box>
            <Box sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', height: 225, backgroundSize: 'cover', backgroundPositionY: '80%', boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 30%)', position: 'relative' }}>
                <Container maxWidth='lg'>
                    <Box sx={{ px: { xs: 1, sm: 2, md: 0 }, position: 'absolute', top: '50%', transform: 'translateY(-50%)', }}>
                        <Box>
                            <Typography sx={{ fontSize: { xs: '2rem', sm: "2.8rem" }, fontWeight: 700, color: 'text.default' }}>Upcoming Events</Typography>
                            <Typography sx={{ fontSize: { xs: 15, sm: 18, }, color: 'text.default', mt: 1 }}>Simplifying the booking process for venues, and athletes.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Container maxWidth='lg' sx={{ py: 9 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, color: 'text.title' }}>The Upcoming <Typography component={'span'} sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, background: 'linear-gradient(105.55deg, #085A6C -6.68%, #269089 43.13%, #7ABC82 96.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tournament</Typography></Typography>
                    <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: 'text.secondarydefault', mt: 1 }}>Advanced sports venues offer the latest facilities, dynamic and unique environments for enhanced performance.</Typography>
                </Box>
                <Box sx={{ mt: 5 }}>
                    <Grid container spacing={2}>
                        {
                            Data.upcomingtournament.map((tour, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <Paper sx={{ boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', border: '1px solid #EAEDF0', borderRadius: '10px', height: 1, overflow: 'hidden', '&:hover img': { transform: 'scale(1)' }, '&:hover .date-bg': { backgroundColor: '#097E52' } }}>
                                        <Box>
                                            <Box sx={{ width: '100%', height: '275px', overflow: 'hidden', position: 'relative' }}>
                                                <Box component={"img"} src={tour.image} alt="" sx={{ width: '100%', height: 1, objectFit: 'cover', transition: '.4s', transform: 'scale(1.2)' }} />
                                                <Box className="date-bg" sx={{ width: 85, height: 65, transition: '.4s', alignBoth: 'center', flexDirection: 'column', backgroundColor: '#192335', position: 'absolute', top: { xs: 10, md: 20 }, left: { xs: 10, md: 20 }, borderRadius: '10px' }}>
                                                    <Typography sx={{ fontSize: 26, fontWeight: 700, lineHeight: 'normal', color: 'text.default' }}>{tour.day}</Typography>
                                                    <Typography sx={{ fontSize: 14, fontWeight: 600, lineHeight: 'normal', color: 'text.default' }}>{tour.date}</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ py: 2, px: 1.5 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: .8, flexWrap: 'wrap' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: .5, }}>
                                                        <Box sx={{ height: 16 }}>
                                                            <AccessTimeOutlinedIcon sx={{ color: '#A0A0A0', fontSize: 16 }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography sx={{ color: 'text.title', fontSize: 14, lineHeight: 'normal' }}>{tour.time}</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: .5 }}>
                                                        <Box sx={{ height: 18 }}>
                                                            <PlaceOutlinedIcon sx={{ color: '#A0A0A0', fontSize: 18 }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography sx={{ color: 'text.title', fontSize: 14, lineHeight: 'normal' }}>{tour.location}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ mt: 1 }}>
                                                    <Typography sx={{ fontSize: 20, fontWeight: 700, color: 'text.title' }}>{tour.title}</Typography>
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

export default Event