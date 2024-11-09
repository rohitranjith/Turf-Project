import { Box, List, Stack, Typography, ListItemButton, ListItemIcon, ListItemText, Button, IconButton, Avatar, keyframes, Badge } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import dashboardIcon from '../assets/dashboard.png'
import bookingIcon from '../assets/booking.png'
import chatIcon from '../assets/chat.png'
import User from '../assets/user.jpg'
import invoiceIcon from '../assets/invoice.png'
import walletIcon from '../assets/wallet.png'
import profileIcon from '../assets/profile.png'
import Logo from '../assets/logo-fav.png'
import useSignout from '../hooks/use-signout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';

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
        color: "primary.main",
        fontWeight: 600
    }
}

const ringAnimate = keyframes`
	0% { transform: rotate(0);}
  	25% { transform: rotate(-15deg);}
  	50% { transform: rotate(0deg);}
  	75% { transform: rotate(15deg);}
  	100% { transform: rotate(0);}
`

const ListMenu = ({ menuItem, open }) => {

    return (

        <NavLink to={menuItem.menu_link} className={"parent-nav"}>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2 }}>
                <ListItemIcon sx={{ minWidth: 0, mx: 'auto', mr: open ? 1.5 : "auto", justifyContent: 'center', flexDirection: "column", alignItems: "center" }}>
                    <Box component={"img"} src={menuItem.menu_icon} sx={{ height: 20, filter: "brightness(0) invert(1)" }} alt="" />
                    {!open && <Typography variant="body1" sx={{ fontSize: 11, mt: .3 }} color="#fff">{menuItem.menu_alias_name}</Typography>}
                </ListItemIcon>
                <ListItemText primary={menuItem.menu_alias_name} sx={{ opacity: open ? 1 : 0, display: open ? "block" : "none", color: '#fff' }} />
            </ListItemButton>
        </NavLink>
    )
}

const Sidebar = ({ open }) => {
    const signOut = useSignout();
    const navigate = useNavigate()

    return (
        <Box sx={{ display: { xs: "none", md: "block" }, width: { md: 80, lg: open ? 280 : 80 }, overflow: "hidden", height: '100vh', flexGrow: 1, position: "sticky", top: 0, zIndex: 100, "& *": { boxSizing: "border-box" }, backgroundColor: 'background.sidebar' }} >
            <Stack className={`sidebar`} sx={{ gap: 2, justifyContent: "space-between", transition: '.5s', height: '100%', boxSizing: "border-box", position: "relative" }} >
                <Box>
                    <Box sx={{ py: 4, px: open ? 2 : 1, width: 1, boxSizing: "border-box" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, justifyContent: open ? "unset" : "center" }}>
                            <img src={Logo} style={{ maxWidth: open ? 70 : 60, transition: '.5s' }} alt="" />
                            {
                                open &&
                                <Box>
                                    <Typography sx={{ fontSize: 24, color: 'text.default' }}>Champion's</Typography>
                                </Box>
                            }
                        </Box>
                    </Box>
                    <Box sx={{ maxHeight: "calc(100vh - 310px)", overflowY: "auto", overflowX: "hidden", height: '100%', pt: .2 }} className="scroll-bar">
                        <List component="nav" sx={{ "& *": { transition: ".4s all ease", color: "#fff" }, width: '100%', "& .parent-nav:has(.active) .menu-head > .MuiListItemButton-root , & .parent-nav.active  > .MuiListItemButton-root": { ...linkStyles }, "& a": { textDecoration: "none" }, '& .MuiListItemText-root': { my: .2 } }}>
                            {menuItems.map((item, index) => <ListMenu open={open} menuItem={item} key={index} />)}
                        </List>
                    </Box>
                </Box>
                {/* <Box sx={{ px: 1, py: 2, boxSizing: "border-box" }}>
                    <Box sx={{ display: "flex", flexDirection: open ? "row" : "column-reverse", gap: 1, color: '#ffffffd9' }}>
                        <Button variant="outlined" color="inherit" startIcon={<LogoutIcon sx={{ rotate: "180deg", ml: open ? 0 : 1 }} />} sx={{ border: 1, flexGrow: 1, textAlign: "start", fontSize: 12, p: 1, minWidth: 0 }}
                            onClick={() => {
                                signOut()
                            }}
                        >{open && "Sign Out"}</Button>
                    </Box>
                </Box> */}
                <Box sx={{ px: 1.5, py: open ? 2 : 1, boxSizing: "border-box" }}>
                    <Box sx={{ borderRadius: 1.5, p: 1, backgroundColor: '#218e73' }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: open ? "space-between" : "center", }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "start" }}>
                                <Box sx={{ position: "relative", borderRadius: "50%", "&::after": { content: "''", height: "12px", width: "12px", bgcolor: "success.light", borderRadius: "50%", position: "absolute", bottom: 0, right: 0, border: 1, borderColor: "text.secondary" } }}>
                                    <Avatar alt="" src={User} />
                                </Box>
                                {open &&
                                    <Box>
                                        <Typography variant="body1" sx={{ lineHeight: "normal", color: '#fff' }}>Demo User</Typography>
                                        <Typography variant="body2" sx={{ color: "#fff", fontSize: 12, }}>User</Typography>
                                    </Box>
                                }
                            </Box>
                            {open &&
                                <IconButton sx={{ color: "#ffffffe0", "&:hover svg": { animation: `${ringAnimate} .3s linear` } }}>
                                    <Badge color="error" variant="dot" invisible={false} sx={{ "& span": { top: 2, right: 2 } }}>
                                        <NotificationsActiveIcon />
                                    </Badge>
                                </IconButton>
                            }
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: open ? "row" : "column-reverse", gap: 1, mt: 2 }}>
                            <Button onClick={() => {
                                signOut()
                            }} variant="contained" color="primary" startIcon={<LogoutIcon sx={{ rotate: "180deg", ml: open ? 0 : 1 }} />} sx={{ border: 1, borderColor: "#ffffff1f", flexGrow: 1, backgroundColor: '#218e73', textAlign: "start", "&:hover": { backgroundColor: '#218e73' }, fontSize: 12, px: 1, minWidth: 0 }}>{open && "Sign Out"}</Button>
                            <Button onClick={() => {
                                navigate("/profile")
                            }} variant="contained" color="primary" sx={{ flexGrow: 0, border: 1, borderColor: "#ffffff1f", backgroundColor: '#218e73', textAlign: "start", "&:hover": { backgroundColor: '#218e73' }, minWidth: 0, px: 1, color: '#ffffffe0', "&:hover svg": { rotate: "-75deg" } }}><SettingsIcon sx={{ transition: ".3s all ease" }} /></Button>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default Sidebar