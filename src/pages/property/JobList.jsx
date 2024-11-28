import { Box, Typography, TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper, TableFooter, TablePagination, Avatar, } from '@mui/material'
import { useState } from 'react'
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import Empty from '../../components/Empty';


const JobList = () => {

    const [userList, setUserList] = useState(demoUser)
    const [pageInfo, setPageInfo] = useState({})
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    // const handleCreateUser = async (values, { setSubmitting }) => {
    //     try {
    //         const response = await axios.post('users/create/', { ...values, location_id: locationId })
    //         alertMsg(response.data.message, 'success')
    //         open(true, 1)
    //         setUser(response.data.results.user)
    //         getUsers()

    //     } catch (err) {
    //         console.error(err)
    //     }
    //     console.log(values)
    //     setSubmitting(false);
    // }

    return (
        <Box>
            {
                userList.length > 0 ?
                    <TableContainer sx={{ maxHeight: { xs: 'calc(100vh - 205px)', md: 'calc(100vh - 170px)' }, overflow: 'auto', borderRadius: 1, border: '1px solid', borderColor: 'background.light', }} className='scroll-bar' >
                        <Table stickyHeader size='small' >
                            <TableHead>
                                <TableRow sx={{
                                    '& th': {
                                        backgroundColor: '#f6f6f6', p: '8px', border: 0, borderBottom: '1px solid', borderColor: 'background.light', fontSize: 13, fontWeight: 500, color: '#7a8499'
                                    },
                                }}>
                                    <TableCell sx={{ whiteSpace: 'nowrap' }}>Employee</TableCell>
                                    <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Email</TableCell>
                                    <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Employee ID</TableCell>
                                    <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Total Files</TableCell>
                                    <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Working Hours</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    userList.map((users, index) => (
                                        <TableRow key={index} sx={{ '& td': { px: "8px", py: '8px', backgroundColor: 'background.card', borderColor: 'background.light' }, '& td>div': { alignItems: 'center' }, }}>
                                            <TableCell align={'center'} sx={{ whiteSpace: 'nowrap' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }}>
                                                    <Box>
                                                        <Avatar src={users.user_img} sx={{ width: 32, height: 32 }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="body1" sx={{ fontSize: 12 }}>{users.user_name}</Typography>
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                            <TableCell align={'center'} sx={{ whiteSpace: 'nowrap' }}>
                                                <Box>
                                                    <Typography variant="body1" sx={{ fontSize: 12 }}>{users.email}</Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell align={'center'} sx={{ whiteSpace: 'nowrap' }}>
                                                <Box>
                                                    <Typography variant="body1" sx={{ fontSize: 12 }}>{users.emp_id}</Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell align={'center'} sx={{ whiteSpace: 'nowrap' }}>
                                                <Box>
                                                    <Typography variant="body1" sx={{ fontSize: 12 }}>{users.total_images}</Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell align={'center'} sx={{ whiteSpace: 'nowrap' }}>
                                                <Box>
                                                    <Typography variant="body1" sx={{ fontSize: 12 }}>{users.working_hours}</Typography>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                            <TableFooter sx={{ backgroundColor: 'background.card', p: 2, borderRadius: '5px' }}>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[10, 25, 50, 100]}
                                        colSpan={10}
                                        sx={{ borderBottom: 0, fontSize: 12, px: 0, "& .MuiInputBase-root": { width: "50px !important", mr: 1.3 }, "& input": { visibility: "hidden" }, "& p": { fontSize: 12 }, "& .MuiTablePagination-toolbar": { minHeight: "0px !important" }, "& .MuiSvgIcon-fontSizeMedium": { fontSize: 15 } }}
                                        count={pageInfo?.count}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={(e, newPage) => { setPage(newPage) }}
                                        onRowsPerPageChange={(e) => { setRowsPerPage(parseInt(e.target.value), 10); setPage(0); }}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                    :
                    <Paper sx={{ p: 1 }}>
                        <Empty text={'No Attendance Available'} icon={<HowToRegOutlinedIcon sx={{ fontSize: 50, color: "grey" }} />} sx={{ minHeight: 'calc(100vh - 220px)', m: 0 }} />
                    </Paper>
            }
        </Box>
    )
}

export default JobList


const demoUser = [
    {
        "user_name": "Mithali Raj",
        'user_img': 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "emp_id": "SD047",
        "total_images": "350",
        "working_hours": "420 hr",
        "email": "mithaliraj@gmail.com",
    },
    {
        "user_name": "Ellyse Perry",
        'user_img': 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "emp_id": "SD056",
        "total_images": "550",
        "working_hours": "350 hr",
        "email": "ellyseperry@gmail.com",
    },
    {
        "user_name": "Smriti Mandhana",
        'user_img': 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "emp_id": "SD078",
        "total_images": "225",
        "working_hours": "220 hr",
        "email": "smritimandhana@gmail.com",
    },
    {
        "user_name": "Meg Lanning",
        'user_img': 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "emp_id": "SD088",
        "total_images": "425",
        "working_hours": "190 hr",
        "email": "meglanning@gmail.com",
    },
    {
        "user_name": "Suzie Bates",
        'user_img': 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "emp_id": "SD035",
        "total_images": "190",
        "working_hours": "250 hr",
        "email": "suziebates@gmail.com",
    },
]