import React, { useEffect, useState } from 'react'
import { Box, useTheme, keyframes, Paper, Typography } from '@mui/material'
import LocationStep from './create/LocationStep'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Scheduling from './create/Scheduling';
import OrderSummary from './create/OrderSummary'
import { useDispatch, useSelector } from 'react-redux';
import { orderActions } from '../../../redux/reducers/order-slice';


const Steps = ({ value }) => {
    const theme = useTheme()
    const { current_step } = useSelector(state => state.order)
    console.log(current_step)
    const boxStyles = {
        minHeight: 35,
        zIndex: 1,
        minWidth: 35,
        height: 35,
        width: 35,
        borderRadius: 35,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
        fontWeight: 500,
        boxShadow: '0px 0px 2px 1px #0000000a',
        bgcolor: current_step >= value ? theme.palette.primary.main : "background.card",
        color: current_step >= value ? "#fff" : "primary.main",
        transitionDelay: current_step >= value ? ".8s" : 0,
        transition: ".2",
        animationDelay: current_step >= value ? ".8s" : 0,
    }

    const flipper = keyframes`
    0% {transform: scale(1);}
    50% { transform: scale(1.2); }
    100% { transform: scale(1);}`

    return <Box sx={{ ...boxStyles, animation: `${current_step === value ? flipper : ""} .5s linear` }}>
        {current_step > value ?
            <CheckRoundedIcon sx={{ color: "#fff", bgcolor: theme.palette.primary.main, borderRadius: 50, p: .3, fontSize: 20 }} /> :
            <Typography variant="body1">{value + 1}</Typography>
        }
    </Box>
}

const CreateOrders = () => {
    const { current_step } = useSelector(state => state.order)
    const dispatch = useDispatch()
    const [selectedVariants, setSelectedVariants] = useState(null)

    const handleSelectedVariant = (normal, bundle, addon) => {
        setSelectedVariants({ normal_pkg: normal, bundle: bundle, addon: addon })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [current_step]);

    return (
        <Box maxWidth={"xl"}>
            <Box>
                <Box >
                    <Box sx={{
                        display: "flex", alignItems: "center", justifyContent: 'space-between', minHeight: 40, maxWidth: '80%', mx: 'auto', position: 'relative', zIndex: 1,
                        '&::after': { backgroundColor: 'background.card', boxShadow: '0px 0px 2px 1px #0000000a', content: '""', left: 0, right: 0, top: '50%', transform: 'translateY(-50%)', position: 'absolute', zIndex: -3, height: 4, width: '100%' },
                        '&::before': { position: 'absolute', left: 18, content: '""', transform: 'translateY(-50%)', top: '50%', backgroundColor: 'primary.main', width: `${current_step == 1 ? 'calc(49.3% - 18px)' : current_step == 2 ? 'calc(99.6% - 18px)' : current_step == 3 ? 'calc(100% - 18px)' : 0}`, transition: '.5s', zIndex: -1, height: 2, }
                    }}>
                        {
                            [1, 2, 3,].map((item) => (<Steps key={item} value={item - 1} />))
                        }
                    </Box>
                </Box>
                <Paper sx={{ mt: 2.5, borderRadius: 2, overflow: 'hidden', backgroundColor: 'background.card' }}>
                    <Box sx={{ '& .step-content': { p: 1.5, height: '68vh', overflow: 'auto', position: 'relative', boxSizing: 'border-box' }, '& .step-footer': { borderTop: '1px solid' }, '& .step-header': { minHeight: 45, borderBottom: '1px solid', display: 'flex', alignItems: 'center' }, '& .step-header , & .step-footer': { p: 1.5, borderColor: 'background.light' } }} className='scroll-bar'>
                        <Box>
                            {
                                current_step === 0 && <LocationStep
                                    handleNextStep={() => { dispatch(orderActions.updateCurrentStep(1)) }}
                                />
                            }
                        </Box>
                        <Box>

                            {
                                current_step === 1 && <Scheduling
                                    handleNextStep={() => { dispatch(orderActions.updateCurrentStep(1)) }}
                                    handlePrevStep={() => { dispatch(orderActions.updateCurrentStep(-1)) }}
                                />
                            }
                        </Box>
                        <Box>
                            {
                                current_step === 2 && <OrderSummary
                                    handleNextStep={() => { dispatch(orderActions.updateCurrentStep(1)) }}
                                    handlePrevStep={() => { dispatch(orderActions.updateCurrentStep(-1)) }}
                                    selectedVariants={selectedVariants}
                                />
                            }
                        </Box>
                    </Box>
                </Paper>
            </Box >
        </Box >
    )
}

export default CreateOrders