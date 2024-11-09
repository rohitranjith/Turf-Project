import { Box, Button, Paper, Typography, Container, Divider, Grid, Slide, DialogContent, Dialog } from '@mui/material'
import React, { useState } from 'react'
import bgImage from '../../assets/login-3.jpg'
import Logo from '../../assets/game-logo.png'
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui';
import { alertMsg } from '../../utils/basicUtils'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/reducers/auth-slice';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const initialUserValues = {
    "username": "",
    "password": "",
}
const initialSignUpValues = {
    "username": "",
    "password": "",
    "name": "",
}

const Login = () => {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const [userValues, setUserValues] = useState(initialUserValues)
    const [signUpValues, setSignUpValues] = useState(initialSignUpValues)


    const handleCreateUser = async (values, { setSubmitting, resetForm }) => {
        try {
            alertMsg('Login Successfully', 'success')
            dispatch(authActions.grantLoginAccess({
                accessToken: '',
                user: { ...values },
                isLoggedIn: true
            }));
            localStorage.clear()
            localStorage.setItem('isLoggedIn', "true")
            console.log(localStorage.setItem('isLoggedIn', "true"))
            setUserValues()
        } catch (err) {
            console.error(err)
        }
        console.log(values)
        resetForm()
        setSubmitting(false);
        navigate('/dashboard')
    }

    const handleSubmitUser = async (values, { setSubmitting, resetForm }) => {
        try {
            alertMsg('Registered Successfully', 'success')
            setSignUpValues()
        } catch (err) {
            console.error(err)
        }
        console.log(values)
        resetForm()
        setSubmitting(false);
        navigate('/accounts/login')
    }

    return (
        <Box>
            <Box sx={{ minHeight: "100vh", maxHeight: '100vh', display: "flex", alignItems: "center", backgroundColor: 'background.light' }}>
                <Container maxWidth="lg">
                    <Paper sx={{ p: 2, minHeight: { xs: 'auto', sm: '75vh' }, boxShadow: 'none', }}>
                        <Grid container spacing={6} sx={{ alignItems: "center", }}>
                            <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Box sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', height: { xs: 'auto', sm: '75vh' }, backgroundSize: 'cover', boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 15%)', position: 'relative', borderRadius: '80px 0px 80px 0px', backgroundPosition: 'bottom' }}>
                                    <Box sx={{ px: { xs: 1, sm: 2, md: 4 }, position: 'absolute', bottom: 40, left: 0, }}>
                                        <Box>
                                            <Typography sx={{ fontSize: { xs: '1.8rem', sm: "2.2rem" }, fontWeight: 600, color: 'text.default' }}>Champion Field</Typography>
                                            <Typography sx={{ fontSize: { xs: 15, sm: 18, }, color: 'text.default', mt: 1 }}>Log in right away for our advanced sports software solutions, created to address issues in regular sporting events and activities.</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Box>
                                    <Box onClick={() => { navigate('/') }} component={'img'} src={Logo} sx={{ cursor: 'pointer' }} alt="" />
                                </Box>
                                <Box sx={{ mt: .5 }}>
                                    <Typography sx={{ fontSize: { xs: "1.7rem", sm: "1.8rem", }, fontWeight: 700, color: '#000' }}>Create an account</Typography>
                                </Box>
                                <Box sx={{ mt: .5 }}>
                                    <Typography sx={{ fontSize: { xs: 16, sm: 18 }, color: "#838383", fontWeight: 400 }}>Login into your account</Typography>
                                </Box>
                                <Box sx={{ mt: 4, width: { xs: '100%', md: '92%' } }}>
                                    <Formik
                                        initialValues={userValues}
                                        onSubmit={handleCreateUser}
                                        validationSchema={
                                            Yup.object({
                                                username: Yup.string()
                                                    .email('Invalid email address')
                                                    .required('Email is required'),
                                                password: Yup.string()
                                                    .required('Password is required')
                                                    .min(6, "Must be at least 6 characters")
                                                    .max(100, "Password maximum 100 characters only Allowed"),
                                            })
                                        }
                                    >
                                        {({ isSubmitting }) => (
                                            <Form>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Box>
                                                        <Grid container spacing={{ xs: 2, sm: 3 }}>
                                                            <Grid item xs={12} >
                                                                <Box>
                                                                    <Field
                                                                        component={TextField}
                                                                        size="large"
                                                                        type='email'
                                                                        name="username"
                                                                        label="Email / Username"
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
                                                                        name="password"
                                                                        type="text"
                                                                        label="Password"
                                                                        inputProps={{ maxLength: 35 }}
                                                                        autoComplete="off"
                                                                        fullWidth />
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                                                        <Button type="submit" size='large' disabled={isSubmitting} variant="contained">Sign In</Button>
                                                    </Box>
                                                </Box>
                                            </Form>
                                        )}
                                    </Formik>
                                    <Box>
                                        <Divider sx={{ my: 4, color: 'text.secondarydefault' }}>Continue with</Divider>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, }}>
                                            <Box>
                                                <Button size='medium' variant='outlined' color='warning' startIcon={<GoogleIcon />}>Google</Button>
                                            </Box>
                                            <Box>
                                                <Button size='medium' variant='outlined' color='info' startIcon={<FacebookOutlinedIcon />}>Facebook</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography variant="body1" sx={{ mt: 4, textAlign: "center", "& span": { cursor: "pointer", color: 'primary.main' }, color: 'text.title' }}>Don't have an account? <Typography onClick={() => (setOpen(true))} sx={{ textDecoration: 'underline' }} component={'span'}>Sign up</Typography></Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={() => setOpen(false)}
                keepMounted
                PaperProps={{
                    sx: { maxWidth: { xs: '100%', sm: "500px" }, width: '100%', m: 2 }
                }}>
                <DialogContent sx={{ textAlign: 'center', px: 2 }}>
                    <Box>
                        <Box onClick={() => { navigate('/') }} component={'img'} src={Logo} sx={{ cursor: 'pointer' }} alt="" />
                    </Box>
                    <Box sx={{ mt: .5 }}>
                        <Typography sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", }, fontWeight: 600, color: '#000' }}>Sign up your account</Typography>
                    </Box>
                    <Box sx={{ mt: .5 }}>
                        <Typography sx={{ fontSize: { xs: 16, sm: 18 }, color: "#838383", fontWeight: 400 }}>Login into your account</Typography>
                    </Box>
                    <Box sx={{ mt: 4, }}>
                        <Formik
                            initialValues={signUpValues}
                            onSubmit={handleSubmitUser}
                            validationSchema={
                                Yup.object({
                                    username: Yup.string()
                                        .email('Invalid email address')
                                        .required('Email is required'),
                                    password: Yup.string()
                                        .required('Password is required')
                                        .min(6, "Must be at least 6 characters")
                                        .max(100, "Password maximum 100 characters only Allowed"),
                                    name: Yup.string()
                                        .required('Name is required')
                                        .min(6, "Must be at least 3 characters")
                                        .max(100, "Password maximum 100 characters only Allowed"),
                                })
                            }
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Box>
                                            <Grid container spacing={{ xs: 2, sm: 3 }}>
                                                <Grid item xs={12} >
                                                    <Box>
                                                        <Field
                                                            component={TextField}
                                                            size="large"
                                                            type='text'
                                                            name="name"
                                                            label="Name"
                                                            autoComplete="off"
                                                            inputProps={{ maxLength: 35 }}
                                                            fullWidth />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <Box>
                                                        <Field
                                                            component={TextField}
                                                            size="large"
                                                            type='email'
                                                            name="username"
                                                            label="Email / Username"
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
                                                            name="password"
                                                            type="text"
                                                            label="Password"
                                                            inputProps={{ maxLength: 35 }}
                                                            autoComplete="off"
                                                            fullWidth />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box sx={{ mt: 3, textAlign: 'center' }}>
                                            <Button type="submit" size='large' disabled={isSubmitting} variant="contained">Sign Up</Button>
                                        </Box>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                        <Box>
                            <Divider sx={{ my: 4, color: 'text.secondarydefault' }}>Continue with</Divider>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, }}>
                                <Box>
                                    <Button size='medium' variant='outlined' color='warning' startIcon={<GoogleIcon />}>Google</Button>
                                </Box>
                                <Box>
                                    <Button size='medium' variant='outlined' color='info' startIcon={<FacebookOutlinedIcon />}>Facebook</Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body1" sx={{ mt: 4, textAlign: "center", "& span": { cursor: "pointer", color: 'primary.main' }, color: 'text.title' }}>Already have an account? <Typography onClick={() => (setOpen(false))} sx={{ textDecoration: 'underline' }} component={'span'}>Sign in</Typography></Typography>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    )
}

export default Login