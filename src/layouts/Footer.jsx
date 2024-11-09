import React from 'react'
import { Box, Button, Container, Typography, Grid } from '@mui/material'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const Footer = () => {
    return (
        <footer >
            <Box sx={{ backgroundColor: 'background.footer', pt: 6, pb: 3 }}>
                <Container maxWidth='lg'>
                    <Box sx={{ textAlign: 'center', mb: { xs: 5, sm: 8 } }}>
                        <Typography sx={{ fontSize: { xs: '1.5rem', sm: "2rem" }, fontWeight: 700, color: 'text.default' }}>We Welcome Your Passion And Expertise</Typography>
                        <Typography sx={{ fontSize: { xs: 16, sm: 18 }, color: 'text.secondarydefault', mt: 1, maxWidth: 800, mx: 'auto' }}>Join our empowering sports community today and grow with us.</Typography>
                        <Box sx={{ mt: 3 }}>
                            <Button size='large' startIcon={<PersonAddAltOutlinedIcon />}>Join With Us</Button>
                        </Box>
                    </Box>
                    <Box sx={{ borderTop: '1px solid #1D3563' }}>
                        <Box sx={{ pt: { xs: 3, sm: 5 } }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={3} >
                                    <Box sx={{ textAlign: { xs: 'center', sm: "left" } }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "1.4rem", fontWeight: 600, color: 'text.default' }}>Contact us</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2.5 }}>
                                            <Typography sx={{ fontSize: 15, color: 'text.secondarydefault', mt: 1, maxWidth: 800, mx: 'auto' }}>Toll free Customer Care</Typography>
                                            <Typography component={'a'} href='tel:9895969291' sx={{ fontSize: "1rem", color: 'text.default', textDecoration: 'none' }}>+91 989 596 9291</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2.5 }}>
                                            <Typography sx={{ fontSize: 15, color: 'text.secondarydefault', mt: 1, maxWidth: 800, mx: 'auto' }}>Email</Typography>
                                            <Typography component={'a'} href='mailto:championfield@gmail.com' sx={{ fontSize: "1rem", color: 'text.default', textDecoration: 'none' }}>championfield@gmail.com</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Box sx={{ textAlign: { xs: 'center', sm: "left" }, mt: { xs: 2, sm: 0 } }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "1.4rem", fontWeight: 600, color: 'text.default' }}>Quick Links</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography component={'a'} href='/about-us' sx={{ fontSize: "1rem", color: 'text.secondarydefault', textDecoration: 'none' }}>About Us</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography component={'a'} href='/services' sx={{ fontSize: "1rem", color: 'text.secondarydefault', textDecoration: 'none' }}>Services</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography component={'a'} href='/event' sx={{ fontSize: "1rem", color: 'text.secondarydefault', textDecoration: 'none' }}>Events</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography component={'a'} href='/contact-us' sx={{ fontSize: "1rem", color: 'text.secondarydefault', textDecoration: 'none' }}>Contact Us</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Box sx={{ textAlign: { xs: 'center', sm: "left" }, mt: { xs: 2, sm: 0 } }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "1.4rem", fontWeight: 600, color: 'text.default' }}>Support</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography component={'a'} href='/support/faq' sx={{ fontSize: "1rem", color: 'text.secondarydefault', textDecoration: 'none' }}>Faq</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography component={'a'} href='/support/privacy-policy' sx={{ fontSize: "1rem", color: 'text.secondarydefault', textDecoration: 'none' }}>Privacy Policy</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography component={'a'} href='/support/terms-conditions' sx={{ fontSize: "1rem", color: 'text.secondarydefault', textDecoration: 'none' }}>Terms & Conditions</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography component={'a'} href='/support/pricing' sx={{ fontSize: "1rem", color: 'text.secondarydefault', textDecoration: 'none' }}>Pricing</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Box sx={{ textAlign: { xs: 'center', sm: "left" }, mt: { xs: 2, sm: 0 } }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "1.4rem", fontWeight: 600, color: 'text.default' }}>Other Links</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography component={'a'} href='/other/sports-venue' sx={{ fontSize: "1rem", color: 'text.secondarydefault', textDecoration: 'none' }}>Sports Venue</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography component={'a'} href='#' sx={{ fontSize: "1rem", color: 'text.secondarydefault', textDecoration: 'none' }}>My Account</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
                <Box sx={{ borderTop: '1px solid #1D3563', mt: 5, textAlign: 'center', pt: 3, px: { xs: 1, sm: 2 } }}>
                    <Typography sx={{ color: 'text.secondarydefault', fontSize: 15, }}>Copyright © 2024 Champion's Field. Privacy Policy. All Rights Reserved.</Typography>
                </Box>
            </Box >
        </footer >
    )
}
export default Footer;
