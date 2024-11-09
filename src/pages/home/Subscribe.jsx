import React from 'react'
import { Box, Button, Container, InputAdornment, TextField, Typography, Grid } from '@mui/material'
import subscribe from '../../assets/game-12.jpg'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Subscribe = () => {
    return (
        <Box>
            <Container maxWidth='lg' sx={{ py: 9 }}>
                <Box sx={{ background: 'linear-gradient(93.86deg, #006177 -2.6%, #269089 67.39%, #7ABC82 110.84%)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box sx={{ height: 1 }}>
                                <Box sx={{ backgroundImage: `url(${subscribe})`, backgroundRepeat: 'no-repeat', height: { xs: 300, md: 425 }, backgroundSize: 'cover' }}></Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box sx={{ height: 1, display: { xs: 'block', md: 'flex' }, justifyContent: 'center', flexDirection: 'column', py: { xs: 3, md: 0 }, px: { xs: 2, sm: 4, lg: 6 } }}>
                                <Box sx={{ height: 35 }}>
                                    <EmailOutlinedIcon sx={{ color: '#fff', fontSize: { xs: 25, md: 35 } }} />
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Typography sx={{ fontSize: { xs: '1.5rem', sm: "2.2rem" }, fontWeight: 700, color: 'text.default' }}>Subscribe to Newsletter</Typography>
                                    <Typography sx={{ fontSize: { xs: 14, md: 16 }, color: 'text.default' }}>Just for you, exciting badminton news updates.</Typography>
                                </Box>
                                <Box sx={{ mt: { xs: 3, md: 4 }, position: 'relative' }}>
                                    <Box sx={{ mb: { xs: 2, md: 0 } }}>
                                        <TextField
                                            placeholder='Enter Email Address'
                                            sx={{ width: { xs: 'calc(100% - 16px)', md: 'calc(100% - 32px)' }, backgroundColor: '#fff', borderRadius: '10px', pl: { xs: 1, md: 2 }, pr: { xs: 1, md: 2 }, '& fieldset': { border: 'none', }, '& input': { minHeight: { xs: 22, md: 38 }, color: '#000', fontSize: 16 } }}
                                            size='large'
                                            slotProps={{
                                                input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <EmailOutlinedIcon sx={{ fontSize: 18 }} />
                                                        </InputAdornment>
                                                    ),
                                                },
                                            }}
                                            variant="outlined"
                                        />
                                    </Box>
                                    <Box sx={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)' }}>
                                        <Box>
                                            <Button size='large' >Subscribe</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Subscribe