import { Alert, Box, Button, Grid, IconButton, InputAdornment, Paper, Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Field, Form, Formik } from "formik";
import { TextField } from 'formik-mui'
import * as Yup from 'yup';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import PersonalDetails from './PersonalDetails';
import ProfileView from './ProfileView';
import Popup from '../../../components/Popup';
import { useNavigate } from 'react-router-dom';
import TabPanel from '../../../components/TabPanel';
import { alertMsg } from '../../../utils/basicUtils';

const Profile = () => {
    const [showPop, setShowPop] = useState(false)
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [userAction, setUserAction] = useState(null)

    const user = {}

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    const [userDetail, setUserDetail] = useState({
        "id": 182,
        "first_name": "",
        "last_name": "",
        "bio": "",
        "gender": "M",
        "dob": "",
        "mobile_number": "",
        "country_code": '',
        "mobile_code": "",
        "city": "",
        "address_line_one": "",
        "address_line_two": "",
        "state": "",
        "country": "",
        "zipcode": "",
        "uin_types": [],
        "uin_type": "",
        "uin": "",
        "employee_id": "",
        "commencement_date": "",
        "cessation_date": ""
    });


    const getUserInfo = async () => {
        try {
            console.log('user')
        }
        catch (err) {
            console.error(err)
        }
    }

    const handleUserAction = async () => {
        if (userAction === 'delete') {
            try {
                setShowPop(false);
                alertMsg('Acccount Deleted successfully', 'success')
                navigate('/accounts/signin')
            }
            catch (error) {
                console.error(error)
            }
        }
        else {
            setShowPop(false);
        }

    }

    useEffect(() => {
        getUserInfo();
    }, [])

    return (
        <Box>
            <Paper sx={{ backgroundColor: "background.card", mt: 1.5, borderRadius: 1.5, minHeight: 'calc(90vh - 120px)' }}>
                <Box sx={{ p: 1.5 }}>
                    <Box>
                        <Tabs
                            sx={{ '& button': { px: 3, fontSize: 16 }, '& .MuiTabs-indicator': { zIndex: 1, }, '& button.Mui-selected': { zIndex: 2, }, }}
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto">
                            <Tab label="Profile" sx={{ color: 'text.secondary' }} />
                            <Tab label="Personal Details" sx={{ color: 'text.secondary' }} />
                            <Tab label="My Account" sx={{ color: 'text.secondary' }} />
                            <Tab label="Change Password" sx={{ color: 'text.secondary' }} />
                        </Tabs>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <TabPanel value={value} index={0}>
                            <ProfileView userDetail={userDetail} uin_types={userDetail.uin_types} handleTab={(e, tabValue) => { console.log(tabValue); handleChange(e, tabValue) }} getUserInfo={getUserInfo} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <PersonalDetails userDetail={userDetail} uin_types={userDetail.uin_types} getUserInfo={getUserInfo} />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Box>
                                <Box sx={{ border: '1px solid', borderColor: 'background.light', borderRadius: 2 }}>
                                    <Stack direction='row' sx={{ p: 1.5, gap: .5, alignItems: 'center', borderBottom: 1, borderColor: 'background.light', justify: 'space-between' }}>
                                        <Typography variant="body1" sx={{ fontWeight: 600 }}>General Settings</Typography>
                                    </Stack>
                                    <Box sx={{ p: 1.5 }}>
                                        <Formik
                                            initialValues={{
                                                "username": userDetail ? userDetail.username : '',
                                                "email": userDetail ? userDetail.email : '',
                                            }}
                                            validationSchema={
                                                Yup.object({
                                                    username: Yup.string()
                                                        .required('Username is required')
                                                        .min(3, 'Username must be at least 6 characters')
                                                })
                                            }
                                            enableReinitialize={true}
                                            onSubmit={async (values, { setSubmitting, resetForm }) => {
                                                try {
                                                    // const response = await axios.post(`accounts/update_username/`, {
                                                    //     "id": user.id,
                                                    //     "username": values.username,
                                                    // })
                                                    alertMsg('Username updated successfully', "success")
                                                    getUserInfo()
                                                }
                                                catch (err) {
                                                    console.error(err)
                                                }
                                                // console.log(values)
                                                setSubmitting(false)
                                            }}

                                        >
                                            {({ isSubmitting, values }) => (
                                                <Form style={{ width: '100%' }}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={6}>
                                                            <Box>
                                                                <Field
                                                                    component={TextField}
                                                                    fullWidth
                                                                    name="username"
                                                                    label="Username"
                                                                    InputProps={{
                                                                        endAdornment: (
                                                                            <InputAdornment position="end">
                                                                                <PersonIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                />
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <Box>
                                                                <Field
                                                                    component={TextField}
                                                                    fullWidth
                                                                    name="email"
                                                                    label="Email"
                                                                    InputProps={{
                                                                        endAdornment: (
                                                                            <InputAdornment position="end">
                                                                                <EmailIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                />
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                    <Box sx={{ mt: 2 }}>
                                                        <Button disabled={isSubmitting}
                                                            variant="contained"
                                                            // fullWidth
                                                            type='submit'
                                                            color="primary">Update</Button>
                                                    </Box>
                                                </Form>
                                            )}
                                        </Formik>
                                    </Box>
                                </Box>
                                <Box sx={{ border: '1px solid', borderColor: 'background.light', borderRadius: 2, mt: 2 }}>
                                    <Stack direction='row' sx={{ p: 1.5, gap: .5, alignItems: 'center', borderBottom: 1, borderColor: 'background.light', justify: 'space-between' }}>
                                        <Typography variant="body1" sx={{ fontWeight: 600 }}>Account Delete</Typography>
                                    </Stack>
                                    <Box sx={{ p: 1.5 }}>
                                        <Box>
                                            <Typography sx={{ color: "text.secondary" }}>Deleting your account is irreversible and can affect your past activites.</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography sx={{ color: "text.secondary" }}>Do you want to delete <Typography component={"span"} sx={{ color: "#000", fontWeight: 600 }}>{user && user.first_name} {user && user.last_name}</Typography> user?</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Button variant="contained" onClick={() => { setShowPop(true); setUserAction('delete') }}>Delete Account</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <Box sx={{ border: '1px solid', borderColor: 'background.light', borderRadius: 2 }}>
                                <Stack direction='row' sx={{ p: 1.5, gap: .5, alignItems: 'center', borderBottom: 1, borderColor: 'background.light', justify: 'space-between' }}>
                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>Change Password</Typography>
                                </Stack>
                                <Box sx={{ p: 1.5 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Box>
                                                <Alert severity="warning" sx={{ boxShadow: 0 }}>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.</Alert>
                                            </Box>
                                            <Box sx={{ mt: 1 }}>
                                                <Formik
                                                    initialValues={{
                                                        "old_password": "",
                                                        "new_password": "",
                                                        "confirm_password": "",
                                                    }}
                                                    validationSchema={
                                                        Yup.object({
                                                            old_password: Yup.string()
                                                                .required('Current password is required'),
                                                            new_password: Yup.string()
                                                                .required("New password is required")
                                                                .min(8, "Must be at least 8 characters")
                                                                .max(100, "New password cannot exceed 100 characters"),
                                                            // .matches(/^[^\s][ A-Za-z0-9_@./#&+-]+[^\s]$/, 'New Password contain whiteSpaces at the beginning and at the end'),
                                                            confirm_password: Yup.string()
                                                                .required("Confirm password is required")
                                                                .oneOf([Yup.ref('new_password'), null], "Passwords doesn't match"),
                                                        })
                                                    }
                                                    enableReinitialize={true}
                                                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                                                        try {
                                                            // const response = await axios.post(`accounts/update_password/`, {
                                                            //     "id": user.id,
                                                            //     "old_password": values.old_password,
                                                            //     "new_password": values.new_password,
                                                            // })
                                                            alertMsg('Password updated successfully', "success")
                                                            resetForm()
                                                            getUserInfo()
                                                        }
                                                        catch (err) {
                                                            console.error(err)
                                                        }
                                                        // console.log(values)
                                                        setSubmitting(false)
                                                    }}

                                                >
                                                    {({ isSubmitting, values }) => (
                                                        <Form style={{ width: '100%' }}>
                                                            <Box>
                                                                <Field
                                                                    component={TextField}
                                                                    margin="dense"
                                                                    fullWidth
                                                                    size="small"
                                                                    name="old_password"
                                                                    label="Current Password *"
                                                                    type={showCurrentPassword ? "text" : "password"}
                                                                    InputProps={{
                                                                        // style: { backgroundColor: '#efefefe6' },
                                                                        endAdornment: (
                                                                            <InputAdornment position="end">
                                                                                <IconButton
                                                                                    onClick={() => { setShowCurrentPassword(prev => !prev) }}
                                                                                    onMouseDown={handleMouseDownPassword}
                                                                                    edge="end"
                                                                                    size="small"
                                                                                    sx={{ mr: .5 }}
                                                                                >
                                                                                    {showCurrentPassword ? (
                                                                                        <VisibilityOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                                                                    ) : (
                                                                                        <VisibilityOffOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                                                                    )}
                                                                                </IconButton>
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                />
                                                            </Box>
                                                            <Box>
                                                                <Field
                                                                    component={TextField}
                                                                    margin="dense"
                                                                    fullWidth
                                                                    size="small"
                                                                    name="new_password"
                                                                    label="New Password *"
                                                                    sx={{ ".MuiFormHelperText-root": { mt: 1.3 } }}
                                                                    type={showNewPassword ? "text" : "password"}
                                                                    InputProps={{
                                                                        // style: { backgroundColor: '#efefefe6' },
                                                                        endAdornment: (
                                                                            <InputAdornment position="end">
                                                                                <IconButton
                                                                                    onClick={() => { setShowNewPassword(prev => !prev) }}
                                                                                    onMouseDown={handleMouseDownPassword}
                                                                                    edge="end"
                                                                                    size="small"
                                                                                    sx={{ mr: .5 }}
                                                                                >
                                                                                    {showNewPassword ? (
                                                                                        <VisibilityOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                                                                    ) : (
                                                                                        <VisibilityOffOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                                                                    )}
                                                                                </IconButton>
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                />
                                                            </Box>
                                                            <Box>
                                                                <Field
                                                                    component={TextField}
                                                                    margin="dense"
                                                                    fullWidth
                                                                    size="small"
                                                                    name="confirm_password"
                                                                    label="Confirm New Password *"
                                                                    type={showConfirmPassword ? "text" : "password"}
                                                                    InputProps={{
                                                                        // style: { backgroundColor: '#efefefe6' },
                                                                        endAdornment: (
                                                                            <InputAdornment position="end">
                                                                                <IconButton
                                                                                    onClick={() => { setShowConfirmPassword(prev => !prev) }}
                                                                                    onMouseDown={handleMouseDownPassword}
                                                                                    edge="end"
                                                                                    size="small"
                                                                                    sx={{ mr: .5 }}
                                                                                >
                                                                                    {showConfirmPassword ? (
                                                                                        <VisibilityOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                                                                    ) : (
                                                                                        <VisibilityOffOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                                                                    )}
                                                                                </IconButton>
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                />
                                                            </Box>
                                                            <Box sx={{ mt: 3 }}>
                                                                <Button disabled={isSubmitting}
                                                                    variant="contained"
                                                                    // fullWidth
                                                                    type='submit'
                                                                    color="primary">Update Password</Button>
                                                            </Box>
                                                        </Form>
                                                    )}
                                                </Formik>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Box>
                                                <Typography sx={{ fontSize: '14px', color: "text.secondarydefault", fontWeight: 500, mt: .6 }}>To keep your account secure, we recommend you follow these best practices:</Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontSize: '14px', color: "text.secondarydefault", fontWeight: 500, mt: .6 }}>Password must contain</Typography>
                                            </Box>
                                            <Box sx={{ mt: 1 }}>
                                                <Box sx={{ display: 'flex', gap: 1, alignItems: "center", mb: 1 }}>
                                                    <Box sx={{ height: "20px" }}>
                                                        <VerifiedIcon sx={{ fontSize: "20px", color: 'primary.main' }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography>At least 8 characters</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex', gap: 1, alignItems: "center", mb: 1 }}>
                                                    <Box sx={{ height: "20px" }}>
                                                        <VerifiedIcon sx={{ fontSize: "20px", color: 'primary.main' }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography>At least one lowercase letter (a-z)</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex', gap: 1, alignItems: "center", mb: 1 }}>
                                                    <Box sx={{ height: "20px" }}>
                                                        <VerifiedIcon sx={{ fontSize: "20px", color: 'primary.main' }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography>At least one uppercase letter (A-Z)</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex', gap: 1, alignItems: "center", mb: 1 }}>
                                                    <Box sx={{ height: "20px" }}>
                                                        <VerifiedIcon sx={{ fontSize: "20px", color: 'primary.main' }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography>At least one number(0-9)</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex', gap: 1, alignItems: "center", mb: 1 }}>
                                                    <Box sx={{ height: "20px" }}>
                                                        <VerifiedIcon sx={{ fontSize: "20px", color: 'primary.main' }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography>At least one special character</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex', gap: 1, alignItems: "center", mb: 1 }}>
                                                    <Box sx={{ height: "20px" }}>
                                                        <VerifiedIcon sx={{ fontSize: "20px", color: 'primary.main' }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography>Password must not contain</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex', gap: 1, alignItems: "center", mb: 1 }}>
                                                    <Box sx={{ height: "20px" }}>
                                                        <VerifiedIcon sx={{ fontSize: "20px", color: 'primary.main' }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography>Dictonary words</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </TabPanel>

                    </Box>
                </Box>
            </Paper>
            <Popup show={showPop} title={userAction === 'delete' ? "Delete Account" : 'Deactivate Account'} consent={true} variant={userAction === 'delete' ? 'error' : 'warning'} primaryBtnTxt={userAction === 'delete' ? 'delete' : 'deactivate'}
                onPrimaryClick={async (e, loader) => { handleUserAction() }} onSecondaryClick={() => { setShowPop(false) }}>
                <Box sx={{ textAlign: "center" }}>
                    <Typography color='text.secondarydefault' >{userAction === 'delete' && <span>Deleting your account is irreversible and can affect your past activites.</span>} Do you want to {userAction === 'delete' ? 'delete' : 'deactivate'} <span style={{ fontWeight: 600, color: "#000" }}>{user && user.first_name} {user && user.last_name}</span> user?</Typography>
                </Box>
            </Popup>
        </Box>
    )
}

export default Profile