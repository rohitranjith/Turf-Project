import { useRef } from 'react'
import { Box, Button, Grid, InputAdornment, FormControlLabel, Radio, Typography, Stack } from '@mui/material'
import { Field, Form, Formik, ErrorMessage } from "formik";
import { TextField, RadioGroup, } from 'formik-mui'
import * as Yup from 'yup';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { useDispatch } from 'react-redux';
import { API_KEY, MAP_SCRIPTS } from '../../../constants';
import { useJsApiLoader, StandaloneSearchBox } from '@react-google-maps/api';
import DatePicker from "react-multi-date-picker"
import moment from 'moment/moment';
import InputIcon from "react-multi-date-picker/components/input_icon"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { authActions } from '../../../redux/reducers/auth-slice';
import { alertMsg, getAddressJSON } from '../../../utils/basicUtils';


const datePickerStyle = {
    '& .rmdp-container': {
        width: '100%',
        display: 'block !important',
        '& .rmdp-input': { height: 38, width: '100%', pl: '14px', pr: '25px', borderColor: '#0000003b', boxSizing: 'border-box', backgroundColor: 'background.card', color: 'initial' },
        '& .rmdp-input:focus': { boxShadow: 'none', borderColor: 'primary.main' },
        '& .rmdp-time-picker input': { width: '25px' }
    }
}


const PersonalDetails = ({ userDetail, getUserInfo }) => {
    const dispatch = useDispatch()
    const inputRef = useRef();

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries: MAP_SCRIPTS,
    })

    return (
        <Box>
            <Box>
                <Formik
                    initialValues={{ ...userDetail }}
                    validationSchema={
                        Yup.object({
                            first_name: Yup.string()
                                .required('First name is required'),
                            last_name: Yup.string()
                                .required('Last name is required'),
                            gender: Yup.string()
                                .required('Gender is required'),
                            dob: Yup.string()
                                .required('Date of birth is required'),
                            mobile_number: Yup.string()
                                .required('Mobile Number is required'),
                            address_line_one: Yup.string()
                                .required('Address line one is required'),
                            city: Yup.string()
                                .required('City is required'),
                            state: Yup.string()
                                .required('State is required'),
                            country: Yup.string()
                                .required('Country is required'),
                            zipcode: Yup.string()
                                .required('Postal code is required'),
                        })
                    }
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        const userData = { ...values }
                        userData.street_address = `${values.address_line_one},${values.address_line_two}`
                        userData.dob = moment(values.dob).format("YYYY-MM-DD")
                        delete userData.address_line_one
                        delete userData.uin_types
                        delete userData.address_line_two
                        console.log(values);

                        try {
                            alertMsg('Profile updated Successfully', "success")
                            dispatch(authActions.updateUser({ ...userData }))
                            getUserInfo()
                        }
                        catch (err) {
                            console.error(err)
                        }
                        setSubmitting(false)
                    }}
                    enableReinitialize={true}

                >
                    {({ isSubmitting, setFieldTouched, values, setFieldValue, setTouched, touched }) => (
                        <Form style={{ width: '100%' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ border: '1px solid', borderColor: 'background.light', borderRadius: 2 }}>
                                        <Stack direction='row' sx={{ p: 1.5, gap: .5, alignItems: 'center', borderBottom: 1, borderColor: 'background.light' }}>
                                            <Typography variant="body1" sx={{ fontWeight: 600 }}>Personal information</Typography>
                                        </Stack>
                                        <Box sx={{ p: 1.5, }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                    <Field
                                                        component={TextField}
                                                        fullWidth
                                                        name="first_name"
                                                        label="First Name"
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <PersonIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Field
                                                        component={TextField}
                                                        fullWidth
                                                        name="last_name"
                                                        label="Last Name"
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <PersonIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Box sx={{ position: "relative", ...datePickerStyle }}>
                                                        <Typography variant="body1" color="text.secondary" sx={{ fontSize: 10, bgcolor: "background.card", position: "absolute", zIndex: 1, top: -8, left: 10, px: .4 }}>Date of birth</Typography>
                                                        <Box>
                                                            <DatePicker
                                                                format="DD/MM/YYYY"
                                                                render={<InputIcon name='dob' placeholder='Date of birth' />}
                                                                value={new Date(values.dob)}
                                                                onChange={(date) => {
                                                                    if (date) {
                                                                        setFieldValue("dob", date.format("YYYY-MM-DD"))
                                                                    }
                                                                }}
                                                            />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ "& span": { fontSize: 12, color: "error.main", m: "4px 14px 0", } }}>
                                                        <ErrorMessage component="span" name="dob" />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Field row component={RadioGroup} name="gender">
                                                        <FormControlLabel
                                                            value="M"
                                                            sx={{ ml: 0 }}
                                                            control={<Radio disabled={isSubmitting} />}
                                                            label="Male"
                                                            disabled={isSubmitting}
                                                        />
                                                        <FormControlLabel
                                                            sx={{ ml: 0 }}
                                                            value="F"
                                                            control={<Radio disabled={isSubmitting} />}
                                                            label="Female"
                                                            disabled={isSubmitting}
                                                        />
                                                    </Field>
                                                    <ErrorMessage style={{ fontSize: '0.75rem', color: '#d32f2f', fontWeight: '500', margin: '14px 4px 0px 14px' }} component="span" name="gender" />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Box>
                                                        <Field
                                                            multiline
                                                            rows={3.6}
                                                            component={TextField}
                                                            fullWidth
                                                            name="bio"
                                                            label="Bio"
                                                        />
                                                    </Box>
                                                </Grid>

                                            </Grid>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ border: '1px solid', borderColor: 'background.light', borderRadius: 2 }}>
                                        <Stack direction='row' sx={{ p: 1.5, gap: .5, alignItems: 'center', borderBottom: 1, borderColor: 'background.light' }}>
                                            <Typography variant="body1" sx={{ fontWeight: 600 }}>Contact information</Typography>
                                        </Stack>
                                        <Box sx={{ p: 1.5, }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                    <PhoneInput
                                                        className="react-tel-input profile-pho-inp"
                                                        country={'us'}
                                                        name="mobile_number"
                                                        countryCodeEditable={false}
                                                        specialLabel=''
                                                        value={(values.mobile_code ? values.mobile_code : "+1") + (values.mobile_number ? values.mobile_number : "")}
                                                        onBlur={() => { setFieldTouched('mobile_number', true) }}
                                                        onChange={(phoneNumber, phoneNumberObj) => {
                                                            setFieldValue('mobile_number', phoneNumber.slice(phoneNumberObj.dialCode.length))
                                                            setFieldValue('mobile_code', phoneNumberObj.dialCode)
                                                            setFieldValue('country_code', phoneNumberObj.countryCode)
                                                        }}
                                                        fullWidth
                                                    />
                                                    <ErrorMessage component="span" name="mobile_number" />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    {isLoaded &&
                                                        <StandaloneSearchBox
                                                            onLoad={ref => inputRef.current = ref}
                                                            onPlacesChanged={(e) => {
                                                                try {
                                                                    const [place] = inputRef.current.getPlaces();
                                                                    if (place) {
                                                                        const placeObj = getAddressJSON(place)
                                                                        setFieldValue("address_line_one", `${placeObj.street_no ? placeObj.street_no : ""}${placeObj.address_line_1 ? placeObj.address_line_1 : ""}${placeObj.street ? placeObj.street : ""}`)
                                                                        setFieldValue("address_line_two", placeObj.address_line_2 ? placeObj.address_line_2 : "")
                                                                        setFieldValue("city", placeObj.city ? placeObj.city : "")
                                                                        setFieldValue("state", placeObj.state ? placeObj.state : "")
                                                                        setFieldValue("country", placeObj.country ? placeObj.country : "")
                                                                        setFieldValue("zipcode", placeObj.zipcode ? placeObj.zipcode : "")
                                                                        setTouched({
                                                                            ...touched,
                                                                            street_address: false,
                                                                            "address_line_one": false,
                                                                            "address_line_two": false,
                                                                            "city": false,
                                                                            "state": false,
                                                                            "country": false,
                                                                            "zipcode": false,
                                                                        })
                                                                    }
                                                                } catch (error) {
                                                                    console.error('error: ', error.message);
                                                                }
                                                            }} >
                                                            <Field
                                                                component={TextField}
                                                                fullWidth
                                                                size="small"
                                                                name="address_line_one"
                                                                label="Address Line 1 *"
                                                                placeholder=""
                                                                type="text"
                                                            />
                                                        </StandaloneSearchBox>
                                                    }
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Field
                                                        component={TextField}
                                                        fullWidth
                                                        name="address_line_two"
                                                        label="Address Line 2"
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <LocationOnOutlinedIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Field
                                                        component={TextField}
                                                        fullWidth
                                                        name="city"
                                                        label="City"
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <LocationOnOutlinedIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Field
                                                        component={TextField}
                                                        fullWidth
                                                        name="state"
                                                        label="State"
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <LocationOnOutlinedIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Field
                                                        component={TextField}
                                                        fullWidth
                                                        name="country"
                                                        label="Country"
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <LocationOnOutlinedIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Field
                                                        component={TextField}
                                                        fullWidth
                                                        name="zipcode"
                                                        label="Postal Code"
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <LocationOnOutlinedIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Field
                                                        component={TextField}
                                                        fullWidth
                                                        name="employee_id"
                                                        label="Employee ID"
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <PersonIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Box>

                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={{ mt: 1 }}>
                                <Button disabled={isSubmitting}
                                    variant="contained"
                                    // fullWidth
                                    type='submit'
                                    color="primary">Save Changes</Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Formik
                    initialValues={{
                        "facebook": "",
                        "twitter": "",
                        "youtube": "",
                        "instagram": "",
                        "linkedin": "",
                    }}
                    validationSchema={
                        Yup.object({
                            facebook: Yup.string()
                                .required('Facebook is required'),
                            twitter: Yup.string()
                                .required('Twitter is required'),
                            youtube: Yup.string()
                                .required('Youtube is required'),
                            instagram: Yup.string()
                                .required('Instagram is required'),
                            linkedin: Yup.string()
                                .required('Linkedin is required'),
                        })
                    }
                    enableReinitialize={true}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(values)
                        setSubmitting(false)
                        resetForm();
                    }}

                >
                    {({ isSubmitting, values }) => (
                        <Form style={{ width: '100%' }}>
                            <Box sx={{ border: '1px solid', borderColor: 'background.light', borderRadius: 2 }}>
                                <Stack direction='row' sx={{ p: 1.5, gap: .5, alignItems: 'center', borderBottom: 1, borderColor: 'background.light', justify: 'space-between' }}>
                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>Social Network</Typography>
                                    <Box sx={{ textAlign: "center" }}>
                                        <Button disabled={isSubmitting}
                                            variant="contained"
                                            // fullWidth
                                            type='submit'
                                            color="primary">Save</Button>
                                    </Box>
                                </Stack>
                                <Box sx={{ p: 1.5, }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                component={TextField}
                                                fullWidth
                                                name="facebook"
                                                label="Facebook"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <FacebookIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                component={TextField}
                                                fullWidth
                                                name="twitter"
                                                label="Twitter"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <XIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                component={TextField}
                                                fullWidth
                                                name="youtube"
                                                label="Youtube"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <YouTubeIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                component={TextField}
                                                fullWidth
                                                name="instagram"
                                                label="Instagram"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <InstagramIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                component={TextField}
                                                fullWidth
                                                name="linkedin"
                                                label="Linkedin"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <LinkedInIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>


                        </Form>
                    )}
                </Formik>
            </Box>
        </Box >
    )
}

export default PersonalDetails