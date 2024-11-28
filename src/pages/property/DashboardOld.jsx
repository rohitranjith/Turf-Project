import React, { useState } from 'react'
import { useMediaQuery, Box, Typography, useTheme, Stack, alpha, Paper, Grid, Avatar, Button, MenuItem, Menu, Popper, Fade } from '@mui/material';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactApexChart from 'react-apexcharts';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import User from '../../assets/images/user.jpg'
import moment from 'moment'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Calendar } from "react-multi-date-picker"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useSelector } from 'react-redux';
import JobList from './JobList';
import useAuth from '../../hooks/use-auth';
import { ROLES } from '../../constants';

const Dashboard = () => {
	const theme = useTheme();
	const { protector } = useAuth()
	const { user } = useAuth()
	const { isDarkMode } = useSelector(state => state.ui)
	const [showFilter, setShowFilter] = useState(null)
	const [filterApplied, setFilterApplied] = useState('LST_30_DAYS')
	const [toggleDatePicker, setToggleDatePicker] = useState(null)
	const [customDate, setCustomDate] = useState({})
	const isMobileView = useMediaQuery("(max-width: 700px)")

	const ClientList = [
		{
			"name": "Today Jobs",
			"count": 50,
			'icon': <CalendarTodayOutlinedIcon sx={{ fontSize: 30, color: '#845adf' }} />,
			'bgColor': '#845adf',
			'role_id': [ROLES.client,]
		},
		{
			"name": "To Do",
			"count": 20,
			'icon': <PendingActionsOutlinedIcon sx={{ fontSize: 30, color: '#ef4444' }} />,
			'bgColor': '#ef4444',
			'role_id': [ROLES.super_admin, ROLES.admin, ROLES.hr, ROLES.qc, ROLES.editor, ROLES.client, ROLES.vendor]
		},
		{
			"name": "In Progress",
			"count": 25,
			'icon': <PublishedWithChangesOutlinedIcon sx={{ fontSize: 30, color: '#f5b849' }} />,
			'bgColor': '#f5b849',
			'role_id': [ROLES.client,]
		},
		{
			"name": "Completed",
			"count": 15,
			'icon': <TaskAltOutlinedIcon sx={{ fontSize: 30, color: '#26bf94' }} />,
			'bgColor': '#26bf94',
			'role_id': [ROLES.super_admin, ROLES.admin, ROLES.hr, ROLES.qc, ROLES.editor, ROLES.client, ROLES.vendor]
		},
		{
			"name": "This week",
			"count": 10,
			'icon': <DateRangeOutlinedIcon sx={{ fontSize: 30, color: '#845adf' }} />,
			'bgColor': '#845adf',
			'role_id': [ROLES.super_admin, ROLES.admin, ROLES.hr, ROLES.qc, ROLES.editor, ROLES.vendor]
		},
		{
			"name": "This Month",
			"count": 12,
			'icon': <CalendarMonthOutlinedIcon sx={{ fontSize: 30, color: '#23b7e5' }} />,
			'bgColor': '#23b7e5',
			'role_id': [ROLES.super_admin, ROLES.admin, ROLES.hr, ROLES.qc, ROLES.editor, ROLES.vendor]
		},
	]

	const [series, setSeries] = useState([{
		name: 'Revenue',
		data: [
			[1327446000000, 0],
			[1327532400000, 25],
			[1327618800000, 20],
			[1327705200000, 25],
			[1327791600000, 20],
			[1327878000000, 25],
			[1327964400000, 20],
			[1328050800000, 25],
			[1328137200000, 20],
			[1328223600000, 25],
			[1328310000000, 20],
			[1328396400000, 25],
			[1328482800000, 20],
			[1328569200000, 25],
			[1328655600000, 20],
			[1328742000000, 30]
		]

	}])

	const [jobSeries, setJobSeries] = useState([{
		name: 'Materials',
		data: [
			{ x: 'Monday', y: 20 },
			{ x: 'Tuesday', y: 50 },
			{ x: 'Wednesday', y: 30 },
			{ x: 'Thursday', y: 75 },
			{ x: 'Friday', y: 35 },
			{ x: 'Saturday', y: 85 },
			{ x: 'Sunday', y: 45 }
		]
	},
	],)

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
			type: 'date',
			labels: {
				show: true,
				style: {
					fontFamily: 'inherit',
					fontWeight: 500,
					fontSize: 10,
				},
				formatter: function (val) {
					return moment(val).format('DD/MM/YYYY');
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
			labels: {
				show: true,

				style: {
					fontFamily: 'inherit',
					fontWeight: 500,
				},
				formatter: function (val) {
					if (val >= 100000000) {
						val = (val / 100000000) + "B"
					}
					else if (val >= 1000000) {
						val = (val / 1000000) + "M"
					}
					else if (val >= 1000) {
						val = (val / 1000) + "K";
					}
					return val;
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
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '50%',
				borderRadiusApplication: 'end',
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
			max: 100
		},
		colors: ['#E0440E', '#bb3e03'],
		legend: {
			fontFamily: 'inherit',
			offsetY: 10,
			markers: {
				width: 12,
				height: 12,
				strokeWidth: 0,
				fillColors: ['#E0440E', '#bb3e03'],
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
				<Stack direction='row' sx={{ justifyContent: 'space-between', px: 1, alignItems: 'center', gap: 1, mb: { xs: 2, md: 2 }, flexWrap: 'wrap' }}>
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
				<Box sx={{ '& .swiper-wrapper': { pb: 2 } }}>
					<Swiper
						slidesPerView={1}
						spaceBetween={15}
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
								client.role_id.includes(user.role_id) &&
								<SwiperSlide key={index}>
									<Paper sx={{ backgroundColor: "background.card", borderRadius: 2.8, p: { xs: 2, md: 3 }, cursor: 'pointer', }}>
										<Box sx={{ display: "flex", justifyContent: "space-between" }}>
											<Box>
												<Typography sx={{ fontSize: { xs: 22, sm: 28, md: 30 }, fontWeight: 700, lineHeight: "normal", }}>{client.count}</Typography>
												<Typography sx={{ mb: 2, textTransform: "capitalize" }}>{client.name}</Typography>
												<Stack direction='row' alignItems='center' flexWrap={'wrap'}><ImportExportIcon sx={{ fontSize: '16px', py: 0, color: '#4CAF50' }} /><Typography sx={{ mr: '5px', color: '#4CAF50', fontSize: 12 }}>+1{index}%</Typography><Typography sx={{ fontSize: 12 }}>since last month</Typography></Stack>
											</Box>
											<Stack sx={{ height: 50, width: 50, borderRadius: 2, bgcolor: alpha(client.bgColor, 0.1), boxSizing: "border-box", alignItems: "center", justifyContent: "center" }}>
												{client.icon}
											</Stack>
										</Box>
									</Paper>
								</SwiperSlide>
							))
						}
					</Swiper>

				</Box>
				<Box>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={9}>
							{
								(protector([ROLES.client])) ?
									<Box component={Paper} sx={{ backgroundColor: 'background.card', borderRadius: 2, p: 1 }}>
										<ReactApexChart options={saleRevenueOpt} series={series} type="area" height={450} />
									</Box>
									:
									<Box component={Paper} sx={{ backgroundColor: 'background.card', borderRadius: 2, p: 1 }}>
										<ReactApexChart options={jobsOption} series={jobSeries} type="bar" height={450} />
									</Box>
							}
						</Grid>
						<Grid item xs={12} lg={3}>
							<Box component={Paper} sx={{ backgroundColor: 'background.card', borderRadius: 2, p: 1.5 }}>
								<Box>
									<Typography sx={{ fontSize: 16, fontWeight: 600 }}>Feedbacks</Typography>
								</Box>
								<Box className='scroll-bar' sx={{ mt: 1, maxHeight: 425, overflow: 'auto', pr: .5 }}>
									{
										[1, 2, 3, 4, 5, 6].map((index) => (
											<Box key={index} sx={{ backgroundColor: 'background.light', p: 1.2, borderRadius: 2, '&:not(:last-child)': { mb: 1 } }}>
												<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
													<Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, flexGrow: 1 }}>
														<Box>
															<Avatar src={User} sx={{ width: 45, height: 45, }}></Avatar>
														</Box>
														<Box>
															<Typography sx={{ fontWeight: 600 }}>Shane Watson</Typography>
															<Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Why my images are late?</Typography>
														</Box>
													</Box>
													<Box sx={{ textAlign: 'right' }}>
														<Typography sx={{ fontSize: 11, color: 'text.secondary' }}>Oct 10, 10:50</Typography>
													</Box>
												</Box>
											</Box>
										))
									}
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
				<Box>
					<JobList />
				</Box>
			</Box>
		</>
	)
}

export default Dashboard