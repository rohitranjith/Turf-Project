import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';

const EmployeeDetails = () => {
    return (
        <Box>
            <Box component={Paper} sx={{ border: '1px solid #EDEDED', borderRadius: 2, boxShadow: 'none', mb: 2 }}>
                <Box sx={{ p: 1.5, backgroundColor: '#f8f8f8' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                        <Box sx={{ height: 24 }}>
                            <AssignmentIndOutlinedIcon sx={{ color: 'text.secondary', fontSize: 24 }} />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: 14 }}>Personal Information.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ p: 1.5, }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>First Name</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>Rohit</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Last Name</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>Sharma</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Email</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>rohit@gmail.com</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Phone</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>+91 9080969392</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box component={Paper} sx={{ border: '1px solid #EDEDED', borderRadius: 2, boxShadow: 'none', mb: 2 }}>
                <Box sx={{ p: 1.5, backgroundColor: '#f8f8f8' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                        <Box sx={{ height: 24 }}>
                            <PhotoCameraFrontOutlinedIcon sx={{ color: 'text.secondary', fontSize: 24 }} />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: 14 }}>Employee Details.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ p: 1.5, }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Job Title</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>Virtual Tour</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Department</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>Photo Editing</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Joining Date</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>15-12-2022</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Releving Date</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>15-12-2024</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box component={Paper} sx={{ border: '1px solid #EDEDED', borderRadius: 2, boxShadow: 'none', mb: 2 }}>
                <Box sx={{ p: 1.5, backgroundColor: '#f8f8f8' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                        <Box sx={{ height: 24 }}>
                            <PersonPinOutlinedIcon sx={{ color: 'text.secondary', fontSize: 24 }} />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: 14 }}>Employee Address.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ p: 1.5, }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Address</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>State bank colony</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>City</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>Salem</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>State</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>Tamilnadu</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Pincode</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>636-501</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box component={Paper} sx={{ border: '1px solid #EDEDED', borderRadius: 2, boxShadow: 'none', mb: 2 }}>
                <Box sx={{ p: 1.5, backgroundColor: '#f8f8f8' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                        <Box sx={{ height: 24 }}>
                            <BadgeOutlinedIcon sx={{ color: 'text.secondary', fontSize: 24 }} />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: 14 }}>Employee Working Details.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ p: 1.5, }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Working Hours</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>2451</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Working Files</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>4554</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Extra Time</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>0635</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Permission</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>0235</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box component={Paper} sx={{ border: '1px solid #EDEDED', borderRadius: 2, boxShadow: 'none', mb: 2 }}>
                <Box sx={{ p: 1.5, backgroundColor: '#f8f8f8' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                        <Box sx={{ height: 24 }}>
                            <ThreePOutlinedIcon sx={{ color: 'text.secondary', fontSize: 24 }} />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: 14 }}>Employee Agreement.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ p: 1.5, }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Create Contract</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>Apr 15,2022</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Start Work</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>Apr 12,2022</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Worker Type</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 13 }}>Photo Editing</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default EmployeeDetails