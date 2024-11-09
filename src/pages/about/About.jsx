import React from 'react'
import bgImage from '../../assets/game-3.jpg'
import image from '../../assets/game-5.jpg'
import imageOne from '../../assets/game-12.jpg'
import imageTwo from '../../assets/game-14.jpg'
import { Box, Container, Typography, Grid } from '@mui/material'
import Data from '../../data/JsonData'
import Testimonials from '../home/Testimonials'
import Subscribe from '../home/Subscribe'

const About = () => {
    return (
        <Box>
            <Box sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', height: 225, backgroundSize: 'cover', backgroundPositionY: '80%', boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 30%)', position: 'relative' }}>
                <Container maxWidth='lg'>
                    <Box sx={{ px: { xs: 1, sm: 2, md: 0 }, position: 'absolute', top: '50%', transform: 'translateY(-50%)', }}>
                        <Box>
                            <Typography sx={{ fontSize: { xs: '2rem', sm: "2.8rem" }, fontWeight: 700, color: 'text.default' }}>About Us</Typography>
                            <Typography sx={{ fontSize: { xs: 15, sm: 18, }, color: 'text.default', mt: 1 }}>Simplifying the booking process for venues, and athletes.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ py: 8 }}>
                <Container maxWidth='lg'>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Box component={'img'} src={image} sx={{ width: 1, height: 300, borderRadius: '10px', objectFit: 'cover' }}></Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Box component={'img'} src={imageOne} sx={{ width: 1, height: 300, borderRadius: '10px', objectFit: 'cover' }}></Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Box component={'img'} src={imageTwo} sx={{ width: 1, height: 300, borderRadius: '10px', objectFit: 'cover' }}></Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={8}>
                                <Box>
                                    <Typography sx={{ fontSize: { xs: '2rem', sm: "2rem" }, fontWeight: 700, }}>Your Vision</Typography>
                                    <Typography sx={{ fontSize: { xs: 15, sm: 15, }, mt: 1, color: 'text.secondarydefault' }}>We envision a thriving badminton ecosystem with innovative technologies that enhance skills and cultivate a love for the sport. Our platform inspires individuals to unleash their full potential in badminton.</Typography>
                                    <Typography sx={{ fontSize: { xs: 15, sm: 15, }, mt: 2, color: 'text.secondarydefault' }}>We revolutionize badminton, empowering coaches and players to excel. Our platform offers comprehensive tools and support for growth within the badminton community. Join us and reach new heights of excellence!</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box sx={{ backgroundColor: 'background.primary', p: 2, borderRadius: '10px' }}>
                                    <Box>
                                        <Typography sx={{ fontSize: { xs: '2rem', sm: "2rem" }, fontWeight: 700, color: 'text.default' }}>Our Mission</Typography>
                                        <Typography sx={{ fontSize: { xs: 15, sm: 15, }, mt: 1, color: 'text.default' }}>We provide coaches and players with a seamless platform for connectivity, personalized insights, and educational resources. Together, we foster a collaborative community that supports growth and success in badminton.</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box >
            <Box>
                <Box sx={{ backgroundColor: 'background.light' }}>
                    <Container maxWidth='lg' sx={{ py: 8 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, color: 'text.title' }}>Our <Typography component={'span'} sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, background: 'linear-gradient(105.55deg, #085A6C -6.68%, #269089 43.13%, #7ABC82 96.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Team</Typography></Typography>
                            <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: 'text.secondarydefault', mt: 1 }}>Our team united by passion, driven by excellence.</Typography>
                        </Box>
                        <Box sx={{ mt: 6 }}>
                            <Grid container spacing={2}>
                                {
                                    Data.team.map((item, index) => (
                                        <Grid key={index} item xs={12} sm={6} md={4}>
                                            <Box sx={{ position: 'relative', width: 1, height: { xs: 325, md: 475 }, '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgb(0 0 0 / 0%) 35%, #000000 100%)' } }}>
                                                <Box component={"img"} src={item.image} sx={{ width: 1, height: 1, objectFit: 'cover', }}></Box>
                                                <Box sx={{ position: 'absolute', bottom: 25, textAlign: 'center', left: '50%', transform: 'translateX(-50%)', width: "calc(100% - 16px)", px: 1 }}>
                                                    <Typography sx={{ fontSize: "1.5rem", fontWeight: 700, color: 'text.default' }}>{item.name}</Typography>
                                                    <Typography sx={{ fontSize: 18, color: 'text.default', mt: .5 }}>{item.role}</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Box sx={{ mt: 8 }}>
                <Testimonials />
            </Box>
            <Box>
                <Subscribe />
            </Box>
        </Box >
    )
}

export default About