import React from 'react'
import { Box, keyframes, Backdrop } from "@mui/material"

const animation2_1 = keyframes`
90%,100% {background-size:calc(2*100%/3) calc(100%/3),calc(100%/3) calc(2*100%/3)}
`
const animation2_2 = keyframes`
0%,49.99% {transform:scaleX(1)}
50%,100%  {transform:scaleX(-1)}
`
const styles = {
    "loader": {
        position: "relative",
        width: "60px",
        aspectRatio: 1,
        display: 'grid',
        grid: '50%/50%',
        color: '#097E52',
        background: 'no-repeat linear-gradient(currentColor 0 0) left 20px top 0, no-repeat linear-gradient(currentColor 0 0) top 20px right 0 , no-repeat linear-gradient(currentColor 0 0) right  20px bottom 0 , no-repeat linear-gradient(currentColor 0 0) bottom 20px left   0',
        backgroundSize: 'calc(100%/3) calc(100%/3)',
        animation: `${animation2_1}   .75s infinite alternate linear, ${animation2_2}  1.5s infinite`,
    },
}


const Preloader = ({ preload = false }) => {

    return (
        <>
            {
                preload ?
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={true}
                    >
                        <Box sx={{ ...styles.loader }}></Box>
                    </Backdrop>
                    :
                    <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box sx={{ ...styles.loader }}></Box>
                    </Box>
            }
        </>

    )
}

export default Preloader
