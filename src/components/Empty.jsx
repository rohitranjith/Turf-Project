import { Typography, Paper, Box, Stack } from '@mui/material';
import emptyImage from '../assets/empty-box.png'

const Empty = ({ icon, text, children, sx, contentText }) => {
    return (
        <Stack component={Paper} sx={{ my: 2, borderRadius: 3, px: { xs: 2, md: 3 }, py: { xs: 2, sm: 3, md: 5 }, alignItems: "center", justifyContent: "center", textAlign: "center", ...sx }}>
            <Stack sx={{ width: { xs: 150, sm: 200 }, height: { xs: 150, sm: 200 }, borderRadius: 100, bgcolor: '#eff0f5', alignItems: "center", justifyContent: "center" }}>
                <Box component="img" src={emptyImage} sx={{ height: { xs: 80, sm: 100 } }}></Box>
            </Stack>
            <Typography variant="h5" sx={{ fontSize: { xs: 20, sm: 22, md: 24 }, mt: 3, fontWeight: 600 }} color="text.secondary">{text}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.6, maxWidth: 500, mx: "auto" }}>
                {contentText ? contentText : "Currently, there's no content available. Feel free to add more data to populate your space."}
            </Typography>
            <Box>
                {children}
            </Box>
        </Stack>
    )
}

export default Empty