import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import bannerImage from '../../assets/game-8.jpg'
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const BannerSchedule = () => {
    return (
        <Box sx={{ py: 8 }}>
            <Box sx={{ backgroundImage: `url(${bannerImage})`, backgroundRepeat: 'no-repeat', minHeight: '45vh ', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 60%)', alignBoth: 'center' }}>
                <Container maxWidth='lg' sx={{ py: 9 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, color: '#fff' }}>Convenient & Flexible Scheduling</Typography>
                        <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: '#fff', mt: 1, maxWidth: 700, mx: 'auto' }}>Find and book coaches conveniently with our online system that matches your schedule and location.</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 3, mt: 5 }}>
                            <Box>
                                <Button size='large' endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}>Book Your Slot</Button>
                            </Box>
                            <Box>
                                <Button size='large' color='secondary' endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}>View Pricing Plan</Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default BannerSchedule