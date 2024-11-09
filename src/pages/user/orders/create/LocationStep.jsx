import { useRef, useState, } from 'react'
import { Box, Typography, Grid, Button, TextField as MuiTextField, InputAdornment, } from '@mui/material'
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui'
import { GoogleMap, MarkerF, useJsApiLoader, StandaloneSearchBox } from '@react-google-maps/api';
import { API_KEY } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions } from '../../../../redux/reducers/order-slice';
import { getAddressJSON } from '../../../../utils/basicUtils';
import SearchIcon from '@mui/icons-material/Search';


const LocationStep = ({ handleNextStep }) => {
    const MAP_SCRIPTS = ["places"]
    const dispatch = useDispatch()
    const initialValues = useSelector(state => state.order.locationStep)
    const [map, setMap] = useState(null)
    const [mapCoords, setMapCoords] = useState({ lat: initialValues.latitude, lng: initialValues.longitude })
    const inputRef = useRef();
    const [isManualEntry, setIsManualEntry] = useState(false)
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries: MAP_SCRIPTS,
    });

    const [initialFormData, setInitialFormData] = useState(initialValues)
    console.log(initialFormData)
    /**
     * This function can be used for place change event in **@react-google-maps/api'**
     */
    const handlePlaceChanged = (e, values) => {
        const [place] = inputRef.current.getPlaces();
        if (place) {
            const lat = Number(place.geometry.location.lat().toFixed(8))
            const lng = Number(place.geometry.location.lng().toFixed(8))
            const placeObj = getAddressJSON(place)
            setMapCoords({ lat, lng })
            dispatch(orderActions.updateLatLng({ latitude: lat, longitude: lng }))
            setInitialFormData({
                ...initialFormData,
                ...getAddressJSON(place),
                title: place.formatted_address,
                square_feet: values.square_feet,
                street: placeObj.street ? placeObj.street : ((placeObj.address_line_1 || placeObj.address_line_2) ? (`${placeObj.address_line_1 && placeObj.address_line_1}`, `${placeObj.address_line_2 && placeObj.address_line_2}`) : ""),
                place: {
                    address_components: place.address_components,
                    geometry: place.geometry,
                    icon: place.icon,
                    name: place.name,
                    html_attributions: place.html_attributions
                }
            })
        }
    }


    const onMarkerDragEnd = (e) => {
        const lat = Number(e.latLng.lat().toFixed(8))
        const lng = Number(e.latLng.lng().toFixed(8))
        dispatch(orderActions.updateLatLng({ latitude: lat, longitude: lng }))
    };

    return (
        <Box className={'cs-popup'}>
            <Formik
                initialValues={initialFormData}
                onSubmit={(values) => {
                    if (values.title === '') {
                        dispatch(orderActions.updateTitle(`${values.street_no},${values.street},${values.city},${values.state}`))
                    } else {
                        dispatch(orderActions.updateTitle(values.title))
                    }
                    dispatch(orderActions.updateTitle(values.title))
                    dispatch(orderActions.updatePropertyFootage(values.square_feet))
                    dispatch(orderActions.updateAddress({ ...values }))
                    handleNextStep()
                }}
                enableReinitialize={true}
            >
                {
                    ({ setFieldValue, values }) => (
                        <Form>
                            <Box sx={{ position: 'relative' }}>
                                <Box className='step-header'>
                                    <Box>
                                        <Typography variant={'h5'} sx={{ fontSize: 18, color: 'text.custom' }} >Specify your location</Typography>
                                        <Typography variant={'body2'} sx={{ fontSize: 15, mt: .5 }}>Please enter your address below. If the property is at an apartment or unit, please make sure to note which one. </Typography>
                                    </Box>
                                </Box>
                                <Box className='step-content scroll-bar'>
                                    {isLoaded &&
                                        <Box>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6} md={4}>
                                                    <StandaloneSearchBox onLoad={ref => inputRef.current = ref} onPlacesChanged={(e) => handlePlaceChanged(e, values)} >
                                                        <Field
                                                            component={TextField}
                                                            fullWidth
                                                            size="small"
                                                            name="title"
                                                            label="Search address *"
                                                            placeholder=""
                                                            type="text"
                                                            InputProps={{
                                                                style: {
                                                                    fontSize: '14px'
                                                                },
                                                                endAdornment: (
                                                                    <InputAdornment position="start" sx={{ pl: 1 }}>
                                                                        <SearchIcon sx={{ color: "lightgrey" }} />
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                        // inputProps={{
                                                        //     style: { backgroundColor: '#d3fade' }
                                                        // }}
                                                        />
                                                    </StandaloneSearchBox>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    }
                                    <Box sx={{ mt: 2 }}>
                                        <Grid container spacing={2.5}>
                                            <Grid item xs={12} sm={6} md={3}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="street_no"
                                                    label="Street#"
                                                    type="text"
                                                    // inputProps={{
                                                    //     style: { backgroundColor: '#d3fade' }
                                                    // }}
                                                    onKeyDown={(e) => {
                                                        (["e", "E", "+", "-"].includes(e.key) || (e.target.value === '' && e.key === '.')) && e.preventDefault()
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="street"
                                                    label="Street Name *"
                                                    type="text"
                                                // inputProps={{
                                                //     style: { backgroundColor: '#d3fade' }
                                                // }}
                                                />

                                            </Grid>
                                            <Grid item xs={12} sm={6} md={3}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="address_unit_no"
                                                    label="Unit#"
                                                    type="text"
                                                    // inputProps={{
                                                    //     style: { backgroundColor: '#d3fade' }
                                                    // }}
                                                    onKeyDown={(e) => {
                                                        (["e", "E", "+", "-"].includes(e.key) || (e.target.value === '' && e.key === '.')) && e.preventDefault()
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={3}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="city"
                                                    label="City *"
                                                    type="text"
                                                // inputProps={{
                                                //     style: { backgroundColor: '#d3fade' }
                                                // }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={3}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="state"
                                                    label="State *"
                                                    type="text"
                                                // inputProps={{
                                                //     style: { backgroundColor: '#d3fade' }
                                                // }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={3}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="country"
                                                    label="Country *"
                                                    type="text"
                                                // inputProps={{
                                                //     style: { backgroundColor: '#d3fade' }
                                                // }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={3}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="zipcode"
                                                    label="Zipcode *"
                                                    type="text"
                                                // inputProps={{
                                                //     style: { backgroundColor: '#d3fade' }
                                                // }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {isLoaded &&
                                        <Box mt={2} sx={{ borderRadius: '5px', overflow: 'hidden' }}>
                                            <GoogleMap
                                                onLoad={map => setMap(map)}
                                                mapContainerStyle={{
                                                    width: '100%',
                                                    height: '430px'
                                                }}
                                                center={mapCoords}
                                                zoom={20}>
                                                <MarkerF
                                                    position={mapCoords}
                                                    draggable={true}
                                                    onDragEnd={onMarkerDragEnd} />
                                            </GoogleMap>
                                        </Box>
                                    }
                                </Box>
                                <Box sx={{ textAlign: "right" }} className='step-footer'>
                                    <Button variant="contained" type='submit' color="primary">Next</Button>
                                </Box>
                            </Box>
                        </Form>
                    )
                }
            </Formik>
        </Box >
    )
}

export default LocationStep