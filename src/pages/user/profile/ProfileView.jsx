import { Box, Grid, Typography, Stack, Avatar, IconButton } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import 'react-phone-input-2/lib/material.css'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import User from '../../../assets/user.jpg'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const ProfileView = ({ handleTab }) => {

    return (
        <Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} lg={4} xl={3}>
                        <Stack sx={{ gap: 2 }}>
                            <Box sx={{ border: '1px solid', borderColor: 'background.light', borderRadius: 1 }}>
                                <Stack sx={{ p: 1.5, alignItems: 'center', gap: 1.5, borderBottom: 1, borderColor: 'inherit' }} direction={'row'}>
                                    <Avatar sx={{ backgroundColor: 'background.light' }}>
                                        <CameraAltOutlinedIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                                    </Avatar>
                                    <Box>
                                        <Typography variant='body1'>Upload Profile</Typography>
                                    </Box>
                                </Stack>
                                <Box sx={{ minHeight: 218, minWidth: 218, alignBoth: 'center' }}>
                                    <Box sx={{ display: 'inline-block', borderRadius: '50%', position: 'relative', '&:hover .overlay': { opacity: 1 } }}>
                                        <Avatar sx={{ height: 200, width: 200 }} src={User} />
                                        <Box component={'label'} sx={{ position: "absolute", inset: 0, backgroundColor: '#0000003d', borderRadius: '50%', alignBoth: 'center', opacity: 0, transition: '.3s', cursor: 'pointer', userSelect: 'none' }} className='overlay'>
                                            <Box sx={{ color: '#fff', textAlign: 'center' }}>
                                                <CameraAltOutlinedIcon />
                                                <Typography variant="body1">Upload</Typography>
                                            </Box>
                                            <input type='file' hidden />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ border: '1px solid', borderColor: 'background.light', borderRadius: 1 }}>
                                <Stack sx={{ p: 1.5, alignItems: 'center', gap: 1.5, borderBottom: 1, borderColor: 'inherit' }} direction={'row'}>
                                    <Avatar sx={{ backgroundColor: 'background.light' }}>
                                        <PersonIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                                    </Avatar>
                                    <Box>
                                        <Typography variant='body1'>Demo User</Typography>
                                        <Typography variant='body2' sx={{ color: 'text.secondarydefault', fontWeight: 600 }}>Photographer</Typography>
                                    </Box>
                                </Stack>
                                <Stack sx={{ p: 1.5, alignItems: 'center', gap: 1.5, borderBottom: 1, borderColor: 'inherit' }} direction={'row'}>
                                    <Stack sx={{ alignBoth: 'center', height: 40, width: 40, minWidth: 40, borderRadius: 1, color: 'primary.main', backgroundColor: 'background.light' }}>
                                        <MailOutlinedIcon />
                                    </Stack>
                                    <Stack >
                                        <Typography variant='body1'>Email</Typography>
                                        <Typography variant='body2' sx={{ color: 'text.secondarydefault', fontWeight: 600 }}>demouser@company.com</Typography>
                                    </Stack>
                                </Stack>
                                <Stack sx={{ p: 1.5, alignItems: 'center', gap: 1.5, borderBottom: 1, borderColor: 'inherit' }} direction={'row'}>
                                    <Stack sx={{ alignBoth: 'center', height: 40, width: 40, minWidth: 40, borderRadius: 1, color: 'primary.main', backgroundColor: 'background.light' }}>
                                        <LocalPhoneOutlinedIcon />
                                    </Stack>
                                    <Stack>
                                        <Typography variant='body1'>Phone</Typography>
                                        <Typography variant='body2' sx={{ color: 'text.secondarydefault', fontWeight: 600 }}>(+192) 9874563210</Typography>
                                    </Stack>
                                </Stack>
                                <Stack sx={{ p: 1.5, alignItems: 'center', gap: 1.5 }} direction={'row'}>
                                    <Stack sx={{ alignBoth: 'center', height: 40, width: 40, minWidth: 40, borderRadius: 1, color: 'primary.main', backgroundColor: 'background.light' }}>
                                        <LocationOnOutlinedIcon />
                                    </Stack>
                                    <Stack>
                                        <Typography variant='body1'>Location</Typography>
                                        <Typography variant='body2' sx={{ color: 'text.secondarydefault', fontWeight: 600 }}>51495 Akilah Parkways, Wilbertview, VA 10020-8599</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>

                    </Grid>
                    <Grid item xs={12} md={7} lg={8} xl={9}>
                        <Box sx={{ border: '1px solid', borderColor: 'background.light', borderRadius: 1 }}>
                            <Stack sx={{ p: 1.5, alignItems: 'center', gap: 1.5, borderBottom: 1, borderColor: 'inherit' }} direction={'row'}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant='body1' sx={{ fontWeight: 600 }}>About me</Typography>
                                </Box>
                                <Box>
                                    <IconButton aria-label="" color='info' onClick={(e) => { handleTab(e, 1) }}>
                                        <EditOutlinedIcon />
                                    </IconButton>
                                </Box>
                            </Stack>
                            <Box>
                                <Box sx={{ p: 1.5, borderBottom: 1, borderColor: 'background.light' }}>
                                    <Stack direction='row' sx={{ gap: .5, alignItems: 'center' }}>
                                        <RadioButtonCheckedIcon sx={{ fontSize: 12, color: 'warning.main' }} />
                                        <Typography variant="body1" sx={{ fontWeight: 600 }}>Bio</Typography>
                                    </Stack>
                                    <Typography variant="body1" sx={{ color: 'text.secondarydefault' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem in quisquam quas dolores ipsum itaque tempore hic molestiae nesciunt facilis sed vero eum illo adipisci dolor, quaerat quasi culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem in quisquam quas dolores ipsum itaque tempore hic molestiae nesciunt facilis sed vero eum illo adipisci dolor, quaerat quasi culpa!</Typography>
                                </Box>
                                <Box sx={{ p: 1.5, borderBottom: 1, borderColor: 'background.light' }}>
                                    <Stack direction='row' sx={{ gap: .5, alignItems: 'center' }}>
                                        <RadioButtonCheckedIcon sx={{ fontSize: 12, color: 'warning.main' }} />
                                        <Typography variant="body1" sx={{ fontWeight: 600 }}>Personal Details</Typography>
                                    </Stack>
                                    <Box sx={{ mt: 1, color: 'text.secondarydefault' }}>
                                        <Stack direction='row' sx={{ gap: 1.5, mb: 1 }}>
                                            <Box sx={{ flexBasis: 100 }}>
                                                <Typography variant="body1">Full Name </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">:</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">Demo User</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack direction='row' sx={{ gap: 1.5, mb: 1 }}>
                                            <Box sx={{ flexBasis: 100 }}>
                                                <Typography variant="body1">Address </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">:</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">51495 Akilah Parkways, Wilbertview, VA 10020-8599</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack direction='row' sx={{ gap: 1.5, mb: 1 }}>
                                            <Box sx={{ flexBasis: 100 }}>
                                                <Typography variant="body1">Zip Code </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">:</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">51495</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack direction='row' sx={{ gap: 1.5, mb: 1 }}>
                                            <Box sx={{ flexBasis: 100 }}>
                                                <Typography variant="body1">Phone </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">:</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">+0 123456789 , +0 123456789</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack direction='row' sx={{ gap: 1.5, mb: 1 }}>
                                            <Box sx={{ flexBasis: 100 }}>
                                                <Typography variant="body1">Email </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">:</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">support@example.com</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack direction='row' sx={{ gap: 1.5 }}>
                                            <Box sx={{ flexBasis: 100 }}>
                                                <Typography variant="body1">Website </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">:</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1">http://example.com</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Box>
                                <Box sx={{ p: 1.5 }}>
                                    <Stack direction='row' sx={{ gap: .5, alignItems: 'center' }}>
                                        <RadioButtonCheckedIcon sx={{ fontSize: 12, color: 'warning.main' }} />
                                        <Typography variant="body1" sx={{ fontWeight: 600 }}>Social Networks</Typography>
                                    </Stack>
                                    <Box sx={{ mt: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={6} lg={4}>
                                                <Stack sx={{ alignItems: 'center', gap: 1.5, border: '1px solid', borderRadius: 1, borderColor: 'background.light', p: 1 }} direction={'row'}>
                                                    <Stack sx={{ alignBoth: 'center', height: 35, width: 35, minWidth: 35, borderRadius: 1, color: 'primary.main', backgroundColor: 'background.light' }}>
                                                        <InstagramIcon />
                                                    </Stack>
                                                    <Stack >
                                                        <Typography variant='body1'>Instagram</Typography>
                                                        <Typography component={'a'} target='_blank' href='https://www.instagram.com/accounts/login/' variant='body2' sx={{ wordBreak: 'break-all', color: 'text.secondarydefault', fontWeight: 600 }}>https://www.instagram.com/accounts/login/</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={4}>
                                                <Stack sx={{ alignItems: 'center', gap: 1.5, border: '1px solid', borderRadius: 1, borderColor: 'background.light', p: 1 }} direction={'row'}>
                                                    <Stack sx={{ alignBoth: 'center', height: 35, width: 35, minWidth: 35, borderRadius: 1, color: 'primary.main', backgroundColor: 'background.light' }}>
                                                        <XIcon />
                                                    </Stack>
                                                    <Stack >
                                                        <Typography variant='body1'>X</Typography>
                                                        <Typography component={'a'} target='_blank' href='https://x.com/i/flow/login' variant='body2' sx={{ wordBreak: 'break-all', color: 'text.secondarydefault', fontWeight: 600 }}>https://x.com/i/flow/login</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={4}>
                                                <Stack sx={{ alignItems: 'center', gap: 1.5, border: '1px solid', borderRadius: 1, borderColor: 'background.light', p: 1 }} direction={'row'}>
                                                    <Stack sx={{ alignBoth: 'center', height: 35, width: 35, minWidth: 35, borderRadius: 1, color: 'primary.main', backgroundColor: 'background.light' }}>
                                                        <YouTubeIcon />
                                                    </Stack>
                                                    <Stack >
                                                        <Typography variant='body1'>YouTube</Typography>
                                                        <Typography component={'a'} target='_blank' href='https://youtube.com/' variant='body2' sx={{ wordBreak: 'break-all', color: 'text.secondarydefault', fontWeight: 600 }}>https://youtube.com/</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={4}>
                                                <Stack sx={{ alignItems: 'center', gap: 1.5, border: '1px solid', borderRadius: 1, borderColor: 'background.light', p: 1 }} direction={'row'}>
                                                    <Stack sx={{ alignBoth: 'center', height: 35, width: 35, minWidth: 35, borderRadius: 1, color: 'primary.main', backgroundColor: 'background.light' }}>
                                                        <FacebookIcon />
                                                    </Stack>
                                                    <Stack >
                                                        <Typography variant='body1'>Facebook</Typography>
                                                        <Typography component={'a'} target='_blank' href='https://www.facebook.com/login/' variant='body2' sx={{ wordBreak: 'break-all', color: 'text.secondarydefault', fontWeight: 600 }}>https://www.facebook.com/login/</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={4}>
                                                <Stack sx={{ alignItems: 'center', gap: 1.5, border: '1px solid', borderRadius: 1, borderColor: 'background.light', p: 1 }} direction={'row'}>
                                                    <Stack sx={{ alignBoth: 'center', height: 35, width: 35, minWidth: 35, borderRadius: 1, color: 'primary.main', backgroundColor: 'background.light' }}>
                                                        <LinkedInIcon />
                                                    </Stack>
                                                    <Stack >
                                                        <Typography variant='body1'>LinkedIn</Typography>
                                                        <Typography component={'a'} target='_blank' href='https://www.linkedin.com/company/login' variant='body2' sx={{ wordBreak: 'break-all', color: 'text.secondarydefault', fontWeight: 600 }}>https://www.linkedin.com/company/login</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}

export default ProfileView