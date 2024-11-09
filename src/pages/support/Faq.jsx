import React, { useState } from 'react'
import { Box, Container, Paper, Typography, Grid } from '@mui/material'
import Data from '../../data/JsonData';
import bgImage from '../../assets/game-3.jpg'
import faqImage from '../../assets/game-6.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box>
            <Box sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', height: 225, backgroundSize: 'cover', backgroundPositionY: '80%', boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 30%)', position: 'relative' }}>
                <Container maxWidth='lg'>
                    <Box sx={{ px: { xs: 1, sm: 2, md: 0 }, position: 'absolute', top: '50%', transform: 'translateY(-50%)', }}>
                        <Box>
                            <Typography sx={{ fontSize: { xs: '2rem', sm: "2.8rem" }, fontWeight: 700, color: 'text.default' }}>Faq</Typography>
                            <Typography sx={{ fontSize: { xs: 15, sm: 18, }, color: 'text.default', mt: 1 }}>Simplifying the booking process for venues, and athletes.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ backgroundColor: 'background.light' }}>
                <Container maxWidth='lg' sx={{ py: 9 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, color: 'text.title' }}>Extra Benefits, Unmatched <Typography component={'span'} sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, background: 'linear-gradient(105.55deg, #085A6C -6.68%, #269089 43.13%, #7ABC82 96.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Service Excellence</Typography></Typography>
                        <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: 'text.secondarydefault', mt: 1 }}>Advance your badminton journey with DreamSports: Exclusive perks, exceptional service.</Typography>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={5.5}>
                                <Paper sx={{ boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', p: 1, borderRadius: '10px', }}>
                                    <Box sx={{ width: 1, height: { xs: 'auto', md: 430 } }}>
                                        <Box component={"img"} src={faqImage} sx={{ width: 1, height: 1, objectFit: 'cover', borderRadius: '6px' }}></Box>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6.5}>
                                <Box>
                                    <Typography sx={{ fontSize: { xs: '1rem', sm: "1.5rem" }, fontWeight: 700, color: 'text.title' }}>Frequently Asked Questions</Typography>
                                    <Typography sx={{ fontSize: 16, color: 'text.secondarydefault', mt: 1 }}>Here are some frequently asked questions about Turf amd Venues at Champion's Field:</Typography>
                                    <Paper sx={{ boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', borderRadius: '10px', mt: 1.5 }}>
                                        <Box>
                                            {
                                                Data.faq.map((item, index) => (
                                                    <Accordion key={index} expanded={expanded === item.id} onChange={handleChange(item.id)}>
                                                        <AccordionSummary
                                                            sx={{ color: 'text.title', fontWeight: 600, py: 1, '& .Mui-expanded': { m: 0 } }}
                                                            expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#FAFAFA', borderRadius: '50%' }} />}>
                                                            {item.title}
                                                        </AccordionSummary>
                                                        <AccordionDetails sx={{ color: 'text.secondarydefault' }}>
                                                            {item.description}
                                                        </AccordionDetails>
                                                    </Accordion>
                                                ))
                                            }
                                        </Box>
                                    </Paper>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container >
            </Box>
        </Box>
    )
}

export default Faq