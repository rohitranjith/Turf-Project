import { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { useTheme, Avatar, TextField as MuiTextField, Rating, Box, Typography, Stack, Grid, Button, Pagination, IconButton, List, ListItem, } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Calendar } from "react-multi-date-picker"
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';

const Scheduling = ({ handlePrevStep, handleNextStep }) => {
    const theme = useTheme()
    const [serviceList, setServiceList] = useState(photographyServices)
    const [open, setOpen] = useState(false)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(12);
    const [selectedService, setSelectedService] = useState(null);
    const [scheduleDate, setScheduleDate] = useState({});

    const handleScheduleDate = (value) => {
        setScheduleDate({
            start_date: value[0] && value[0].format(),
            end_date: value[1] && value[1].format(),
            dataFormat: value
        })
    }

    return (
        <Box className={'cs-popup'}>
            <Box className='step-header'>
                <Box>
                    <Typography variant={'h5'} sx={{ fontSize: 18, color: 'text.custom' }} >Scheduling</Typography>
                    <Typography variant={'body2'} sx={{ fontSize: 15, mt: .5 }}>Please enter your address below. If the property is at an apartment or unit, please make sure to note which one. </Typography>
                </Box>
            </Box>
            {
                !selectedService?.photographer_appointed ?
                    <Box>
                        <Box className='step-content scroll-bar'>
                            <Stack sx={{ gap: 1, justifyContent: 'space-between', height: '100%' }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={1.5} >
                                        {
                                            (rowsPerPage > 0 ? serviceList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : serviceList).map((service, index) => (
                                                <Grid key={index} item xs={12} md={6} xl={4}>
                                                    <Box sx={{ p: 1, borderRadius: "10px", border: "1px solid", borderColor: 'background.light' }}>
                                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                                            <Avatar alt={service.service_name} sx={{ borderRadius: 1.5, height: 105, width: 105 }} src={service.service_image} />
                                                            <Box sx={{ flexGrow: 1 }}>
                                                                <Box>
                                                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>{service.service_name}</Typography>
                                                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>{service.service_time}</Typography>
                                                                </Box>
                                                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1, mt: 1 }}>
                                                                    <Avatar alt={service.service_name} src={service.photographer_info.headshot} />
                                                                    <Box>
                                                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{service.photographer_info.name}</Typography>
                                                                        <Typography variant="body2" sx={{ fontWeight: 600 }} color="text.secondary">{service.photographer_info.email}</Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box sx={{ mt: 1 }}>
                                                                    <Button variant='outlined' onClick={() => { setOpen(true); setSelectedService(service) }}>Pick Photographer</Button>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                </Box>
                                <Stack sx={{ alignItems: 'center', mb: 1 }}>
                                    <Pagination
                                        variant="outlined"
                                        color='primary'
                                        count={Math.ceil(serviceList.length / rowsPerPage)}
                                        page={page + 1}
                                        onChange={(event, value) => { setPage(value - 1) }}
                                    />
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                    :
                    <Box>
                        <Box className='step-content scroll-bar'>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1, flexWrap: 'wrap', gap: 1 }}>
                                <Box>
                                    <Typography variant="body1" sx={{ fontSize: 16, color: 'success.main', fontWeight: 600 }}>Schedule</Typography>
                                    <Typography variant={'body2'} sx={{ fontWeight: 500, color: 'text.secondary' }}>Make your schedule </Typography>
                                </Box>
                                <Stack direction={'row'} sx={{ gap: 1, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                                    <Box>
                                        <Button variant='outlined' onClick={() => { setSelectedService(null) }}>Change Service</Button>
                                    </Box>
                                    <Box>
                                        <Button onClick={() => { setOpen(true); }}>Change Photographer</Button>
                                    </Box>
                                </Stack>
                            </Box>
                            <Stack sx={{ direction: { xs: 'column', md: 'row' }, gap: 1 }}>
                                <Box sx={{ flexGrow: 2 }}>
                                    <Box sx={{ p: 1, borderRadius: "10px", border: "1px solid", borderColor: 'background.light' }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: 'wrap' }}>
                                            <Avatar alt={selectedService.service_name} sx={{ borderRadius: 1.5, height: 100, width: 100 }} src={selectedService.service_image} />
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Box>
                                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>{selectedService.service_name}</Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>{selectedService.service_time}</Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "end", mt: { xs: 1, sm: 2.5 }, gap: 2 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
                                                        <Avatar alt={selectedService.service_name} src={selectedService.photographer_info.headshot} />
                                                        <Box>
                                                            <Typography variant="body2" sx={{ fontWeight: 600 }}>{selectedService.photographer_info.name}</Typography>
                                                            <Typography variant="body2" sx={{ fontWeight: 600 }} color="text.secondary">{selectedService.photographer_info.email}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Box>
                                                <Typography variant="body1" sx={{ fontWeight: 600, color: 'info.main' }}>About our Work </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">Our {selectedService.service_name} is perfect for capturing life's special moments in a simple and affordable way. Whether you're looking to document a family gathering, a birthday celebration, or a casual event, our skilled photographers will ensure that your memories are preserved beautifully. </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Box>
                                                <Typography variant="body1" sx={{ fontWeight: 600, color: 'info.main' }}>Benifits of our service </Typography>
                                            </Box>
                                            <Box>
                                                <List dense>
                                                    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia earum sit harum iusto reprehenderit soluta molestias! Quibusdam, temporibus corrupti, dolorum sequi enim error eum quam reiciendis voluptatibus quidem laborum cupiditate</ListItem>
                                                    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia earum sit harum iusto reprehenderit soluta molestias! Quibusdam, temporibus corrupti, dolorum sequi enim error eum quam reiciendis voluptatibus quidem laborum cupiditate</ListItem>
                                                    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia earum sit harum iusto reprehenderit soluta molestias! Quibusdam, temporibus corrupti, dolorum sequi enim error eum quam reiciendis voluptatibus quidem laborum cupiditate</ListItem>
                                                </List>
                                            </Box>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Box>
                                                <Typography variant="body1" sx={{ fontWeight: 600, color: 'info.main' }}>Photographer Information</Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "end", mt: .5, gap: 2 }}>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
                                                    <Avatar alt={selectedService.service_name} src={selectedService.photographer_appointed?.headshot} />
                                                    <Box>
                                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{selectedService.photographer_appointed?.name}</Typography>
                                                        <Typography variant="body2" sx={{ fontWeight: 600 }} color="text.secondary">{selectedService.photographer_appointed?.email}</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box>
                                        <Calendar
                                            range
                                            onChange={handleScheduleDate}
                                            style={{
                                                backgroundColor: 'background.light',
                                                margin: 'auto'
                                            }}
                                            format="DD-MM-YYYY hh:mm A"
                                            value={scheduleDate?.dataFormat}
                                            shadow={false}
                                            plugins={[
                                                <TimePicker position={'bottom'} />,
                                                <DatePanel position={'right'} />
                                            ]}
                                        />
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
            }
            <Box className='step-footer' sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Button variant="outlined" color="primary" onClick={handlePrevStep}>Back</Button>
                <Button variant="contained"
                    // disabled={!selectedService}
                    color="primary" onClick={handleNextStep}>Confirm Appoinment</Button>
            </Box>
            {
                selectedService &&
                <Drawer
                    anchor={'right'}
                    open={open}
                    onClose={() => { setOpen(false) }}
                    PaperProps={{
                        className: 'scroll-bar',
                        sx: {
                            borderRadius: 0,
                            width: '100%',
                            maxWidth: { xs: '95%', sm: 450 },
                        }
                    }}
                >
                    <Box sx={{ minHeight: "100vh", position: 'relative' }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2} sx={{ position: 'sticky', top: 0, left: 0, zIndex: 1, backgroundColor: 'background.paper', p: 2, borderBottom: '1px solid', borderColor: 'background.light' }}>
                            <Stack direction="row" alignItems="center" sx={{ borderRadius: 2, width: "100%" }}>
                                <MuiTextField
                                    label="Search Services or Photograper"
                                    size="small"
                                    fullWidth
                                />
                            </Stack>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Stack>
                        <Box sx={{ p: 2 }}>
                            {
                                selectedService.photographers?.map((user, index) => (
                                    <Box key={index} sx={{ borderRadius: 2, backgroundColor: "background.light", cursor: "pointer", border: 1, borderColor: "background.card", position: "relative", overflow: "hidden", mb: 2 }}>
                                        <Stack onClick={() => { }} direction="row" alignItems="top" justifyContent="space-between" gap={1} sx={{ p: 1.5, borderBottom: 1, borderColor: "background.primary", }}>
                                            <Box sx={{ display: "flex", alignItems: "top", gap: 1.5 }}>
                                                <Box sx={{ position: "relative", borderRadius: "50%" }}>
                                                    <Avatar alt="Remy Sharp" src={user.headshot} />
                                                    <Box sx={{ height: "12px", width: "12px", bgcolor: user.active ? "success.light" : "error.light", borderRadius: "50%", position: "absolute", bottom: 0, right: 0, border: 1, borderColor: "#fff" }}></Box>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{user.name}</Typography>
                                                    <Typography variant="body2" color="text.secondary">{user.email}</Typography>
                                                </Box>
                                            </Box>
                                            <Stack justifyContent="space-between">
                                                <Rating name="half-rating" value={user.rating} sx={{ fontSize: 14 }} size='small' readOnly />
                                            </Stack>
                                        </Stack>
                                        {user.service.length > 0 &&
                                            <Stack direction="row" gap={1} flexWrap="wrap" sx={{ p: 2, pt: 1 }}>
                                                {user.service.map((ele, index) =>
                                                    <Box key={index} sx={{ mt: 1, display: "flex", gap: .5, alignItems: "center" }}>
                                                        <CheckCircleIcon color="success" sx={{ fontSize: "16px" }} />
                                                        <Typography variant="body2" color="" sx={{ fontSize: 13 }}>{ele}</Typography>
                                                    </Box>
                                                )}
                                            </Stack>
                                        }
                                        {user.service.length == 0 && <Stack direction="row" gap={1} flexWrap="wrap" sx={{ p: 2, pt: 1 }}>
                                            <Box sx={{ mt: 1, display: "flex", gap: .5, alignItems: "center" }}>
                                                <CheckCircleIcon color="success" sx={{ fontSize: "16px" }} />
                                                <Typography variant="body2" color="" sx={{ fontSize: 13 }}>Basic Photography</Typography>
                                            </Box>
                                            <Box sx={{ mt: 1, display: "flex", gap: .5, alignItems: "center" }}>
                                                <CheckCircleIcon color="success" sx={{ fontSize: "16px" }} />
                                                <Typography variant="body2" color="" sx={{ fontSize: 13 }}>Aerial Photo editing</Typography>
                                            </Box>
                                        </Stack>}
                                        <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
                                            <Button variant="contained" onClick={() => {
                                                setOpen(false)
                                                setSelectedService((service) => ({ ...service, 'photographer_appointed': user }))
                                                setServiceList((service) => {
                                                    let updateService = service.map((item) => {
                                                        if (selectedService.id === item.id) {
                                                            return selectedService
                                                        }
                                                        else {
                                                            return item
                                                        }
                                                    })
                                                    return updateService
                                                })
                                            }} color="primary" sx={{ borderRadius: "5px 0 5px 0", fontSize: 13, px: 1, py: .3 }}>Select</Button>
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                </Drawer>
            }
        </Box >
    )
}

export default Scheduling

const photographyServices = [
    {
        id: 1,
        service_name: 'Basic Photography Service',
        schedule_time: '12th April 2024 - 10.00 AM to 3.00 PM',
        photographer_info: {
            name: 'Alice Smith',
            email: 'alicesmith@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/men/42.jpg'
        },
        service_image: 'https://images.pexels.com/photos/24702722/pexels-photo-24702722/free-photo-of-people-looking-through-lenses-to-the-air.jpeg',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 2,
        service_name: 'Twilight Photography Service',
        schedule_time: '12th April 2024 - 3.00 PM to 6.00 PM',
        photographer_info: {
            name: 'Michael Brown',
            email: 'michaelbrown@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/men/43.jpg'
        },
        service_image: 'https://images.pexels.com/photos/4347260/pexels-photo-4347260.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 3,
        service_name: 'Standard Photography Service',
        schedule_time: '14th April 2024 - 9.00 AM to 1.00 PM',
        photographer_info: {
            name: 'Taylor Parker',
            email: 'taylor@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/men/40.jpg'
        },
        service_image: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 4,
        service_name: 'Aerial Photography Service',
        schedule_time: '12th April 2024 - 6.00 AM to 12.00 PM',
        photographer_info: {
            name: 'Taylor Parker',
            email: 'taylor@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/men/4.jpg'
        },
        service_image: 'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 5,
        service_name: 'Event Photography Service',
        schedule_time: '15th April 2024 - 1.00 PM to 5.00 PM',
        photographer_info: {
            name: 'Emma Johnson',
            email: 'emma.johnson@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/women/45.jpg'
        },
        service_image: 'https://images.pexels.com/photos/5722935/pexels-photo-5722935.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 6,
        service_name: 'Wedding Photography Service',
        schedule_time: '20th April 2024 - 2.00 PM to 8.00 PM',
        photographer_info: {
            name: 'Liam Williams',
            email: 'liam.williams@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/men/46.jpg'
        },
        service_image: 'https://images.pexels.com/photos/25052902/pexels-photo-25052902/free-photo-of-groom-hands-holding-ring-in-box.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 7,
        service_name: 'Product Photography Service',
        schedule_time: '22nd April 2024 - 9.00 AM to 12.00 PM',
        photographer_info: {
            name: 'Sophia Davis',
            email: 'sophia.davis@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/women/47.jpg'
        },
        service_image: 'https://images.pexels.com/photos/3766112/pexels-photo-3766112.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 8,
        service_name: 'Family Photography Service',
        schedule_time: '25th April 2024 - 10.00 AM to 1.00 PM',
        photographer_info: {
            name: 'Noah Brown',
            email: 'noah.brown@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/men/48.jpg'
        },
        service_image: 'https://images.pexels.com/photos/5638701/pexels-photo-5638701.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 9,
        service_name: 'Corporate Event Photography',
        schedule_time: '30th April 2024 - 9.00 AM to 5.00 PM',
        photographer_info: {
            name: 'Olivia Smith',
            email: 'olivia.smith@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/women/49.jpg'
        },
        service_image: 'https://images.pexels.com/photos/2608515/pexels-photo-2608515.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 10,
        service_name: 'Fashion Photography Service',
        schedule_time: '5th May 2024 - 1.00 PM to 6.00 PM',
        photographer_info: {
            name: 'James Wilson',
            email: 'james.wilson@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/men/50.jpg'
        },
        service_image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 11,
        service_name: 'Real Estate Photography',
        schedule_time: '10th May 2024 - 10.00 AM to 2.00 PM',
        photographer_info: {
            name: 'Emma Taylor',
            email: 'emma.taylor@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/women/51.jpg'
        },
        service_image: 'https://images.pexels.com/photos/3625711/pexels-photo-3625711.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 12,
        service_name: 'Sports Photography',
        schedule_time: '15th May 2024 - 3.00 PM to 7.00 PM',
        photographer_info: {
            name: 'Jacob Martinez',
            email: 'jacob.martinez@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/men/52.jpg'
        },
        service_image: 'https://images.pexels.com/photos/24964271/pexels-photo-24964271/free-photo-of-photo-of-men-running-in-a-marathon.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 13,
        service_name: 'Pet Photography',
        schedule_time: '20th May 2024 - 9.00 AM to 11.00 AM',
        photographer_info: {
            name: 'Mia Anderson',
            email: 'mia.anderson@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/women/53.jpg'
        },
        service_image: 'https://images.pexels.com/photos/4641850/pexels-photo-4641850.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 14,
        service_name: 'Graduation Photography',
        schedule_time: '25th May 2024 - 10.00 AM to 1.00 PM',
        photographer_info: {
            name: 'Ethan Thomas',
            email: 'ethan.thomas@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/men/54.jpg'
        },
        service_image: 'https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
    {
        id: 15,
        service_name: 'Concert Photography',
        schedule_time: '30th May 2024 - 6.00 PM to 11.00 PM',
        photographer_info: {
            name: 'Sophia Lee',
            email: 'sophia.lee@gmail.com',
            headshot: 'https://randomuser.me/api/portraits/women/55.jpg'
        },
        service_image: 'https://images.pexels.com/photos/2278256/pexels-photo-2278256.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
        photographer_appointed: null,
        photographers: [
            {
                "id": "001",
                "name": "Alice Smith",
                "email": "alicesmith@gmail.com",
                "gender": "women",
                "headshot": 'https://randomuser.me/api/portraits/women/35.jpg',
                "rating": 3,
                "active": true,
                service: [
                    "Twilight Photography",
                    "Aerial Photography",
                    "Basic Photography"
                ]
            },
            {
                "id": "002",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "gender": "men",
                "headshot": 'https://randomuser.me/api/portraits/men/30.jpg',
                "rating": 4,
                "active": false,
                service: [
                    "3D Video",
                    "Virtual Tour"
                ]
            },
        ]
    },
];

