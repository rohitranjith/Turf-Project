import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import { themeConfiguration } from './themeConfig';
import { useSelector } from 'react-redux';
import MainLayout from './layouts/MainLayout';
import Home from './pages/home/Home';
import ForbiddenError from './pages/error/ForbiddenError';
import Notfound from './pages/error/Notfound';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Event from './pages/event/Event';
import Contact from './pages/contact/Contact';
import Faq from './pages/support/Faq';
import PrivacyPolicy from './pages/support/PrivacyPolicy';
import TermsConditions from './pages/support/TermsConditions';
import Pricing from './pages/support/Pricing';
import SportsVenue from './pages/other/SportsVenue';
import Login from './pages/accounts/Login';
import HomeLayout from './layouts/HomeLayout';
import Dashboard from './pages/user/Dashboard';
import Chat from './pages/user/Chat';
import Invoice from './pages/user/Invoice';
import Wallet from './pages/user/Wallet';
import Profile from './pages/user/profile/Profile';
import Listing from './pages/user/orders/Lisiting';
import CreateOrders from './pages/user/orders/CreateOrder';


function App() {

	const current_theme = useSelector(state => state.ui.isDarkMode)
	const theme = createTheme(themeConfiguration(current_theme));

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/accounts">
					<Route path="login" element={<Login />} />
				</Route>

				<Route element={<HomeLayout />}>
					<Route index path="/" element={<Home />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/event" element={<Event />} />
					<Route path="/contact-us" element={<Contact />} />

					<Route path="/support">
						<Route path="faq" element={<Faq />} />
						<Route path="privacy-policy" element={<PrivacyPolicy />} />
						<Route path="terms-conditions" element={<TermsConditions />} />
						<Route path="pricing" element={<Pricing />} />
					</Route>

					<Route path="/other">
						<Route path="sports-venue" element={<SportsVenue />} />
					</Route>
				</Route>

				<Route element={<MainLayout />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="orders" element={<Listing />} />
					<Route path="orders/create" element={<CreateOrders />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/invoice" element={<Invoice />} />
					<Route path="/wallet" element={<Wallet />} />
					<Route path="/profile" element={<Profile />} />
				</Route>

				<Route path="/forbidden" element={<ForbiddenError />} />
				<Route path="*" element={<Notfound />} />
			</>
		),
		{
			basename: "/Turf-Project",
		}
	);

	return (
		<ThemeProvider theme={theme}>
			<div className={current_theme ? 'dark-mode' : 'light-mode'}>
				<RouterProvider router={router} />
			</div>
		</ThemeProvider>
	);
}

export default App;
