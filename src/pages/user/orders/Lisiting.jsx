import React, { useState } from "react";
import { Box, Stack, Grid, useTheme, Typography, TextField, Button, Paper, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch } from "react-redux";
import { orderActions } from "../../../redux/reducers/order-slice";


const Listing = () => {
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <Box >
            <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems={{ xs: "start", md: "center" }}
                justifyContent="space-between"
                sx={{ width: "100%" }}
            >
                <TextField
                    placeholder="Search"
                    size="small"
                    sx={{
                        "& fieldset": { display: 'none' },
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { border: 0, },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0, },
                        backgroundColor: 'background.card',
                        width: { xs: 275, sm: 320 },
                        borderRadius: 1,
                        pr: 1.5
                    }}
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                    InputProps={{
                        style: {
                            fontSize: '14px',
                        },
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon sx={{ color: "lightgrey" }} />
                            </InputAdornment>
                        ),
                    }}
                />

                <Box>
                    <Button color='primary' variant='contained' onClick={() => {
                        navigate('create');
                        dispatch(orderActions.resetOrder())
                    }}>
                        Booking Now
                    </Button>
                </Box>
            </Stack>

            <Box sx={{ mt: 2 }}>
                <Grid container spacing={1.4}>
                    {
                        [1, 2, 3, 4, 5, 6, 7].map((ele) => (
                            <Grid item key={ele} xs={12}>
                                <Paper sx={{ borderRadius: 3, backgroundColor: 'background.card' }}>
                                    <Box sx={{ p: 1.5 }}>
                                        <Box>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                                                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                                                    <Box>
                                                        <Avatar src={`https://randomuser.me/api/portraits/men/${ele}.jpg`} />
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="h6" sx={{ fontSize: 14, color: 'text.custom' }}>Albert E Inniss</Typography>
                                                        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 13, color: "text.secondary" }}>support@outsourceinfotech.com</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ textAlign: "end", flexGrow: 1 }}>
                                                    <Typography variant="h6" sx={{ fontSize: 14, color: 'text.custom' }}>Cricket Field</Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 13, color: "text.secondary" }}>90786546708</Typography>
                                                </Box>
                                            </Box>
                                            <Divider sx={{ my: 1.5 }} />
                                            <Grid container spacing={3} alignItems={"center"}>
                                                <Grid item xs={12} md={6} lg={5} xl={4}>
                                                    <Box>
                                                        <Typography variant="h6" sx={{ fontSize: 15, color: 'text.custom' }}>1855 Calvary Church Road, Gainesville, GA, 30507</Typography>
                                                        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 600 }}>Robert Weisgerber</Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={6} lg={7} xl={8}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 3, flexWrap: "wrap" }}>
                                                        <Box>
                                                            <Typography variant="h6" sx={{ fontSize: 15, color: 'text.custom' }}>Start Date</Typography>
                                                            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: 13 }}>Jun 11th 2024 12:00 AM</Typography>
                                                        </Box>
                                                        <Divider orientation='vertical' flexItem sx={{ display: { xs: "none", lg: "block" } }} />
                                                        <Box>
                                                            <Typography variant="h6" sx={{ fontSize: 15, color: 'text.custom' }}>End Date</Typography>
                                                            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: 13 }}>Jun 11th 2024 02:00 AM</Typography>
                                                        </Box>
                                                        <Divider orientation='vertical' flexItem sx={{ display: { xs: "none", lg: "block" } }} />
                                                        <Box sx={{ textAlign: "end" }}>
                                                            <Button variant="outlined" color="primary">Schedule</Button>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>

        </Box >
    );
};

export default Listing;
