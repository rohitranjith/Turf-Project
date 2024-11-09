import { Box, Container, Paper, Typography, Grid, Button } from '@mui/material'
import React, { useState } from 'react'
import bgImage from '../../assets/game-3.jpg'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { alertMsg } from '../../utils/basicUtils';

const initialUserValues = {
    "name": "",
    "email": "",
    "phone_number": "",
    "subject": "",
    "message": "",
}

const Contact = () => {

    const [userValues, setUserValues] = useState(initialUserValues)
    const handleCreateUser = async (values, { setSubmitting, resetForm }) => {
        try {
            // const response = await axios.post('users/create/', { ...values, location_id: locationId })
            alertMsg("Details Saved Successfully", 'success')
            setUserValues()

        } catch (err) {
            console.error(err)
        }
        console.log(values)
        resetForm()
        setSubmitting(false);
    }


    return (
        <Box>
            <Box sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', height: 225, backgroundSize: 'cover', backgroundPositionY: '80%', boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 30%)', position: 'relative' }}>
                <Container maxWidth='lg'>
                    <Box sx={{ px: { xs: 1, sm: 2, md: 0 }, position: 'absolute', top: '50%', transform: 'translateY(-50%)', }}>
                        <Box>
                            <Typography sx={{ fontSize: { xs: '2rem', sm: "2.8rem" }, fontWeight: 700, color: 'text.default' }}>Contact Us</Typography>
                            <Typography sx={{ fontSize: { xs: 15, sm: 18, }, color: 'text.default', mt: 1 }}>Simplifying the booking process for venues, and athletes.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container maxWidth='lg' sx={{ py: 6 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, color: 'text.title' }}>Contact <Typography component={'span'} sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, background: 'linear-gradient(105.55deg, #085A6C -6.68%, #269089 43.13%, #7ABC82 96.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Information</Typography></Typography>
                        <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: 'text.secondarydefault', mt: 1 }}>Simplifying the booking process for venues, and athletes.</Typography>
                    </Box>
                    <Box sx={{ mt: 6 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Paper sx={{ p: { xs: 1.5, md: 2 }, boxShadow: '0px 0px 6px 0px rgb(212 212 212 / 44%)', borderRadius: '10px', height: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: { xs: 1.4, sm: 2 }, height: 1, '&:hover .icon-bg': { background: 'linear-gradient(105.55deg, #7ABC82 -6.68%, #269089 43.13%, #085A6C 96.15%)' } }}>
                                        <Box className="icon-bg" sx={{ alignBoth: 'center', minWidth: { xs: 60, sm: 75 }, width: { xs: 60, sm: 75 }, height: { xs: 60, sm: 75 }, borderRadius: '10px', background: 'linear-gradient(93.86deg, #006177 -2.6%, #269089 67.39%, #7ABC82 110.84%)' }}>
                                            <MailOutlinedIcon sx={{ color: 'text.default', fontSize: { xs: 35, sm: 40 } }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: { xs: 20, sm: 22 }, fontWeight: 600, color: 'text.title' }}>Email Address</Typography>
                                            <Typography component={'a'} href='mailto:championfield@gmail.com' sx={{ fontSize: { xs: 14, sm: 16 }, maxLines: 1, color: 'text.secondarydefault', textDecoration: 'none' }}>championfield@gmail.com</Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Paper sx={{ p: { xs: 1.5, md: 2 }, boxShadow: '0px 0px 6px 0px rgb(212 212 212 / 44%)', borderRadius: '10px', height: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: { xs: 1.4, sm: 2 }, height: 1, '&:hover .icon-bg': { background: 'linear-gradient(105.55deg, #7ABC82 -6.68%, #269089 43.13%, #085A6C 96.15%)' } }}>
                                        <Box className="icon-bg" sx={{ alignBoth: 'center', minWidth: { xs: 60, sm: 75 }, width: { xs: 60, sm: 75 }, height: { xs: 60, sm: 75 }, borderRadius: '10px', background: 'linear-gradient(93.86deg, #006177 -2.6%, #269089 67.39%, #7ABC82 110.84%)' }}>
                                            <LocalPhoneOutlinedIcon sx={{ color: 'text.default', fontSize: { xs: 35, sm: 40 } }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: { xs: 20, sm: 22 }, fontWeight: 600, color: 'text.title' }}>Phone Number</Typography>
                                            <Typography component={'a'} href='tel:9895969291' sx={{ fontSize: { xs: 14, sm: 16 }, color: 'text.secondarydefault', textDecoration: 'none', maxLines: 1 }}>+91 989 596 9291</Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Paper sx={{ p: { xs: 1.5, md: 2 }, boxShadow: '0px 0px 6px 0px rgb(212 212 212 / 44%)', borderRadius: '10px', height: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: { xs: 1.4, sm: 2 }, height: 1, '&:hover .icon-bg': { background: 'linear-gradient(105.55deg, #7ABC82 -6.68%, #269089 43.13%, #085A6C 96.15%)' } }}>
                                        <Box className="icon-bg" sx={{ alignBoth: 'center', minWidth: { xs: 60, sm: 75 }, width: { xs: 60, sm: 75 }, height: { xs: 60, sm: 75 }, borderRadius: '10px', background: 'linear-gradient(93.86deg, #006177 -2.6%, #269089 67.39%, #7ABC82 110.84%)' }}>
                                            <FmdGoodOutlinedIcon sx={{ color: 'text.default', fontSize: { xs: 35, sm: 40 } }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: { xs: 20, sm: 22 }, fontWeight: 600, color: 'text.title' }}>Location</Typography>
                                            <Typography sx={{ fontSize: { xs: 14, sm: 16 }, color: 'text.secondarydefault', maxLines: 1 }}>3360 Central Avenue Teterboro</Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Box component={"iframe"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.70720786863!2d150.60233944089455!3d-33.8472349479349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sin!4v1729687746900!5m2!1sen!2sin" sx={{ border: 0, width: 1, height: 450 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ backgroundColor: 'background.light' }}>
                <Container maxWidth='lg' sx={{ py: 8 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: { xs: '2rem', sm: "2.5rem" }, fontWeight: 700, color: 'text.title' }}>Reach out to us and let's smash your inquiries</Typography>
                        <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: 'text.secondarydefault', mt: 1 }}>Simplifying the booking process for venues, and athletes.</Typography>
                    </Box>
                    <Box sx={{ mt: 4 }}>
                        <Paper sx={{ boxShadow: '0px 4px 24px rgba(212, 212, 212, 0.25)', borderRadius: '4px', p: { xs: 2, sm: 3 } }}>
                            <Formik
                                initialValues={userValues}
                                onSubmit={handleCreateUser}
                                validationSchema={
                                    Yup.object({
                                        name: Yup.string()
                                            .required('Name is required'),
                                        email: Yup.string()
                                            .email('Invalid email address')
                                            .required('Email is required'),
                                        phone_number: Yup.string()
                                            .required('Phone Number is required'),
                                        subject: Yup.string()
                                            .required('Subject is required'),
                                        message: Yup.string()
                                            .required('Message is required'),
                                    })
                                }>
                                {({ isSubmitting }) => (
                                    <Form>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Box>
                                                <Grid container spacing={{ xs: 2, sm: 3 }}>
                                                    <Grid item xs={12} sm={6}>
                                                        <Box>
                                                            <Field
                                                                component={TextField}
                                                                size="large"
                                                                name="name"
                                                                label="Name"
                                                                inputProps={{ maxLength: 35 }}
                                                                autoComplete="off"
                                                                fullWidth />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} >
                                                        <Box>
                                                            <Field
                                                                component={TextField}
                                                                size="large"
                                                                name="email"
                                                                label="Email"
                                                                autoComplete="off"
                                                                inputProps={{ maxLength: 35 }}
                                                                fullWidth />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <Box>
                                                            <Field
                                                                component={TextField}
                                                                size="large"
                                                                name="phone_number"
                                                                label="Phone Number"
                                                                autoComplete="off"
                                                                inputProps={{ maxLength: 35 }}
                                                                fullWidth />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <Box>
                                                            <Field
                                                                component={TextField}
                                                                size="large"
                                                                name="subject"
                                                                label="Subject"
                                                                autoComplete="off"
                                                                inputProps={{ maxLength: 35 }}
                                                                fullWidth />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box>
                                                            <Field
                                                                component={TextField}
                                                                size="large"
                                                                name="message"
                                                                multiline
                                                                rows={4}
                                                                label="Message"
                                                                autoComplete="off"
                                                                inputProps={{ maxLength: 35 }}
                                                                fullWidth />
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box sx={{ mt: 3, textAlign: 'center' }}>
                                                <Button type="submit" size='large' endIcon={<ArrowCircleRightOutlinedIcon sx={{ fontSize: '20px !important' }} />} disabled={isSubmitting} variant="contained">Submit</Button>
                                            </Box>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                        </Paper>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default Contact