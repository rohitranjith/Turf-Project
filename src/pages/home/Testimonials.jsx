import React from 'react'
import { Box, Chip, Container, Paper, Rating, Typography, Grid } from '@mui/material'
import Data from '../../data/JsonData';

const Testimonials = () => {
    return (
        <Box sx={{ backgroundColor: 'background.light' }}>
            <Container maxWidth='lg' sx={{ py: 9 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, color: 'text.title' }}>Our <Typography component={'span'} sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, background: 'linear-gradient(105.55deg, #085A6C -6.68%, #269089 43.13%, #7ABC82 96.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Testimonials</Typography></Typography>
                    <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: 'text.secondarydefault', mt: 1 }}>Glowing testimonials from passionate badminton enthusiasts worldwide, showcasing our exceptional services.</Typography>
                </Box>
                <Box sx={{ mt: 5 }}>
                    <Grid container spacing={2}>
                        {
                            Data.testimonial.map((test, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <Box>
                                        <Paper sx={{ boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', p: 2, borderRadius: '10px', height: 1, }}>
                                            <Box sx={{ height: 1, }}>
                                                <Box>
                                                    <Rating name="read-only" value={test.rating_value} precision={0.5} readOnly />
                                                </Box>
                                                <Box sx={{ mt: 1.5 }}>
                                                    <Typography sx={{ fontSize: 18, fontWeight: 700, color: 'text.title' }}>{test.title}</Typography>
                                                </Box>
                                                <Typography sx={{ color: 'text.secondarydefault', mt: 1.5, fontSize: 15 }}>{test.description}</Typography>
                                            </Box>
                                        </Paper>
                                        <Box sx={{ mt: 3 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 1.5 }}>
                                                <Box sx={{ width: 60, height: 60, borderRadius: '50%', overflow: 'hidden', border: '3px solid #EAEDF0' }}>
                                                    <Box component={"img"} src={test.image} alt="" sx={{ width: '100%', height: 1, objectFit: 'cover', }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.title', fontSize: 18, fontWeight: 600, }}>{test.user_name}</Typography>
                                                    <Box sx={{ mt: .4 }}>
                                                        <Chip size='small' sx={{ fontWeight: 600, }} label={test.sports} color="primary" />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Testimonials