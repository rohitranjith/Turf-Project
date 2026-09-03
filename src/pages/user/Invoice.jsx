import { Box, Button, Typography, TextField, Stack, Tooltip, TableContainer, InputAdornment, Table, TableHead, TableCell, TableRow, TableBody, Avatar, Paper, Pagination, Chip, } from '@mui/material'
import { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import PersonIcon from '@mui/icons-material/Person';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Popup from '../../components/Popup'
import { alertMsg } from '../../utils/basicUtils';
import Empty from '../../components/Empty';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

const Invoice = () => {

    const [showPop, setShowPop] = useState(false)
    const [userList, setUserList] = useState(demoUser)
    const [selectedClient, setSelectedClient] = useState(null)
    const [searchText, setSearchText] = useState('')

    const itemsPerPage = 10
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [fileCount, setFileCount] = useState({
        startCount: 0,
        endCount: itemsPerPage
    })

    const handlePagination = (event, value) => {
        setCurrentPage(value);
        if (value !== currentPage) {
            setFileCount({
                startCount: (value - 1) * itemsPerPage,
                endCount: value * itemsPerPage
            })
        }
        else {
            setFileCount(fileCount)
        }
    };

    useEffect(() => {

        const initialSet = async () => {
            await setUserList(userList)
            setTotalPage(Math.ceil(userList.length / itemsPerPage));
        }
        initialSet()
    }, [userList])


    return (
        <Box>
            <Box>
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
                    }} />
            </Box>
            <Box sx={{ mt: 2.5 }}>
                {
                    userList.length > 0 ?
                        <>
                            <TableContainer sx={{ maxHeight: { xs: 'calc(100vh - 205px)', md: 'calc(100vh - 170px)' }, overflow: 'auto', borderRadius: 1, }} className='scroll-bar' >
                                <Table stickyHeader size='small' >
                                    <TableHead>
                                        <TableRow sx={{
                                            '& th': {
                                                backgroundColor: 'background.card',
                                                p: 2, border: 0, borderBottom: '1px solid', borderColor: 'background.light',
                                                fontSize: 14, fontWeight: 500, color: 'text.custom'
                                            },
                                        }}>
                                            <TableCell sx={{ whiteSpace: 'nowrap' }}>Name</TableCell>
                                            <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Booking Date</TableCell>
                                            <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Time</TableCell>
                                            <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Paid On</TableCell>
                                            <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Payment</TableCell>
                                            <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Status</TableCell>
                                            <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Download</TableCell>
                                            <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            userList.slice(fileCount.startCount, fileCount.endCount).map((users, index) => (
                                                <TableRow key={index} sx={{ '& td': { px: "12px", py: '12px', backgroundColor: 'background.card' }, '& td>div': { alignItems: 'center' }, '&:last-of-type td': { borderBottom: '0px solid #ebf1fc' }, }}>
                                                    <TableCell sx={{ whiteSpace: 'nowrap' }}>
                                                        <Stack direction={'row'} sx={{ borderRadius: '6px 0px 0px 6px', gap: 1.5, alignItems: 'center' }}>
                                                            <Tooltip title={users.is_active === 1 ? 'Active' : 'Deactivated'} arrow placement='top'>
                                                                <Avatar src={users.headshot && users.headshot.low} sx={{ backgroundColor: '#f3f3f3', cursor: 'pointer' }}>
                                                                    <PersonIcon sx={{ color: '#b9b9b9' }} />
                                                                </Avatar>
                                                            </Tooltip>
                                                            <Box>
                                                                <Typography sx={{ fontSize: 13 }} variant="body1">{users.first_name} {users.last_name}</Typography>
                                                            </Box>
                                                        </Stack>
                                                    </TableCell>
                                                    <TableCell align={'center'} sx={{ whiteSpace: 'nowrap' }}>
                                                        <Box>
                                                            <Box>
                                                                <Typography sx={{ fontSize: 13 }} variant="body1">{users.date}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align={'center'} sx={{ whiteSpace: 'nowrap' }}>
                                                        <Box>
                                                            <Box>
                                                                <Typography sx={{ fontSize: 13 }} variant="body1">{users.time}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align={'center'} sx={{ whiteSpace: 'nowrap' }}>
                                                        <Box>
                                                            <Box>
                                                                <Typography sx={{ fontSize: 13 }} variant="body1">{users.paid_on}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align={'center'} sx={{ whiteSpace: 'nowrap' }}>
                                                        <Box>
                                                            <Box>
                                                                <Typography sx={{ fontSize: 13 }} variant="body1">{users.payment}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align={'center'} sx={{ whiteSpace: 'nowrap' }}>
                                                        <Box>
                                                            <Chip size='small' color={users.status === 1 ? "success" : users.status === 2 ? "warning" : "error"} label={users.status === 1 ? "Paid" : users.status === 2 ? "Pending" : "Failed"}></Chip>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align={'center'} sx={{ whiteSpace: 'nowrap' }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                                            <Box sx={{ height: '20px' }}>
                                                                <FileDownloadOutlinedIcon sx={{ fontSize: "20px", color: 'primary.main' }} />
                                                            </Box>
                                                            <Box>
                                                                <Typography sx={{ fontSize: 13, color: 'primary.main' }} variant="body1">Download</Typography>
                                                            </Box>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align={'center'} sx={{ whiteSpace: 'nowrap' }}>
                                                        <Stack direction={'row'} sx={{ borderRadius: '0px 6px 6px 0px', justifyContent: 'center' }}>
                                                            <Box>
                                                                <Button variant="text" color='info' startIcon={<HandshakeOutlinedIcon />}>Refund</Button>
                                                            </Box>
                                                            <Box>
                                                                <Button variant="text" color='error' onClick={() => { setSelectedClient(users); setShowPop(true) }} startIcon={<DeleteOutlineIcon />}>Delete</Button>
                                                            </Box>
                                                        </Stack>

                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Stack sx={{ py: 2, alignItems: 'center', borderTop: "1px solid", borderColor: "primary.light" }}>
                                <Pagination count={totalPage} page={currentPage} onChange={handlePagination} />
                            </Stack>
                        </>
                        :
                        <Paper sx={{ p: 1 }}>
                            <Empty text={'No Attendance Available'} icon={<HowToRegOutlinedIcon sx={{ fontSize: 50, color: "grey" }} />} sx={{ minHeight: 'calc(100vh - 220px)', m: 0 }} />
                        </Paper>
                }
            </Box>
            <Popup show={showPop} title={"Delete Invoice"} consent={true} variant='error' primaryBtnTxt={"Delete"}
                onPrimaryClick={async (e, loader) => {
                    try {
                        alertMsg('Invoice Deleted successfully', 'success')
                        setShowPop(false)
                        setSelectedClient(null);
                    } catch (err) {
                        console.error(err)
                    }
                }}
                onSecondaryClick={() => { setSelectedClient(null); setShowPop(false) }}>
                <Box sx={{ textAlign: "center" }}>
                    <Typography>This action will permanently delete user <span style={{ fontWeight: 600, color: "#000" }}>
                        {`${selectedClient && selectedClient.first_name} ${selectedClient && (selectedClient.last_name === null ? '' : selectedClient.last_name)}`}
                    </span>. Confirm deletion?</Typography>
                </Box>
            </Popup>
        </Box >
    )
}

export default Invoice

const demoUser = [
    {
        "emp_id": "SD001",
        "first_name": "Sophia",
        "last_name": "Anderson",
        "date": "Mon, Jul 12",
        "time": "06:00 PM - 08:00 PM",
        "payment": "$150",
        "paid_on": "12 Jul 10:45PM",
        "status": 1,
        "download": 1,
        "headshot": null
    },
    {
        "emp_id": "SD002",
        "first_name": "Alice",
        "last_name": "Smith",
        "date": "Tue, Jun 24",
        "time": "06:00 PM - 08:00 PM",
        "payment": "$150",
        "paid_on": "18 Jan 01:15PM",
        "status": 2,
        "download": 1,
        "headshot": null
    },
    {
        "emp_id": "SD003",
        "first_name": "Bob",
        "last_name": "Johnson",
        "date": "Tue, Jun 24",
        "time": "06:00 PM - 08:00 PM",
        "payment": "$150",
        "paid_on": "15 Feb 08:55 PM",
        "status": 3,
        "download": 1,
        "headshot": null
    },
    {
        "emp_id": "SD004",
        "first_name": "Carol",
        "last_name": "Taylor",
        "date": "Tue, Jun 24",
        "time": "06:00 PM - 08:00 PM",
        "payment": "$150",
        "paid_on": "21 Sep 02:00 AM",
        "status": 1,
        "download": 1,
        "headshot": null
    },
    {
        "emp_id": "SD005",
        "first_name": "David",
        "last_name": "Brown",
        "date": "Tue, Jun 24",
        "time": "06:00 PM - 08:00 PM",
        "payment": "$150",
        "paid_on": "19 Oct 03:00 AM",
        "status": 3,
        "download": 1,
        "headshot": null
    },
    {
        "emp_id": "SD006",
        "first_name": "Eve",
        "last_name": "Williams",
        "date": "Tue, Jun 24",
        "time": "06:00 PM - 08:00 PM",
        "payment": "$150",
        "paid_on": "25 Mar 10:35 PM",
        "status": 2,
        "download": 1,
        "headshot": null
    },
    {
        "emp_id": "SD007",
        "first_name": "Frank",
        "last_name": "Jones",
        "date": "Tue, Jun 24",
        "time": "06:00 PM - 08:00 PM",
        "payment": "$150",
        "paid_on": "13 Jul 07:35 PM",
        "status": 1,
        "download": 1,
        "headshot": null
    },
    {
        "emp_id": "SD008",
        "first_name": "Grace",
        "last_name": "Miller",
        "date": "Tue, Jun 24",
        "time": "06:00 PM - 08:00 PM",
        "payment": "$150",
        "paid_on": "28 Jul 08:00 AM",
        "status": 3,
        "download": 1,
        "headshot": null
    },
    {
        "emp_id": "SD009",
        "first_name": "Henry",
        "last_name": "Davis",
        "date": "Tue, Jun 24",
        "time": "06:00 PM - 08:00 PM",
        "payment": "$150",
        "paid_on": "24 Jul 06:00 AM",
        "status": 2,
        "download": 1,
        "headshot": null
    },
    {
        "emp_id": "SD010",
        "first_name": "Ivy",
        "last_name": "Martinez",
        "date": "Tue, Jun 24",
        "time": "06:00 PM - 08:00 PM",
        "payment": "$150",
        "paid_on": "19 Jun 12:00 PM",
        "status": 2,
        "download": 1,
        "headshot": null
    },
    {
        "emp_id": "SD010",
        "first_name": "Ivy",
        "last_name": "Martinez",
        "date": "Tue, Jun 24",
        "time": "06:00 PM - 08:00 PM",
        "payment": "$150",
        "paid_on": "12 Jul 12:35PM",
        "status": 2,
        "download": 1,
        "headshot": null
    },
    {
        "emp_id": "SD010",
        "first_name": "Ivy",
        "last_name": "Martinez",
        "date": "Tue, Jun 24",
        "time": "06:00 PM - 08:00 PM",
        "payment": "$150",
        "paid_on": "30 Dec 12:00 AM",
        "status": 2,
        "download": 1,
        "headshot": null
    }
]
