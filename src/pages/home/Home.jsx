import { Box, Typography } from '@mui/material'
import React from 'react'
import bgImage from '../../assets/game-3.jpg'
import HowItWorks from './HowItWorks'
import FeaturedVenues from './FeaturedVenues'
import BannerSchedule from './BannerSchedule'
import Features from './Features';
import UpcomingTournament from './UpcomingTournament';
import Testimonials from './Testimonials';
import Subscribe from './Subscribe'
// import Faq from '../support/Faq'


const Home = () => {


	return (
		<Box>

			{/* ------- Banner Section ------- */}

			<Box sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', minHeight: { xs: 'calc(100vh - 72px)', sm: 'calc(100vh - 94px)' }, backgroundSize: 'cover', backgroundPosition: 'bottom', boxShadow: 'inset 0 0 0 2000px rgb(55 105 50 / 25%)', position: 'relative' }}>
				<Box>
					<Box sx={{ px: { xs: 1, sm: 2, md: 0 }, position: 'absolute', top: '50%', left: { xs: 0, md: '40%' }, transform: { xs: 'translateY(-50%)', md: 'translate(-50%, -50%)' } }}>
						<Box sx={{ maxWidth: { xs: "100%", md: 1100 } }}>
							<Typography sx={{ fontSize: { xs: '2rem', sm: '3rem', lg: '3.5rem', xl: '5rem' }, color: '#fff', lineHeight: 'normal', fontWeight: 600 }}>Elevate Your Sports Experience with Our Advanced Turf Solutions!</Typography>
						</Box>
						<Box sx={{ maxWidth: 800, mt: 2 }}>
							<Typography sx={{ color: '#ececec', fontSize: { xs: 16, md: 20 } }}>Elevate your sports game with our durable, all-weather turf solutions, ensuring the perfect pitch for every match and training session.</Typography>
						</Box>
					</Box>
				</Box>
			</Box>

			{/* ------- Banner Section End ------- */}

			<HowItWorks />
			<FeaturedVenues />
			<BannerSchedule />
			<Features />
			<UpcomingTournament />
			<Testimonials />
			<Subscribe />
			{/* <Faq /> */}

		</Box>
	)
}

export default Home