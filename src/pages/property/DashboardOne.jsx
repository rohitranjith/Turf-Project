import React, { useEffect, useState } from 'react'
import { useMediaQuery, Box, Typography, useTheme, Stack, Paper, Grid, Button, MenuItem, Menu, Popper, Fade, Chip } from '@mui/material';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactApexChart from 'react-apexcharts';
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import moment, { min } from 'moment'
import MovingIcon from '@mui/icons-material/Moving';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Calendar } from "react-multi-date-picker"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/use-auth';
import EmpList from './EmpList';
import Leave from './Leave';
import Complaint from './Complaint';

const DashboardOne = () => {
    const theme = useTheme();
    const { protector } = useAuth()
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState(true)
    const { isDarkMode } = useSelector(state => state.ui)
    const [showFilter, setShowFilter] = useState(null)
    const [filterApplied, setFilterApplied] = useState('LST_30_DAYS')
    const [toggleDatePicker, setToggleDatePicker] = useState(null)
    const [customDate, setCustomDate] = useState({})
    const isMobileView = useMediaQuery("(max-width: 700px)")

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, [])

    const ClientList = [
        {
            "name": "Today Jobs",
            "count": 50,
            "percentage": 45,

        },
        {
            "name": "Total Employee",
            "count": 450,
            "percentage": 75,

        },
        {
            "name": "In Progress",
            "count": 25,
            "percentage": 55,

        },
        {
            "name": "Active Members",
            "count": 400,
            "percentage": 85,

        },
        {
            "name": "Women",
            "count": 150,
            "percentage": 35,

        },
        {
            "name": "Men",
            "count": 250,
            "percentage": 68,

        },
    ]

    const genderOptions = {
        chart: {
            width: 100,
            type: 'pie',
        },
        labels: ['Male', 'Female'],
        colors: ['#16C098', '#5932EA'],
        plotOptions: {
            pie: {
                expandOnClick: false,
                offsetX: 0,
                offsetY: 0,
                customScale: 1,
                dataLabels: {
                    offset: -30,
                    minAngleToShowLabel: 10
                },
            },
        },
        dataLabels: {
            style: {
                fontFamily: 'inherit',
                fontWeight: 500,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },

            }
        }],
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            fontFamily: 'inherit',
            fontWeight: 500,
            color: '#000',
            fontSize: 13
        },
        tooltip: {
            enabled: true,
            style: {
                fontFamily: 'inherit',
            },
        },
    };

    const [series, setSeries] = useState([{
        name: 'Revenue',
        data: [
            { x: 'Monday', y: 3 },
            { x: 'Tuesday', y: 6 },
            { x: 'Wednesday', y: 5 },
            { x: 'Thursday', y: 7 },
            { x: 'Friday', y: 4 },
            { x: 'Saturday', y: 8 },
            { x: 'Sunday', y: 6 }
        ]

    }])

    const [totalEmpSeries, setTotalEmpSeries] = useState([{
        name: 'Revenue',
        data: [
            { x: 'Monday', y: 3 },
            { x: 'Tuesday', y: 6 },
            { x: 'Wednesday', y: 5 },
            { x: 'Thursday', y: 7 },
            { x: 'Friday', y: 4 },
            { x: 'Saturday', y: 8 },
            { x: 'Sunday', y: 6 }
        ]

    }])

    const [pieseries, setPieSeries] = useState([65, 35])

    const [jobSeries, setJobSeries] = useState([{
        name: 'Worked Hours',
        data: [
            { x: 'Monday', y: 6 },
            { x: 'Tuesday', y: 3 },
            { x: 'Wednesday', y: 3 },
            { x: 'Thursday', y: 4 },
            { x: 'Friday', y: 4 },
            { x: 'Saturday', y: 2 },
            { x: 'Sunday', y: 3 }
        ]
    },
    {
        name: 'OverTime',
        data: [
            { x: 'Monday', y: 2 },
            { x: 'Tuesday', y: 4 },
            { x: 'Wednesday', y: 1 },
            { x: 'Thursday', y: 3 },
            { x: 'Friday', y: 2 },
            { x: 'Saturday', y: 3 },
            { x: 'Sunday', y: 2 }
        ]
    },
    {
        name: 'Break Time',
        data: [
            { x: 'Monday', y: 1 },
            { x: 'Tuesday', y: 2 },
            { x: 'Wednesday', y: 3 },
            { x: 'Thursday', y: 2 },
            { x: 'Friday', y: 2 },
            { x: 'Saturday', y: 3 },
            { x: 'Sunday', y: 4 }
        ]
    },
    {
        name: 'Permission',
        data: [
            { x: 'Monday', y: 2 },
            { x: 'Tuesday', y: 2 },
            { x: 'Wednesday', y: 2 },
            { x: 'Thursday', y: 2 },
            { x: 'Friday', y: 3 },
            { x: 'Saturday', y: 4 },
            { x: 'Sunday', y: 2 }
        ]
    },
    ],)

    const totalEmp = {
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
            foreColor: theme.palette.text.primary,
            sparkline: {
                enabled: true,
            }
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
                show: false,
                style: {
                    fontFamily: 'inherit',
                    fontWeight: 500,
                    fontSize: 10,
                },
                axisBorder: {
                    show: false,
                },
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
            max: 8,
            min: 0,
            labels: {
                show: false,

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
            max: 8,
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

    const jobsOption = {
        chart: {
            type: 'bar',
            height: 340,
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '8%',
                // borderRadiusApplication: 'end',
                borderRadiusApplication: 'around', // 'around', 'end'
                borderRadiusWhenStacked: 'all', // 'all', 'last'
                borderRadius: 4,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['#fff']
        },
        xaxis: {
            type: 'category',
            labels: {
                show: true,
                style: {
                    fontFamily: 'inherit',
                }
            },
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],

        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    fontFamily: 'inherit',
                }
            },
            max: 12,
            min: 1
        },
        colors: ['#049751', '#0F2733', '#FAC131', '#D46400'],
        legend: {
            fontFamily: 'inherit',
            offsetY: 10,
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                fillColors: ['#049751', '#0F2733', '#FAC131', '#D46400'],
                radius: 12,
                offsetX: 0,
                offsetY: 0
            },
            style: {
                fontFamily: 'inherit'
            }
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            theme: 'light',
            marker: {
                show: true,
            },
            style: {
                fontFamily: 'inherit'
            }
        },
    }

    const [dateRange, setDateRange] = useState({
        start_date: moment().subtract(30, "days").format("YYYY-MM-DD"),
        end_date: moment().format("YYYY-MM-DD")
    })

    const handleCustomDatePicker = (value) => {
        setCustomDate({
            start_date: value[0] && value[0].format(),
            end_date: value[1] && value[1].format(),
            dataFormat: value
        })
    }

    const handleApplyCustomRange = () => {
        if (customDate.start_date && customDate.start_date) {
            setDateRange({
                start_date: customDate.start_date,
                end_date: customDate.end_date,
            });
        } else {
            setDateRange({
                start_date: moment().subtract(30, "days").format("YYYY-MM-DD"),
                end_date: moment().format("YYYY-MM-DD")
            })
        }
        setToggleDatePicker(false)
    }

    const onFilterChange = (value) => {
        setShowFilter(null)
        setFilterApplied(value)

        switch (value) {
            case "7DAYS":
                setDateRange({
                    start_date: moment().subtract(1, "week").format("YYYY-MM-DD"),
                    end_date: moment().format("YYYY-MM-DD")
                })
                return;
            case "LST_15_DAYS":
                setDateRange({
                    start_date: moment().subtract(15, "days").format("YYYY-MM-DD"),
                    end_date: moment().format("YYYY-MM-DD")
                })
                return;
            case "LST_30_DAYS":
                setDateRange({
                    start_date: moment().subtract(30, "days").format("YYYY-MM-DD"),
                    end_date: moment().format("YYYY-MM-DD")
                })
                return;
            case "LST_MONTH":
                const lastMonth = moment(moment()).subtract(1, 'months')
                setDateRange({
                    start_date: lastMonth.startOf('month').format("YYYY-MM-DD"),
                    end_date: lastMonth.endOf('month').format("YYYY-MM-DD")
                })
                return;
            case "LST_3_MONTH":
                setDateRange({
                    start_date: moment(moment()).subtract(3, 'months').startOf('month').format("YYYY-MM-DD"),
                    end_date: moment(moment()).subtract(1, 'months').endOf('month').format("YYYY-MM-DD")
                })
                return;
            case "LST_1_YEAR":
                setDateRange({
                    start_date: moment().subtract(1, "year").startOf("year").format("YYYY-MM-DD"),
                    end_date: moment().subtract(1, "year").endOf("year").format("YYYY-MM-DD")
                })
                return;
            case "CUSTOM":
                setToggleDatePicker(showFilter)
                return;
            default:
                setDateRange({
                    start_date: moment().format("YYYY-MM-DD"),
                    end_date: moment().format("YYYY-MM-DD")
                })
                setFilterApplied('Today')
                return;
        }
    }

    return (
        <>
            <Box>
                <Stack direction='row' sx={{ justifyContent: 'space-between', px: 1, alignItems: 'center', gap: 1, mb: 1.5, flexWrap: 'wrap' }}>
                    <Box>
                        <Typography fontWeight={600} sx={{ fs: 18, fontWeight: 600, m: 0 }}>Dashboard</Typography>
                    </Box>
                    <Box sx={{ position: 'relative' }} >
                        <Button
                            variant='outlined'
                            startIcon={<CalendarMonthIcon />}
                            onClick={(e) => {
                                setShowFilter(e.currentTarget);
                                setToggleDatePicker(null)
                            }}
                            size='small'>
                            {`${moment(dateRange.start_date).format('DD-MMM-YYYY')} ~ ${moment(dateRange.end_date).format('DD-MMM-YYYY')}`}
                        </Button>
                        <Menu
                            open={Boolean(showFilter)}
                            anchorEl={showFilter}
                            onClose={() => { setShowFilter(null); setToggleDatePicker(null) }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                            <MenuItem selected={filterApplied === 'Today'} onClick={() => onFilterChange('Today')}>Today</MenuItem>
                            <MenuItem selected={filterApplied === '7DAYS'} onClick={() => onFilterChange('7DAYS')}>Last 7 days</MenuItem>
                            <MenuItem selected={filterApplied === 'LST_15_DAYS'} onClick={() => onFilterChange('LST_15_DAYS')}>Last 15 days</MenuItem>
                            <MenuItem selected={filterApplied === 'LST_30_DAYS'} onClick={() => onFilterChange('LST_30_DAYS')}>Last 30 days</MenuItem>
                            <MenuItem selected={filterApplied === 'LST_MONTH'} onClick={() => onFilterChange('LST_MONTH')}>Last month</MenuItem>
                            <MenuItem selected={filterApplied === 'LST_3_MONTH'} onClick={() => onFilterChange('LST_3_MONTH')}>Last 3 months</MenuItem>
                            <MenuItem selected={filterApplied === 'LST_1_YEAR'} onClick={() => onFilterChange('LST_1_YEAR')}>Last Year</MenuItem>
                            <MenuItem selected={filterApplied === 'CUSTOM'} onClick={() => { onFilterChange('CUSTOM') }}>Custom range</MenuItem>
                        </Menu>
                        {
                            toggleDatePicker &&
                            <>
                                <Popper
                                    sx={{ zIndex: 1200 }}
                                    open={Boolean(toggleDatePicker)}
                                    anchorEl={toggleDatePicker}
                                    placement={"bottom-end"}
                                    transition
                                    disablePortal={false}
                                    modifiers={[
                                        {
                                            name: 'flip',
                                            enabled: true,
                                            options: {
                                                altBoundary: true,
                                                rootBoundary: 'viewport',
                                                padding: 8,
                                            },
                                        },
                                    ]}
                                >
                                    {({ TransitionProps }) => (
                                        <Fade {...TransitionProps} timeout={350}>
                                            <Paper sx={{ p: 1 }}>
                                                <Box sx={{ border: '1px solid #f3f3f3' }}>
                                                    <Calendar
                                                        className="green"
                                                        format="YYYY-MM-DD"
                                                        value={customDate.dataFormat}
                                                        rangeHover
                                                        portal
                                                        maxDate={new Date()}
                                                        onChange={handleCustomDatePicker}
                                                        numberOfMonths={isMobileView ? 1 : 2}
                                                        range
                                                        plugins={[
                                                            <DatePanel position={isMobileView ? "bottom" : "right"} />
                                                        ]}
                                                    />
                                                </Box>
                                                <Stack sx={{ alignItems: 'center', flexDirection: 'row', gap: 1, mt: 1, justifyContent: 'end' }}>
                                                    <Button size='small' variant='outlined' onClick={() => setToggleDatePicker(null)}>Close</Button>
                                                    <Button size='small' variant='outlined' onClick={() => setCustomDate({})}>Reset</Button>
                                                    <Button size='small' variant='contained' onClick={handleApplyCustomRange}>Apply</Button>
                                                </Stack>
                                            </Paper>
                                        </Fade>
                                    )}
                                </Popper>
                            </>
                        }
                    </Box>
                </Stack>
                <Box>
                    <Grid container spacing={1}>
                        <Grid item xs={12} lg={9}>
                            <Box sx={{ '& .swiper-wrapper': { pb: 1 } }}>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={8}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 2,
                                        },
                                        900: {
                                            slidesPerView: 3,
                                        },
                                        1400: {
                                            slidesPerView: 4,
                                        },
                                    }}>
                                    {
                                        ClientList.map((client, index) => (
                                            <SwiperSlide key={index}>
                                                <Paper sx={{ backgroundColor: "background.card", borderRadius: 2.8, p: { xs: 1, md: 2 }, cursor: 'pointer', }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Box>
                                                            <Typography sx={{ textTransform: "capitalize" }}>{client.name}</Typography>
                                                            <Typography sx={{ fontSize: { xs: 22, sm: 28, md: 30 }, mb: 1, fontWeight: 700, lineHeight: "normal", }}>{client.count}</Typography>
                                                            <Stack direction='row' alignItems='center' flexWrap={'wrap'}><ImportExportIcon sx={{ fontSize: '16px', py: 0, color: '#4CAF50' }} /><Typography sx={{ mr: '5px', color: '#4CAF50', fontSize: 12 }}>+1{index}%</Typography><Typography sx={{ fontSize: 12 }}>since last month</Typography></Stack>
                                                        </Box>
                                                        <Box>
                                                            <Chip size='small' label={`${client.percentage} %`} sx={{ backgroundColor: '#dcf7dc', color: '#0B8A00' }} icon={<MovingIcon sx={{ color: '#0B8A00 !important' }} />} />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ height: 35 }}>
                                                        {
                                                            !isLoading &&
                                                            <ReactApexChart options={totalEmp} series={totalEmpSeries} type="area" height={35} />
                                                        }
                                                    </Box>
                                                </Paper>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </Box>
                            {/* <Box sx={{ pb: 1 }}>
                                <Grid container spacing={1}>
                                    {
                                        ClientList.map((client, index) => (
                                            client.role_id.includes(user.role_id) &&
                                            <Grid item xs={12} sm={3}>
                                                <Paper key={index} sx={{ backgroundColor: "background.card", borderRadius: 2.8, p: { xs: 1, md: 2 }, cursor: 'pointer', }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Box>
                                                            <Typography sx={{ textTransform: "capitalize" }}>{client.name}</Typography>
                                                            <Typography sx={{ fontSize: { xs: 22, sm: 28, md: 30 }, mb: 1, fontWeight: 700, lineHeight: "normal", }}>{client.count}</Typography>
                                                            <Stack direction='row' alignItems='center' flexWrap={'wrap'}><ImportExportIcon sx={{ fontSize: '16px', py: 0, color: '#4CAF50' }} /><Typography sx={{ mr: '5px', color: '#4CAF50', fontSize: 12 }}>+1{index}%</Typography><Typography sx={{ fontSize: 12 }}>since last month</Typography></Stack>
                                                        </Box>
                                                        <Box>
                                                            <Chip size='small' label={`${client.percentage} %`} sx={{ backgroundColor: '#dcf7dc', color: '#0B8A00' }} icon={<MovingIcon sx={{ color: '#0B8A00 !important' }} />} />
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <ReactApexChart options={totalEmp} series={totalEmpSeries} type="area" height={30} />
                                                    </Box>
                                                </Paper>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box> */}
                            <Box component={Paper} sx={{ backgroundColor: 'background.card', borderRadius: 2, p: 1.2 }}>
                                <ReactApexChart options={saleRevenueOpt} series={series} type="area" height={300} />
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Box component={Paper} sx={{ backgroundColor: 'background.card', borderRadius: 2, p: 1.2 }}>
                                    <EmpList />
                                </Box>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Box component={Paper} sx={{ backgroundColor: 'background.card', borderRadius: 2, p: 1.2 }}>
                                    <ReactApexChart options={jobsOption} series={jobSeries} type="bar" height={375} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <Box>
                                <Box component={Paper} sx={{ backgroundColor: 'background.card', borderRadius: 2, p: 1.2 }}>
                                    <Box>
                                        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Active Members</Typography>
                                    </Box>
                                    <Box>
                                        <ReactApexChart options={genderOptions} series={pieseries} type="pie" height={250} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Leave />
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Complaint />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box >
        </>
    )
}

export default DashboardOne