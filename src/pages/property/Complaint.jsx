import { Box, Typography, Paper, Avatar, Chip, Drawer, Button, Tabs, Tab, useTheme, Grid } from '@mui/material'
import User from '../../assets/user.jpg'
import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import TabPanel from '../../components/TabPanel';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import EmployeeDetails from './EmployeeDetails';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const Complaint = () => {

    const theme = useTheme();
    const { isDarkMode } = useSelector(state => state.ui)
    const [complaintopen, setComplaintOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setComplaintOpen(newOpen);
    };

    const [empTab, setEmpTab] = useState(0);
    const handleUsersTab = (event, newValue) => {
        setEmpTab(newValue);
    };

    const saleRevenueOpt = {
        title: {
            // text: 'Sales & Revenue',
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: 'inherit',
                color: theme.palette.text.primary
            },
        },
        chart: {
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
            foreColor: theme.palette.text.primary

        },
        stroke: {
            // curve: 'straight',
            width: 1,
            // lineCap: 'square',
            // dashArray: 5,
        },
        colors: ['#26bf94', '#845adf'],
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            // type: 'date',
            labels: {
                show: true,
                style: {
                    fontFamily: 'inherit',
                    fontWeight: 500,
                    fontSize: 10,
                },
                // formatter: function (val) {
                //     return moment(val).format('DD/MM/YYYY');
                // },
            },
            tooltip: {
                enabled: true,
                style: {
                    fontFamily: 'inherit',
                    fontWeight: 500,
                    color: '#222'
                },
            },
        }, yaxis: {
            // max: 8,
            min: 0,
            labels: {
                show: true,

                style: {
                    fontFamily: 'inherit',
                    fontWeight: 500,
                },
            },
            axisBorder: {
                show: false
            },
        },
        legend: {
            fontFamily: 'inherit',
            offsetY: 10,
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                radius: 12,
                offsetX: 0,
                offsetY: 0
            },
            style: {
                fontFamily: 'inherit',
                fontWeight: 600
            }
        },
        tooltip: {
            enabled: true,
            style: {
                fontSize: '12px',
                fontFamily: 'inherit',
                fontWeight: 500,
            },
            theme: isDarkMode ? 'dark' : 'light',
            onDatasetHover: {
                highlightDataSeries: true,
            },
            x: {
                show: true,
            },
            marker: {
                show: true,
            },
            items: {
                display: 'flex',
            },
        },
    }

    const [series, setSeries] = useState([{
        name: 'Revenue',
        data: [
            { x: 'Jan', y: 4 },
            { x: 'Feb', y: 6 },
            { x: 'Mar', y: 5 },
            { x: 'Apr', y: 4 },
            { x: 'May', y: 6 },
            { x: 'June', y: 7 },
            { x: 'July', y: 6 },
            { x: 'Aug', y: 5 },
            { x: 'Sept', y: 7 },
            { x: 'Oct', y: 6 },
            { x: 'Nov', y: 8 },
            { x: 'Dec', y: 5 }
        ]

    }])

    return (
        <>

            <Box component={Paper} sx={{ backgroundColor: 'background.card', borderRadius: 2, p: 1.2 }}>
                <Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Complaint</Typography>
                </Box>
                <Box className='scroll-bar' sx={{ mt: 1, maxHeight: 290, overflow: 'auto', pr: .5 }}>
                    {
                        [1, 2, 3, 4,].map((index) => (
                            <Box key={index} sx={{ backgroundColor: '#f6f6f6', p: 1.2, borderRadius: 10, '&:not(:last-child)': { mb: 1 }, cursor: 'pointer' }} onClick={() => (setComplaintOpen(true))}>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, }}>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, flexGrow: 1 }}>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, }}>
                                            <Box>
                                                <Avatar src={User} sx={{ width: 35, height: 35, }}></Avatar>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontWeight: 600, fontSize: 12 }}>Mandhana</Typography>
                                                <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>Developer</Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Chip label="High" size='small' sx={{ fontSize: 11, height: 18, lineHeight: 'normal' }} color='error' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', pr: .5 }}>
                                        <Typography sx={{ fontSize: 10, color: 'text.secondary' }}>Oct 10,10:50</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>

            <Drawer anchor='right' open={complaintopen} onClose={toggleDrawer(false)} PaperProps={{
                sx: {
                    borderRadius: 0,
                    width: '100%',
                    maxWidth: { xs: '95%', sm: 500, md: 750 },
                }
            }}>
                <Box>
                    <Box sx={{ p: 1.5 }}>
                        <Box sx={{ mb: 2 }}>
                            <Button variant='text' startIcon={<ArrowBackIosNewIcon />} onClick={() => (setComplaintOpen(false))}>Back</Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center', p: 1.5, border: '1px solid #EDEDED', borderRadius: 2, }}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1.5, }}>
                                    <Box>
                                        <Avatar src={User} sx={{ width: 45, height: 45, }}></Avatar>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: 600, fontSize: 15 }}>Mandhana</Typography>
                                        <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>Developer</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Chip label="High" size='small' sx={{ fontSize: 11, height: 18, lineHeight: 'normal', mt: .8 }} color='error' />
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                                <Box>
                                    <Button variant='outlined' sx={{ '& .MuiButton-iconSizeSmall': { mr: 0 }, minWidth: 36, minHeight: 32 }} startIcon={<EmailOutlinedIcon />}></Button>
                                </Box>
                                <Box>
                                    <Button variant='outlined' sx={{ '& .MuiButton-iconSizeSmall': { mr: 0 }, minWidth: 36, minHeight: 32 }} startIcon={<CallOutlinedIcon />}></Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ mt: 1.5 }}>
                        <Box sx={{ borderBottom: 1, borderColor: '#EDEDED', '& .MuiTabs-scroller button': { fontSize: 13, borderRadius: '8px 8px 0px 0px', } }}>
                            <Tabs
                                sx={{ px: 1.5 }}
                                value={empTab}
                                onChange={handleUsersTab}
                                variant="scrollable"
                                scrollButtons="auto">
                                <Tab label={"Profile"} />
                                <Tab label={"Documents"} />
                                <Tab label={"Job Info"} />
                                <Tab label={"Achivements & Complaints"} />
                            </Tabs>
                        </Box>
                        <Box sx={{ p: 2 }}>
                            <TabPanel value={empTab} index={0}>
                                <Box>
                                    <Box>
                                        <Typography sx={{ fontSize: 15 }}>Employee Details</Typography>
                                    </Box>
                                    <Box sx={{ mt: 2.5, }}>
                                        <EmployeeDetails />
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel value={empTab} index={1}>
                                <Box>
                                    <Box>
                                        <Typography sx={{ fontSize: 15 }}>Employee Documents</Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Grid container spacing={2}>
                                            {
                                                [...Array(10).keys()].map((index) => (
                                                    <Grid key={index} item xs={12} sm={4}>
                                                        <Box sx={{ border: '1px solid #ebf0f3', p: 1, borderRadius: 3 }}>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                <Box sx={{ backgroundColor: '#ffecec', height: 42, width: 42, minWidth: 42, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                                                                    <PictureAsPdfIcon color='error' />
                                                                </Box>
                                                                <Box>
                                                                    <Typography sx={{ maxLines: 1 }}>Resume.pdf</Typography>
                                                                    <Typography sx={{ maxLines: 1, color: 'success.main', fontSize: 12 }}>Given</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel value={empTab} index={2}>
                                <Box>
                                    <Box>
                                        <Typography sx={{ fontSize: 15 }}>Employee Yearly Report</Typography>
                                    </Box>
                                    <Box component={Paper} sx={{ border: '1px solid #EDEDED', borderRadius: 2, mt: 2.5, pr: 1, boxShadow: 'none' }}>
                                        <ReactApexChart options={saleRevenueOpt} series={series} type="area" height={300} />
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography sx={{ fontSize: 15, mb: 1.5 }}>Employee Working Details.</Typography>
                                        <Grid container spacing={2}>
                                            {
                                                [...Array(4).keys()].map((index) => (
                                                    <Grid key={index} item xs={12} sm={6}>
                                                        <Box sx={{ border: '1px solid #ebf0f3', p: 2, borderRadius: 3 }}>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                                <Box sx={{ backgroundColor: '#ffecec', height: 50, width: 50, minWidth: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 3 }}>
                                                                    <ImageOutlinedIcon color='error' sx={{ fontSize: 30 }} />
                                                                </Box>
                                                                <Box>
                                                                    <Typography sx={{ maxLines: 1, fontSize: 22, lineHeight: 'normal' }}>245</Typography>
                                                                    <Typography sx={{ maxLines: 1, color: 'text.secondary', fontSize: 11, lineHeight: 'normal' }}>Working Files</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel value={empTab} index={3}>
                                <Box>
                                    <Box>
                                        <Box>
                                            <Typography sx={{ fontSize: 15 }}>Employee Achivement & Complaints</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography sx={{ fontSize: 15 }}>Bio :</Typography>
                                            <Typography sx={{ color: 'text.secondary', fontSize: 13, mt: 1.5, lineHeight: 1.8 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat numquam magni laborum quae corporis nisi suscipit vitae tempore porro aliquam sint facilis a esse officiis harum, unde ex hic obcaecati.Quaerat numquam magni laborum quae corporis nisi suscipit vitae tempore porro aliquam sint.</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Box>
                                                <Typography sx={{ fontSize: 15, mb: 2 }}>Achivement :</Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                                    <Box sx={{ height: 24 }}>
                                                        <CheckOutlinedIcon color='success' />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ color: 'text.secondary' }}>She won the Best Employee of the Month award twice.</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }}>
                                                    <Box sx={{ height: 24 }}>
                                                        <CheckOutlinedIcon color='success' />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ color: 'text.secondary' }}>She won the Best Team Leader of the Month award once.</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Box>
                                                <Typography sx={{ fontSize: 15, mb: 2 }}>Complaint :</Typography>
                                                <Box component={Paper} sx={{ p: 1.5, borderRadius: 1, boxShadow: '0px 0px 2px 2px #0000000a', mb: 2, }}>
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: "space-between", alignItems: 'center' }}>
                                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, }}>
                                                            <Box>
                                                                <Typography sx={{ fontSize: 15 }}>Mandhana</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Chip label="High" size='small' sx={{ fontSize: 11, height: 18, lineHeight: 'normal', }} color='error' />
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ textAlign: 'right' }}>
                                                            <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>Oct 10, 10:50</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Typography sx={{ color: 'text.secondary', fontSize: 13, lineHeight: 1.8 }}>I would like to bring to your attention that the workload distribution in our team feels imbalanced, leading to excessive pressure on a few members, including myself. I kindly request a review of this situation to ensure fair allocation of tasks.</Typography>
                                                    </Box>
                                                </Box>
                                                <Box component={Paper} sx={{ p: 1.5, borderRadius: 1, boxShadow: '0px 0px 2px 2px #0000000a', }}>
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: "space-between", alignItems: 'center' }}>
                                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, }}>
                                                            <Box>
                                                                <Typography sx={{ fontSize: 15 }}>Mandhana</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Chip label="Medium" size='small' sx={{ fontSize: 11, height: 18, lineHeight: 'normal', }} color='warning' />
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ textAlign: 'right' }}>
                                                            <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>Jun 11, 11:11</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Typography sx={{ color: 'text.secondary', fontSize: 13, lineHeight: 1.8 }}>I would like to kindly request that the company ensure compliance with the observance of all government-mandated holidays as per labor laws. It would be greatly appreciated if these holidays are included in our official leave schedule to maintain fairness and alignment with legal requirements.</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </TabPanel>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default Complaint