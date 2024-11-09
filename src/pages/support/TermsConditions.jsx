
import { Box, Container, Typography } from '@mui/material'
import bgImage from '../../assets/game-3.jpg'
import Data from '../../data/JsonData'

const TermsConditions = () => {
    return (
        <Box>
            <Box sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', height: 225, backgroundSize: 'cover', backgroundPositionY: '80%', boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 30%)', position: 'relative' }}>
                <Container maxWidth='lg'>
                    <Box sx={{ px: { xs: 1, sm: 2, md: 0 }, position: 'absolute', top: '50%', transform: 'translateY(-50%)', }}>
                        <Box>
                            <Typography sx={{ fontSize: { xs: '2rem', sm: "2.8rem" }, fontWeight: 700, color: 'text.default' }}>Terms & Conditions</Typography>
                            <Typography sx={{ fontSize: { xs: 15, sm: 18, }, color: 'text.default', mt: 1 }}>Simplifying the booking process for venues, and athletes.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container maxWidth='lg' sx={{ py: 9 }}>
                    <Box>
                        <Typography sx={{ fontSize: { xs: '2rem', sm: "2rem" }, fontWeight: 700, }}>Title</Typography>
                        {
                            Data.privacypolicy.map((item, index) => (
                                <Typography key={index} sx={{ fontSize: { xs: 15, sm: 16, }, mt: 2.5, color: 'text.secondarydefault' }}>{item.description}</Typography>
                            ))
                        }
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Typography sx={{ fontSize: { xs: '2rem', sm: "2rem" }, fontWeight: 700, }}>Policy Name</Typography>
                        {
                            Data.privacypolicy.map((item, index) => (
                                <Typography key={index} sx={{ fontSize: { xs: 15, sm: 16, }, mt: 2.5, color: 'text.secondarydefault' }}>{item.description}</Typography>
                            ))
                        }
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default TermsConditions