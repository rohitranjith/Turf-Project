import { Box, List, Stack, ListItemText, IconButton, Drawer, Switch, ListItemButton, Button, } from '@mui/material'
import { useState } from 'react'
import { NavLink, useLocation, useNavigate, } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Logo from '../assets/game-logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../redux/reducers/ui-slice';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const menuItems = [
    {
        "id": 1,
        "menu_name": "home",
        "menu_alias_name": "Home",
        "menu_link": "/",
        // "menu_icon": dashboardIcon,
        "is_active": true,
    },
    {
        "id": 2,
        "menu_name": "About Us",
        "menu_alias_name": "About Us",
        "menu_link": "/about-us",
        // "menu_icon": DownloadIcon,
        "is_active": true,
    },
    {
        "id": 3,
        "menu_name": "Services",
        "menu_alias_name": "Services",
        "menu_link": "/services",
        // "menu_icon": EditorIcon,
        "is_active": true,
    },
    {
        "id": 4,
        "menu_name": "Event",
        "menu_alias_name": "Event",
        "menu_link": "/event",
        // "menu_icon": EditorIcon,
        "is_active": true,
    },
    {
        "id": 5,
        "menu_name": "Contact Us",
        "menu_alias_name": "Contact Us",
        "menu_link": "/contact-us",
        // "menu_icon": FileManagerIcon,
        "is_active": true,
    },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const { isDarkMode } = useSelector(state => state.ui)
    const [isDark, setIsDark] = useState(isDarkMode)
    const dispatch = useDispatch()
    const location = useLocation()
    const handleThemeColor = (e) => {
        setIsDark(e.target.checked)
        dispatch(uiActions.setDarkMode(e.target.checked))
    }

    console.log(location.pathname)

    return (
        <Box sx={{ display: "flex", alignItems: "center", width: 1, justifyContent: "space-between", maxWidth: '1540px', mx: 'auto' }}>
            <Box sx={{ display: 'inline-flex' }}>
                <Box sx={{ maxWidth: { xs: 180, sm: "100%" } }}>
                    <Box onClick={() => { navigate('/') }} component={'img'} src={Logo} sx={{ width: '100%', height: '100%', cursor: 'pointer' }} alt="" />
                </Box>
            </Box>
            <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "end", textAlign: "end" }}>
                    <List component="div" sx={{ display: { xs: 'none', md: "flex" }, '& a': { textDecoration: 'none' }, "& .active span": { color: 'primary.main', fontWeight: 600 }, alignItems: "center", gap: 1, justifyContent: "end", textAlign: "end" }} disablePadding>
                        {menuItems.map((navItem) => (
                            <NavLink key={navItem.id} to={navItem.menu_link}>
                                <ListItemButton sx={{ px: 1.4, '&:hover': { backgroundColor: 'transparent' } }} disableRipple>
                                    <ListItemText sx={{ '& span': { fontSize: 18, }, color: isDark ? '#fff' : 'text.title' }} primary={navItem.menu_alias_name} />
                                </ListItemButton>
                            </NavLink>
                        ))}
                    </List>
                    <Box>
                        <IconButton sx={{ display: { xs: 'flex', md: 'none' } }} onClick={() => { setOpen(true) }}><MenuOutlinedIcon /></IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: "flex" }, }}>
                        <Button size='medium' onClick={() => { navigate('/accounts/login') }} startIcon={<PeopleAltOutlinedIcon />}>Login / Register</Button>
                    </Box>
                    <Box sx={{ display: 'none' }}>
                        <Switch checked={isDark} onChange={(e) => { handleThemeColor(e) }} />
                    </Box>
                </Box>
            </Box>
            <Drawer
                anchor="left"
                open={open}
                onClose={() => { setOpen(false) }}
                sx={{ width: 280, display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ backgroundColor: 'background.sidebar', overflow: "hidden", height: '100vh', "& *": { boxSizing: "border-box" } }} >
                    <Stack sx={{ gap: 2, justifyContent: "space-between", transition: '.5s', height: '100%', }} >
                        <Box>
                            <Box sx={{ py: 2, px: 2, width: 1, boxSizing: "border-box" }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center", mb: 2 }}>
                                    <Box component={'img'} src={Logo} alt="" />
                                </Box>
                            </Box>
                            <Box>
                                <List component="div" sx={{ '& a': { textDecoration: 'none' }, "& .active span": { color: 'text.default', fontWeight: 600 }, alignItems: "center", gap: 1, justifyContent: "end", textAlign: "end" }} disablePadding>
                                    {menuItems.map((navItem) => (
                                        <NavLink key={navItem.id} to={navItem.menu_link}>
                                            <ListItemButton sx={{ px: 1.4, '&:hover': { backgroundColor: 'transparent' } }} disableRipple>
                                                <ListItemText sx={{ '& span': { fontSize: 18, color: '#b9b9b9', textAlign: 'center' } }} primary={navItem.menu_alias_name} />
                                            </ListItemButton>
                                        </NavLink>
                                    ))}
                                </List>
                                <Box sx={{ display: { xs: 'block', md: "none" }, textAlign: 'center', mt: 1 }}>
                                    <Button size='medium' onClick={() => { navigate('/accounts/login') }} startIcon={<PeopleAltOutlinedIcon />}>Login / Register</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Drawer>
        </Box >
    )
}

export default Navbar