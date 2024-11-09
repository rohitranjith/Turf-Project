
import { Box, Button, Container, Typography, Grid } from '@mui/material'
import bgImage from '../../assets/game-3.jpg'
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import Data from '../../data/JsonData';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Pricing = () => {
    return (
        <Box>
            <Box sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', height: 225, backgroundSize: 'cover', backgroundPositionY: '80%', boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 30%)', position: 'relative' }}>
                <Container maxWidth='lg'>
                    <Box sx={{ px: { xs: 1, sm: 2, md: 0 }, position: 'absolute', top: '50%', transform: 'translateY(-50%)', }}>
                        <Box>
                            <Typography sx={{ fontSize: { xs: '2rem', sm: "2.8rem" }, fontWeight: 700, color: 'text.default' }}>Pricing</Typography>
                            <Typography sx={{ fontSize: { xs: 15, sm: 18, }, color: 'text.default', mt: 1 }}>Simplifying the booking process for venues, and athletes.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ py: 6 }}>
                <Container maxWidth='lg'>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, }}>We Have Excellent Plans For You.</Typography>
                        <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: 'text.secondarydefault', mt: 1 }}>Choose monthly or yearly plans for uninterrupted access to our premium badminton facilities. Join us and experience convenient excellence.</Typography>
                    </Box>
                    <Box sx={{ mt: 4 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', border: '1px solid #EAEDF0', borderRadius: '20px', overflow: 'hidden' }}>
                                    <Box sx={{ backgroundColor: 'background.footer', px: 1, py: 4 }}>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <LocalPoliceOutlinedIcon sx={{ color: 'text.default', fontSize: 40 }} />
                                            <Box>
                                                <Typography sx={{ fontSize: "1.5rem", fontWeight: 700, color: 'text.default' }}>Professoinal</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ p: 2, textAlign: 'center', }}>
                                        <Typography component={'span'} sx={{ fontSize: { xs: '1.5rem', sm: "1.8rem" }, fontWeight: 800, background: 'linear-gradient(105.55deg, #085A6C -6.68%, #269089 43.13%, #7ABC82 96.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$30.00</Typography>
                                        <Box>
                                            <Typography sx={{ fontSize: 15, color: 'text.secondarydefault', mt: 1, fontWeight: 600 }}>Per Month</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ p: { xs: 1.2, sm: 2 }, borderTop: '1px solid #EAEDF0' }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "1.2rem", fontWeight: 700, }}>Features</Typography>
                                            <Typography sx={{ fontSize: 16, color: 'text.secondarydefault', }}>Everything in our free Upto 10 users.</Typography>
                                        </Box>
                                        {
                                            Data.professional.map((item, index) => (
                                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>
                                                    <Box sx={{ height: 18 }}>
                                                        {
                                                            item.status === 1 ?
                                                                <TaskAltOutlinedIcon color='success' sx={{ fontSize: 18 }} />
                                                                :
                                                                <CancelOutlinedIcon color='error' sx={{ fontSize: 18 }} />
                                                        }
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ fontSize: 15, color: 'text.secondarydefault', lineHeight: 'normal' }}>{item.description}</Typography>
                                                    </Box>
                                                </Box>
                                            ))
                                        }
                                        <Box sx={{ mt: 4 }}>
                                            <Button size='large' fullWidth variant='outlined' color='secondary'>Choose Plan</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', border: '1px solid #EAEDF0', borderRadius: '20px', overflow: 'hidden' }}>
                                    <Box sx={{ backgroundColor: 'background.primary', px: 1, py: 4 }}>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <EmojiEventsOutlinedIcon sx={{ color: 'text.default', fontSize: 40 }} />
                                            <Box>
                                                <Typography sx={{ fontSize: "1.5rem", fontWeight: 700, color: 'text.default' }}>Expert</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ py: 2, px: 1, textAlign: 'center' }}>
                                        <Typography component={'span'} sx={{ fontSize: { xs: '1.5rem', sm: "1.8rem" }, fontWeight: 800, background: 'linear-gradient(105.55deg, #085A6C -6.68%, #269089 43.13%, #7ABC82 96.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$60.00</Typography>
                                        <Box>
                                            <Typography sx={{ fontSize: 15, color: 'text.secondarydefault', mt: 1, fontWeight: 600 }}>Per Month</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ p: { xs: 1.2, sm: 2 }, borderTop: '1px solid #EAEDF0' }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "1.2rem", fontWeight: 700, }}>Features</Typography>
                                            <Typography sx={{ fontSize: 16, color: 'text.secondarydefault', }}>Everything in our free Upto 10 users.</Typography>
                                        </Box>
                                        {
                                            Data.professional.map((item, index) => (
                                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>
                                                    <Box sx={{ height: 18 }}>
                                                        {
                                                            item.status === 1 ?
                                                                <TaskAltOutlinedIcon color='success' sx={{ fontSize: 18 }} />
                                                                :
                                                                <CancelOutlinedIcon color='error' sx={{ fontSize: 18 }} />
                                                        }
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ fontSize: 15, color: 'text.secondarydefault', lineHeight: 'normal' }}>{item.description}</Typography>
                                                    </Box>
                                                </Box>
                                            ))
                                        }
                                        <Box sx={{ mt: 4 }}>
                                            <Button size='large' fullWidth>Choose Plan</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', border: '1px solid #EAEDF0', borderRadius: '20px', overflow: 'hidden' }}>
                                    <Box sx={{ backgroundColor: 'background.footer', px: 1, py: 4 }}>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <RocketOutlinedIcon sx={{ color: 'text.default', fontSize: 40 }} />
                                            <Box>
                                                <Typography sx={{ fontSize: "1.5rem", fontWeight: 700, color: 'text.default' }}>Enterprise</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ py: 2, px: 1, textAlign: 'center' }}>
                                        <Typography component={'span'} sx={{ fontSize: { xs: '1.5rem', sm: "1.8rem" }, fontWeight: 800, background: 'linear-gradient(105.55deg, #085A6C -6.68%, #269089 43.13%, #7ABC82 96.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$100.00</Typography>
                                        <Box>
                                            <Typography sx={{ fontSize: 15, color: 'text.secondarydefault', mt: 1, fontWeight: 600 }}>Per Month</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ p: { xs: 1.2, sm: 2 }, borderTop: '1px solid #EAEDF0' }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "1.2rem", fontWeight: 700, }}>Features</Typography>
                                            <Typography sx={{ fontSize: 16, color: 'text.secondarydefault', }}>Everything in our free Upto 10 users.</Typography>
                                        </Box>
                                        {
                                            Data.professional.map((item, index) => (
                                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>
                                                    <Box sx={{ height: 18 }}>
                                                        <TaskAltOutlinedIcon color='success' sx={{ fontSize: 18 }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ fontSize: 15, color: 'text.secondarydefault', lineHeight: 'normal' }}>{item.description}</Typography>
                                                    </Box>
                                                </Box>
                                            ))
                                        }
                                        <Box sx={{ mt: 4 }}>
                                            <Button size='large' fullWidth variant='outlined' color='secondary'>Choose Plan</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box >
        </Box >
    )
}

export default Pricing