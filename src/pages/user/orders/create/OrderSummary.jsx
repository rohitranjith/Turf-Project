import React, { useState } from 'react'
import { Box, useTheme, InputAdornment, Typography, Button, Grid, Paper, Avatar, TextField as MuiTextField, CircularProgress, Dialog, DialogContent, Slide } from '@mui/material'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CurrencyRubleOutlinedIcon from '@mui/icons-material/CurrencyRubleOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Field, Formik, Form } from 'formik';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import { alertMsg } from "../../../../utils/basicUtils";
import Turf from '../../../../assets/game-13.jpg'
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import { TextField, CheckboxWithLabel } from 'formik-mui';
import { orderActions } from '../../../../redux/reducers/order-slice';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const OrderSummary = ({ handlePrevStep }) => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    const [open, setOpen] = useState(false);

    const paymentValues = {
        holder_name: '',
        card_number: '',
        expire_date: '',
        cvv: "",
        card: true,
    }

    const submitOrder = async () => {
        try {
            dispatch(orderActions.resetOrder())
            navigate('/orders')
        }
        catch (error) {
            console.error(error)
        }
        setLoader(false)
    }


    return (
        <Box sx={{ width: "100%", mt: { xs: 3, sm: 0 } }} className={'cs-popup'}>
            <Box className="step-header">
                <Box>
                    <Typography variant="h5" sx={{ fontSize: 18, color: 'text.custom' }}>Order Summary</Typography>
                    <Typography variant={'body2'} sx={{ fontSize: 15, mt: .5 }}>Please enter your address below. If the property is at an apartment or unit, please make sure to note which one. </Typography>
                </Box>
            </Box>
            <Box className="step-content scroll-bar">
                <Box sx={{ mb: 1.5 }}>
                    <Paper elevation={0} sx={{ p: 1.5, borderRadius: "10px", mb: 1, boxShadow: 'none', backgroundColor: 'background.light' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                            <Box>
                                <Box component={'img'} src={Turf} sx={{ width: 150, height: 150, objectFit: 'cover', borderRadius: 1 }}></Box>
                            </Box>
                            <Box>
                                <Box>
                                    <Typography sx={{ fontSize: { xs: 24, sm: 26 }, fontWeight: 600, color: "text.custom", lineHeight: 'normal' }}>Manchester Academy</Typography>
                                    <Typography sx={{ fontSize: { xs: 15, sm: 16 }, lineHeight: 'normal', mt: .8 }}>Manchester Academy: Where dreams meet excellence in sports education and training.</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1.5 }}>
                                        <Box sx={{ height: 20 }}>
                                            <SportsBaseballOutlinedIcon sx={{ fontSize: 20 }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: { xs: 15, sm: 16 }, lineHeight: 'normal' }}>Standard Synthetic Court 1</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1.2 }}>
                                        <Box sx={{ height: 20 }}>
                                            <AccessTimeOutlinedIcon sx={{ fontSize: 20 }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: { xs: 15, sm: 15 }, lineHeight: 'normal' }}>01:00 PM to 03:00 PM</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={0} sx={{ p: 1.5, borderRadius: "10px", mb: 1, boxShadow: 'none', border: '1px solid #d0d0d04d' }}>
                            <Box sx={{ mb: 1.5 }}>
                                <Typography variant="h5" sx={{ fontSize: 18, color: "text.custom" }}>Booking Information</Typography>
                            </Box>
                            <Box>
                                <Paper elevation={0} sx={{ py: 1, borderRadius: "5px", boxShadow: 'none', }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 45, height: 45, borderRadius: 1, backgroundColor: 'background.light' }}>
                                                    <CorporateFareOutlinedIcon sx={{ color: 'primary.main' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: { xs: 15, sm: 16 } }}>Slot Price : ₹400.00</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 45, height: 45, borderRadius: 1, backgroundColor: 'background.light' }}>
                                                    <DiscountOutlinedIcon sx={{ color: 'primary.main' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: { xs: 15, sm: 16 } }}>Offer Discount : ₹0.00</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 45, height: 45, borderRadius: 1, backgroundColor: 'background.light' }}>
                                                    <PaidOutlinedIcon sx={{ color: 'primary.main' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: { xs: 15, sm: 16 } }}>Final Amount : ₹400.00</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 45, height: 45, borderRadius: 1, backgroundColor: 'background.light' }}>
                                                    <DomainAddOutlinedIcon sx={{ color: 'primary.main' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: { xs: 15, sm: 16 } }}>Payable at Venue : ₹300.00</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 45, height: 45, borderRadius: 1, backgroundColor: 'background.light' }}>
                                                    <CreditCardOutlinedIcon sx={{ color: 'primary.main' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: { xs: 15, sm: 16 } }}>Advance Amount : ₹100.00</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={0} sx={{ p: 1.5, borderRadius: "10px", mb: 1, boxShadow: 'none', border: '1px solid #d0d0d04d' }}>
                            <Box sx={{ mb: 1.5 }}>
                                <Typography variant="h5" sx={{ fontSize: 18, color: "text.custom" }}>Payment Details</Typography>
                            </Box>
                            <Paper elevation={0} sx={{ p: 1.5, display: "flex", flexGrow: 1, borderRadius: "10px", mb: 2, alignItems: "center", gap: 2, justifyContent: "space-between", flexWrap: "wrap", boxShadow: 'none', border: '1px solid #d0d0d04d' }}>
                                <Typography variant="body2" sx={{ fontSize: 15 }}>Apply Coupon Code</Typography>
                                <Box sx={{ display: "flex", alignItem: "center", gap: 1 }}>
                                    <MuiTextField
                                        fullWidth
                                        size="small"
                                        label="Enter Coupon Code"
                                        type="text"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <LocalOfferRoundedIcon sx={{ color: theme.palette.primary.main, mr: 1, fontSize: 20 }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{ maxWidth: 350 }}
                                    />
                                    <Button size="small" variant="contained" color="primary" sx={{ minHeight: 0, py: 1, px: 1.5, minWidth: 0 }}>
                                        <DoneOutlineRoundedIcon sx={{ fontSize: 20 }} />
                                    </Button>
                                </Box>
                            </Paper>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <Box>
                                        <Button variant="outlined" fullWidth size='large' sx={{ textTransform: 'initial', px: 6, }} startIcon={<CreditCardOutlinedIcon sx={{ fontSize: "18px !important" }} />} >Card</Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box>
                                        <Button variant="text" fullWidth size='large' sx={{ px: 6, textTransform: 'initial', color: "text.secondary", border: 1, borderColor: "#dfdfdf !important", }} startIcon={<CurrencyRubleOutlinedIcon sx={{ fontSize: "18px !important" }} />} >Paypal</Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box>
                                        <Button variant="text" fullWidth size='large' sx={{ px: 6, textTransform: 'initial', color: "text.secondary", border: 1, borderColor: "#dfdfdf !important", }} startIcon={<GoogleIcon sx={{ fontSize: "18px !important" }} />} >Google Pay</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={{ mt: 2 }}>
                                <Formik
                                    initialValues={paymentValues}
                                    onSubmit={async (values, { resetForm }) => {
                                        try {
                                            alertMsg("Payment Done Successfully", "success")
                                            console.log(values)
                                            resetForm()
                                        }
                                        catch (err) {
                                            console.error(err)
                                        }
                                    }}
                                    enableReinitialize={true}>
                                    <Form>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="holder_name"
                                                    label="Cardholder Name"
                                                    type="text"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="card_number"
                                                    label="Card Number"
                                                    type="text"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="expire_date"
                                                    label="Expire Date"
                                                    type="text"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="cvv"
                                                    label="CVV"
                                                    type="text"
                                                />
                                            </Grid>
                                            {/* <Grid item xs={12} sm={6}>
                                                <Field
                                                    component={CheckboxWithLabel}
                                                    type="checkbox"
                                                    name="card"
                                                    Label={{ label: 'Save my payment details for future purchases.' }}
                                                />
                                            </Grid> */}
                                            <Grid item xs={12} sx={{ mt: 1 }}>
                                                <Box className='modal-footer' sx={{ textAlign: 'right', display: "flex", alignItem: "center", gap: 2, justifyContent: "end" }}>
                                                    {/* <Button sx={{ px: 4, borderColor: '#d5d5d5', }} color={'inherit'} variant='outlined' onClick={() => { setOpen(false) }}>Cancel</Button> */}
                                                    <Button onClick={() => { setOpen(true) }} sx={{ textTransform: 'initial' }} size='medium' variant="contained">Proceed to Pay ₹300.00</Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Form>
                                </Formik>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Box className="step-footer" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", }}>
                <Button variant="outlined" color="primary" onClick={handlePrevStep}>Back</Button>
                <Button variant="contained" color="primary"
                    onClick={() => {
                        setLoader(true)
                        submitOrder()
                        alertMsg("Booking Created Successfully", "success")
                    }}
                >Finish
                    {loader && <CircularProgress size="20px" sx={{ color: "#fff", ml: 1 }} />}
                </Button>
            </Box>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={() => setOpen(false)}
                keepMounted
                PaperProps={{
                    sx: { maxWidth: { xs: '100%', sm: "500px" }, width: '100%', m: 2 }
                }}>
                <DialogContent sx={{ textAlign: 'center', px: 2, py: 5 }}>
                    <Box sx={{ height: 75 }}>
                        <TaskAltOutlinedIcon sx={{ fontSize: 75, color: 'primary.main' }} />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Typography sx={{ fontSize: { xs: "1.5rem", sm: "1.5rem", }, fontWeight: 700, color: '#000' }}>Booking has been Confirmed</Typography>
                    </Box>
                    <Box sx={{ mt: 1 }}>
                        <Typography sx={{ fontSize: { xs: 15, sm: 16 }, color: "#838383", fontWeight: 400 }}>Check your email on the booking confirmation</Typography>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Button onClick={() => { navigate('/dashboard') }} startIcon={<ArrowBackOutlinedIcon />} size='large'>Back to Dashboard</Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    )
}

export default OrderSummary
