import { Box, Tabs, Tab, Paper, Typography, Avatar } from '@mui/material'
import { useState } from 'react'
import User from '../../assets/user.jpg'
import TabPanel from '../../components/TabPanel';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const Week = () => {

    const [weekList, setWeekList] = useState(demoUser)

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, backgroundColor: '#fff', p: 1.2, }}>
            {
                weekList.map((value, index) => (
                    <Box key={index}>
                        <Box>
                            <Typography sx={{ ml: .3 }}>{value.day}</Typography>
                        </Box>
                        <Box sx={{ height: 14 }}>
                            <FiberManualRecordIcon color={value.attendance === 1 ? "success" : 'error'} sx={{ fontSize: 14 }} />
                        </Box>
                    </Box>
                ))
            }
        </Box>
    )
}

const Leave = () => {

    const [empTab, setEmpTab] = useState(0);
    const handleUsersTab = (event, newValue) => {
        setEmpTab(newValue);
    };

    return (
        <Box>
            <Box component={Paper} sx={{ backgroundColor: 'background.card', borderRadius: 2, p: 1.2 }}>
                <Box sx={{ borderBottom: 0, '& .MuiTabs-scroller button:not(.Mui-selected)': { backgroundColor: 'background.light' }, '& .MuiTabs-scroller button': { minWidth: 70, minHeight: 30, fontSize: 12 } }}>
                    <Tabs
                        value={empTab}
                        onChange={handleUsersTab}
                        variant="scrollable"
                        scrollButtons="auto">
                        <Tab label={"Yesterday Leave"} />
                        <Tab label={"Long Leave"} />
                    </Tabs>
                </Box>
                <Box>
                    <TabPanel value={empTab} index={0}>
                        <Box className='scroll-bar' sx={{ maxHeight: 290, overflow: 'auto', pr: .5 }}>
                            {
                                [1, 2, 3, 4,].map((index) => (
                                    <Box key={index} sx={{ border: '1px solid #EDEDED', p: 1.2, borderRadius: 2, '&:not(:last-child)': { mb: 1 }, position: 'relative', "&:hover .week": { opacity: 1, transform: 'translateY(0%)', } }}>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, flexGrow: 1 }}>
                                                <Box>
                                                    <Avatar src={User} sx={{ width: 35, height: 35, }}></Avatar>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontWeight: 600, fontSize: 12 }}>Shane Watson</Typography>
                                                    <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>Image Editing</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ textAlign: 'right' }}>
                                                <Typography sx={{ fontSize: 10, color: 'text.secondary' }}>Oct 10, 10:50</Typography>
                                            </Box>
                                        </Box>
                                        <Box className="week" sx={{ position: 'absolute', right: 0, top: 0, opacity: 0, transition: '.4s', transform: 'translateY(-20%)' }}>
                                            <Week />
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                    </TabPanel>
                    <TabPanel value={empTab} index={1}>
                        <Box className='scroll-bar' sx={{ maxHeight: 290, overflow: 'auto', pr: .5 }}>
                            {
                                [1, 2, 3, 4,].map((index) => (
                                    <Box key={index} sx={{ border: '1px solid #EDEDED', p: 1.2, borderRadius: 2, '&:not(:last-child)': { mb: 1 }, position: 'relative', "&:hover .week": { opacity: 1, transform: 'translateY(0%)', } }}>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, flexGrow: 1 }}>
                                                <Box>
                                                    <Avatar src={User} sx={{ width: 35, height: 35, }}></Avatar>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontWeight: 600, fontSize: 12 }}>Shane Watson</Typography>
                                                    <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>Image Editing</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ textAlign: 'right' }}>
                                                <Typography sx={{ fontSize: 10, color: 'text.secondary' }}>Oct 10, 10:50</Typography>
                                            </Box>
                                        </Box>
                                        <Box className="week" sx={{ position: 'absolute', right: 0, top: 0, opacity: 0, transition: '.4s', transform: 'translateY(-20%)' }}>
                                            <Week />
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                    </TabPanel>
                </Box>
            </Box>
        </Box>
    )
}

export default Leave

const demoUser = [
    {
        "day": "S",
        "attendance": 1,
    },
    {
        "day": "M",
        "attendance": 2,
    },
    {
        "day": "T",
        "attendance": 1,
    },
    {
        "day": "W",
        "attendance": 2,
    },
    {
        "day": "T",
        "attendance": 1,
    },
    {
        "day": "F",
        "attendance": 2,
    },
    {
        "day": "S",
        "attendance": 1,
    },
]