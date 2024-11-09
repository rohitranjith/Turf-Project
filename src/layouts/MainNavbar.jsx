import { Box, List, Stack, Typography, ListItemButton, ListItemIcon, Badge, Menu, ListItemText, Collapse, Button, Avatar, IconButton, keyframes, Drawer, useMediaQuery, Switch, MenuItem, ListItemAvatar } from '@mui/material'
import { useState } from 'react'
import { NavLink, useNavigate, useLocation, } from 'react-router-dom'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import User from '../assets/user.jpg'
import dashboardIcon from '../assets/dashboard.png'
import bookingIcon from '../assets/booking.png'
import chatIcon from '../assets/chat.png'
import invoiceIcon from '../assets/invoice.png'
import walletIcon from '../assets/wallet.png'
import profileIcon from '../assets/profile.png'
import Logo from '../assets/logo-fav.png'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../redux/reducers/ui-slice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import useSignout from '../hooks/use-signout';

const SwitchTheme = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',

        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#000',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#000',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : 'primary.main',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));


const menuItems = [
    {
        "id": 1,
        "menu_name": "Dashboard",
        "menu_alias_name": "Dashboard",
        "menu_link": "/dashboard",
        "menu_icon": dashboardIcon,
        "is_active": true,
        "sub_menu": []
    },
    {
        "id": 2,
        "menu_name": "My Bookings",
        "menu_alias_name": "My Bookings",
        "menu_link": "/orders",
        "menu_icon": bookingIcon,
        "is_active": true,
        "sub_menu": []
    },
    {
        "id": 3,
        "menu_name": "Chat",
        "menu_alias_name": "Chat",
        "menu_link": "/chat",
        "menu_icon": chatIcon,
        "is_active": true,
        "sub_menu": []
    },
    {
        "id": 4,
        "menu_name": "Invoice",
        "menu_alias_name": "Invoice",
        "menu_link": "/invoice",
        "is_active": true,
        "menu_icon": invoiceIcon,
        "sub_menu": []
    },
    {
        "id": 5,
        "menu_name": "Wallet",
        "menu_alias_name": "Wallet",
        "menu_link": "/wallet",
        "menu_icon": walletIcon,
        "is_active": true,
        "sub_menu": []
    },
    {
        "id": 6,
        "menu_name": "Profile",
        "menu_alias_name": "Profile",
        "menu_link": "/profile",
        "menu_icon": profileIcon,
        "is_active": true,
        "sub_menu": []
    },

]

const ringAnimate = keyframes`
	0% { transform: rotate(0);}
  	25% { transform: rotate(-15deg);}
  	50% { transform: rotate(0deg);}
  	75% { transform: rotate(15deg);}
  	100% { transform: rotate(0);}
`

const linkStyles = {
    "& svg": { fill: "#fff" },
    bgcolor: "#fff",
    color: "#000",
    "&:hover": { bgcolor: "background.card" },
    "& .MuiListItemText-primary": {
        color: "primary.main",
        fontWeight: 600
    },
    "& .MuiListItemIcon-root img": {
        filter: "none"
    },
    "& .MuiListItemIcon-root p": {
        color: "#fff",
        fontWeight: 600
    }
}

const childLinkStyles = {
    position: 'relative',
    pl: 2,
    '&:before': {
        position: 'absolute',
        content: '""',
        height: '100%',
        left: 22,
        top: 0,
        borderRight: '1px dashed #ffffff80'
    },
    "& .MuiListItemText-primary": {
        color: "#ffffff80"
    },
    ".MuiListItemButton-root": {
        position: "relative",
        "&:before": {
            content: "''",
            position: "absolute",
            width: "15px",
            left: "10px",
            borderTop: '1px dashed #ffffff80'
        }
    },
    "& .active > .MuiListItemButton-root .MuiListItemText-primary": {
        color: "#fff"
    },
    "& .active > .MuiListItemButton-root:before": {
        borderColor: "#fff"
    }
}

const ListMenu = ({ menuItem, open, setOpen }) => {
    const [isViewed, setIsViewed] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()

    const handleClick = (e) => {
        setIsViewed(!isViewed)
    };
    return (
        <>
            {menuItem.sub_menu.length ?
                <>
                    <Box className={location.pathname.match(menuItem.menu_link) ? 'active parent-nav' : "parent-nav"}>
                        <Box className='menu-head'>
                            <ListItemButton onClick={(e) => { handleClick(e) }} sx={{ px: 2 }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: 1.5, justifyContent: 'center', flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                                    <Box component={"img"} src={menuItem.menu_icon} sx={{ height: 20, filter: "brightness(0) invert(1)" }} alt="" />
                                </ListItemIcon>
                                <ListItemText primary={menuItem.menu_alias_name} />
                                {isViewed ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </Box>
                        <Collapse in={isViewed} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding sx={{ ...childLinkStyles }}>
                                {menuItem.sub_menu.map((item, index) => (
                                    <NavLink key={index} to={`${menuItem.menu_link}${item.menu_link}`}>
                                        <ListItemButton disableRipple sx={{ pl: 4 }} onClick={() => { navigate(`${menuItem.menu_link}${item.menu_link}`); setOpen(!open) }}>
                                            <ListItemText primary={item.menu_alias_name} />
                                        </ListItemButton>
                                    </NavLink>
                                ))}
                            </List>
                        </Collapse>
                    </Box>

                </>
                :
                <NavLink to={menuItem.menu_link} className={"parent-nav"}>
                    <ListItemButton onClick={(e) => { setOpen(!open) }} sx={{ minHeight: 48, px: 2.5, }}>
                        <ListItemIcon sx={{ minWidth: 0, mx: 'auto', mr: 1.5, justifyContent: 'center', flexDirection: "column", alignItems: "center" }}>
                            <Box component={"img"} src={menuItem.menu_icon} sx={{ height: 20, filter: "brightness(0) invert(1)" }} alt="" />
                        </ListItemIcon>
                        <ListItemText primary={menuItem.menu_alias_name} />
                    </ListItemButton>
                </NavLink>
            }
        </>
    )
}


const MainNavbar = ({ setOpenSideBar, isOpenSidebar }) => {

    const [open, setOpen] = useState(false)
    const { isDarkMode } = useSelector(state => state.ui)
    const [isDark, setIsDark] = useState(isDarkMode)
    const dispatch = useDispatch()
    const signOut = useSignout();
    const navigate = useNavigate();
    const isTabView = useMediaQuery("(max-width: 900px)")
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const user = {}

    const handleThemeColor = (e) => {
        setIsDark(e.target.checked)
        dispatch(uiActions.setDarkMode(e.target.checked))
    }
    return (
        <Box sx={{ display: "flex", alignItems: "center", width: 1, justifyContent: "space-between", }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton onClick={() => { !isTabView ? setOpenSideBar() : setOpen(true) }}><MenuOpenIcon sx={{ transform: !isOpenSidebar && !isTabView ? 'scaleX(-1)' : 'scaleX(1)' }} /></IconButton>
                {/* <Box>
                    <SwitchTheme checked={isDark} onChange={handleThemeColor} />
                </Box> */}
            </Box>
            <Box >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "end", textAlign: "end" }}>
                    <Box>
                        <IconButton onClick={() => { navigate('/') }} sx={{ color: "primary.main", "&:hover svg": { animation: `${ringAnimate} .3s linear` } }}>
                            <Badge color="error" variant="dot" invisible={false} sx={{ "& span": { top: 2, right: 2 } }}>
                                <NotificationsActiveIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box>
                        <Avatar sx={{ cursor: "pointer" }} alt={user && user.first_name} src={User} onClick={(event) => { setIsOpenMenu(event.currentTarget); }} />
                    </Box>
                    <Menu
                        anchorEl={isOpenMenu}
                        open={Boolean(isOpenMenu)}
                        onClose={() => setIsOpenMenu(false)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        sx={{ mt: 1, '& .MuiMenuItem-root': { borderRadius: 0, '&:hover': { backgroundColor: 'transparent' } }, '& .MuiMenuItem-root:last-of-type': { borderRadius: '0px 0px 5px 5px' }, '& .MuiMenuItem-root:first-of-type': { borderRadius: '5px 5px 0px 0px' } }}

                    >
                        <MenuItem onClick={() => { setIsOpenMenu(false) }} sx={{ gap: 1, borderBottom: 1, borderColor: 'background.light', minWidth: 180, '&:hover': { backgroundColor: 'transparent' } }} >
                            <ListItemAvatar sx={{ minWidth: 'auto' }}>
                                <Avatar sx={{ cursor: "pointer", width: 35, height: 35 }} alt={user && user.first_name} src={User} onClick={(event) => { setIsOpenMenu(event.currentTarget); }} />
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography sx={{ lineHeight: "normal", fontWeight: 600, color: 'primary.main', textAlign: 'left' }}>Demo User</Typography>
                                <Typography sx={{ fontSize: 12, color: 'primary.main', textAlign: 'left' }}>Photographer</Typography>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem sx={{ gap: 1, borderBottom: 1, borderColor: 'background.light', px: 1 }} onClick={() => {
                            navigate("/profile")
                            setIsOpenMenu(false)

                        }}>
                            <ListItemIcon sx={{ minWidth: 35, height: 35, backgroundColor: 'background.light', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 1 }}>
                                <AccountCircleIcon color='primary' sx={{ fontSize: 20 }} />
                            </ListItemIcon>
                            <ListItemText sx={{ fontSize: 14 }}>Profile</ListItemText>
                        </MenuItem>
                        <MenuItem sx={{ gap: 1, borderBottom: 1, borderColor: 'background.light', px: 1 }} onClick={() => {
                            signOut()
                            setIsOpenMenu(false)
                        }}>
                            <ListItemIcon sx={{ minWidth: 35, height: 35, backgroundColor: 'background.light', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 1 }}>
                                <LogoutIcon color='primary' sx={{ rotate: "180deg", fontSize: 18, }} />
                            </ListItemIcon>
                            <ListItemText sx={{ fontSize: 14 }}>Sign Out</ListItemText>
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>
            <Drawer
                anchor="left"
                open={open}
                onClose={() => { setOpen(false) }}
                sx={{ width: 280, display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ width: 260, backgroundColor: 'background.sidebar', overflow: "hidden", height: '100vh', "& *": { boxSizing: "border-box" } }} >
                    <Stack sx={{ gap: 2, justifyContent: "space-between", transition: '.5s', height: '100%', }} >
                        <Box>
                            <Box sx={{ py: 2, px: 2, width: 1, boxSizing: "border-box" }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                                    <img src={Logo} style={{ maxWidth: 60 }} alt="" />
                                    <Box>
                                        <Typography sx={{ fontSize: 24, color: 'text.default' }}>Champion's</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ maxHeight: "calc(100vh - 255px)", overflowY: "auto", overflowX: "hidden", height: '100%', pt: .2 }} className="scroll-bar">
                                <List component="nav" sx={{ "& *": { transition: ".4s all ease", color: "#fff" }, width: '100%', "& .parent-nav.active > .MuiListItemButton-root , & .parent-nav.active > .menu-head > .MuiListItemButton-root ": { ...linkStyles }, "& a": { textDecoration: "none" } }}>
                                    {menuItems.map((item, index) => <ListMenu open={open} setOpen={setOpen} menuItem={item} key={index} />)}
                                </List>
                            </Box>
                        </Box>
                        <Box sx={{ px: 1, py: 2, boxSizing: "border-box" }}>
                            <Box sx={{ display: "flex", flexDirection: open ? "row" : "column-reverse", gap: 1, color: '#ffffffd9' }}>
                                <Button variant="outlined" color="inherit" startIcon={<LogoutIcon sx={{ rotate: "180deg", ml: open ? 0 : 1 }} />} sx={{ border: 1, flexGrow: 1, textAlign: "start", fontSize: 12, px: 1, py: 1, minWidth: 0 }}
                                    onClick={() => {
                                        signOut()
                                        dispatch(uiActions.setDarkMode(false))
                                    }}>Sign Out</Button>
                            </Box>
                        </Box>
                    </Stack >
                </Box >
            </Drawer >
        </Box >
    )
}

export default MainNavbar