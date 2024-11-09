import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Paper, Stack, Typography, Grid } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../../components/TabPanel';
import bgImage from '../../assets/game-3.jpg'
import Data from '../../data/JsonData';
import Preloader from '../../components/Preloader';

const ServicesList = ({ list }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])

    return (
        <Box sx={{ mt: 4 }}>
            {
                loading ?
                    <Stack sx={{ minHeight: 400, justifyContent: 'center', }}>
                        <Preloader />
                    </Stack>
                    :
                    <Grid container spacing={2}>
                        {
                            list.map((item, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <Paper sx={{ boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', border: '1px solid #EAEDF0', borderRadius: '10px', height: 1, overflow: 'hidden', '&:hover img': { transform: 'scale(1)' } }}>
                                        <Box>
                                            <Box sx={{ width: '100%', height: '275px', overflow: 'hidden', position: 'relative' }}>
                                                <Box component={"img"} src={item.image} alt="" sx={{ width: '100%', height: 1, objectFit: 'cover', transition: '.4s', transform: 'scale(1.2)' }} />
                                            </Box>
                                            <Box sx={{ py: 2, px: 1.5, textAlign: 'center' }}>
                                                <Box sx={{ mt: 1 }}>
                                                    <Typography sx={{ fontSize: 20, fontWeight: 700, color: 'text.title' }}>{item.title}</Typography>
                                                    <Typography sx={{ fontSize: 15, color: 'text.secondarydefault', mt: 1.5 }}>{item.description}</Typography>
                                                </Box>
                                                <Box sx={{ mt: 2.5 }}>
                                                    <Button size="large" color="secondary">Read More</Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grid>
                            ))
                        }
                    </Grid>
            }
        </Box>
    )
}

const Services = () => {
    const [jobTab, setJobsTab] = useState(0);
    const handleUsersTab = (event, newValue) => {
        setJobsTab(newValue);
    };
    return (
        <Box>
            <Box sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', height: 225, backgroundSize: 'cover', backgroundPositionY: '80%', boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 30%)', position: 'relative' }}>
                <Container maxWidth='lg'>
                    <Box sx={{ px: { xs: 1, sm: 2, md: 0 }, position: 'absolute', top: '50%', transform: 'translateY(-50%)', }}>
                        <Box>
                            <Typography sx={{ fontSize: { xs: '2rem', sm: "2.8rem" }, fontWeight: 700, color: 'text.default' }}>Our Services</Typography>
                            <Typography sx={{ fontSize: { xs: 15, sm: 18, }, color: 'text.default', mt: 1 }}>Simplifying the booking process for venues, and athletes.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ py: 6 }}>
                <Container maxWidth='lg'>
                    <Box>
                        <Tabs sx={{ '& button': { px: 3, fontSize: 16 } }}
                            value={jobTab}
                            onChange={handleUsersTab}
                            variant="scrollable"
                            scrollButtons="auto">
                            <Tab label={"All Services"} sx={{ color: 'text.secondary' }} />
                            <Tab label={"Coaching"} sx={{ color: 'text.secondary' }} />
                            <Tab label={"Lessons"} sx={{ color: 'text.secondary' }} />
                        </Tabs>
                    </Box>
                    <Box sx={{ mt: 1 }}>
                        <TabPanel value={jobTab} index={0}>
                            <ServicesList list={Data.services} />
                        </TabPanel>
                        <TabPanel value={jobTab} index={1}>
                            <ServicesList list={Data.coaching} />
                        </TabPanel>
                        <TabPanel value={jobTab} index={2}>
                            <ServicesList list={Data.lesson} />
                        </TabPanel>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default Services