import React from 'react'
import { Box, Button, Container, Paper, Typography, Grid } from '@mui/material'
import badmintonImage from '../../assets/game-10.jpg'
import badmintonTwoImage from '../../assets/game-9.jpg'
import badmintonJourney from '../../assets/game-14.jpg'
import VerifiedIcon from '@mui/icons-material/Verified';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';
import SportsTennisOutlinedIcon from '@mui/icons-material/SportsTennisOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import Data from '../../data/JsonData';

const featureIcon = (featureId) => {
    switch (featureId) {
        case 1:
            return <Diversity2OutlinedIcon sx={{ fontSize: 45, color: 'text.secondarydefault', transition: '.4s', position: 'relative' }} />
        case 2:
            return <PersonOutlineOutlinedIcon sx={{ fontSize: 45, color: 'text.secondarydefault', transition: '.4s', position: 'relative' }} />
        case 3:
            return <StoreMallDirectoryOutlinedIcon sx={{ fontSize: 45, color: 'text.secondarydefault', transition: '.4s', position: 'relative' }} />
        case 4:
            return <SportsHandballOutlinedIcon sx={{ fontSize: 45, color: 'text.secondarydefault', transition: '.4s', position: 'relative' }} />
        case 5:
            return <SportsTennisOutlinedIcon sx={{ fontSize: 45, color: 'text.secondarydefault', transition: '.4s', position: 'relative' }} />
        case 6:
            return <TableRowsOutlinedIcon sx={{ fontSize: 45, color: 'text.secondarydefault', transition: '.4s', position: 'relative' }} />
        default:
            return
    }
}

const Features = () => {
    return (
        <Box sx={{ backgroundColor: 'background.light' }}>
            <Container maxWidth='lg' sx={{ py: 9 }}>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Box>
                                    <Typography sx={{ fontSize: { xs: '1.5rem', sm: "2rem" }, fontWeight: 700, color: 'text.title' }}>Start Your Journey With</Typography>
                                    <Typography component={'span'} sx={{ fontSize: { xs: '1.5rem', sm: "2rem" }, fontWeight: 700, background: 'linear-gradient(105.55deg, #085A6C -6.68%, #269089 43.13%, #7ABC82 96.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Dreamsports</Typography> <Typography component={'span'} sx={{ fontSize: { xs: '1.5rem', sm: "2rem" }, fontWeight: 700, color: 'text.title' }}>Badminton Today.</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: 16, color: 'text.secondarydefault', mt: 2 }}>At DreamSports Badminton, we prioritize your satisfaction and value your feedback as we continuously improve and evolve our learning experiences.</Typography>
                                    <Typography sx={{ fontSize: 16, color: 'text.secondarydefault', mt: 3 }}>Our instructors utilize modern methods for effective badminton lessons, offering introductory sessions for beginners and personalized development plans to foster individual growth.</Typography>
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    <Typography sx={{ fontSize: "1.2rem", fontWeight: 700, color: 'text.title' }}>Stay Ahead With Our Innovative Approach:</Typography>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    {
                                        Data.journey.map((item, index) => (
                                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.2 }}>
                                                <Box sx={{ height: 25 }}>
                                                    <VerifiedIcon sx={{ fontSize: 25 }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: 16, color: 'text.secondarydefault' }}>{item.title}</Typography>
                                                </Box>
                                            </Box>
                                        ))
                                    }
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
                                        <Box>
                                            <Button size='large' startIcon={<PersonAddAltOutlinedIcon />}>Join With Us</Button>
                                        </Box>
                                        <Box>
                                            <Button size='large' color='secondary' startIcon={<MenuOutlinedIcon />}>Learn More</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={5}>
                                    <Box sx={{ height: 1 }}>
                                        <Box>
                                            <Box component={"img"} src={badmintonImage} sx={{ width: 1, height: { xs: 'auto', md: 250 }, objectFit: 'cover', borderRadius: '5px' }} />
                                        </Box>
                                        <Box>
                                            <Box component={"img"} src={badmintonTwoImage} sx={{ width: 1, height: { xs: 'auto', md: 250 }, objectFit: 'cover', borderRadius: '5px' }} />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <Box sx={{ height: 1 }}>
                                        <Box>
                                            <Box component={"img"} src={badmintonJourney} sx={{ width: 1, height: { xs: 'auto', md: 505 }, objectFit: 'cover', borderRadius: '5px' }} />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <Typography sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, color: 'text.title' }}>Our <Typography component={'span'} sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, background: 'linear-gradient(105.55deg, #085A6C -6.68%, #269089 43.13%, #7ABC82 96.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Features</Typography></Typography>
                    <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: 'text.secondarydefault', mt: 1, maxWidth: 800, mx: 'auto' }}>Discover your potential with our comprehensive training, expert trainers, and advanced facilities. Join us to improve your athletic career.</Typography>
                </Box>
                <Box sx={{ mt: 5 }}>
                    <Grid container spacing={2}>
                        {
                            Data.features.map((feature, index) => (
                                <Grid key={index} item xs={12} sm={6} lg={4}>
                                    <Paper sx={{ '&:hover .bg-feature-icon::before': { backgroundColor: 'background.primary', transform: 'rotate(-45deg)' }, '&:hover .bg-feature-icon svg': { color: '#fff' }, boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', borderRadius: '10px', height: 1, p: 3, }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 1 }}>
                                            <Box className="bg-feature-icon" sx={{ alignBoth: 'center', width: 70, height: 70, position: 'relative', "&:before": { content: '""', backgroundColor: '#F9F9F6', width: 70, height: 70, mx: 'auto', transition: '.4s', borderRadius: '10px', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, } }}>
                                                {featureIcon(feature.id)}
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Box>
                                                    <Typography sx={{ fontSize: 22, fontWeight: 600, color: 'text.title' }}>{feature.title}</Typography>
                                                </Box>
                                                <Typography sx={{ color: 'text.secondarydefault', mt: 1, fontSize: 15 }}>{feature.description}</Typography>
                                            </Box>
                                            <Box sx={{ mt: 2, }}>
                                                <Box component={'a'} sx={{ fontSize: 16, fontWeight: 600, color: "primary.main" }}>Learn More</Box>
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

export default Features