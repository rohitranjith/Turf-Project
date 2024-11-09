import PropTypes from 'prop-types';
import { Box, Button, Typography, Stack, } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import ModalBox from './ModalBox';
import { useTheme } from '@emotion/react';
import { useRef } from 'react';
import { useEffect } from 'react';
import trashIcon from '../assets/delete-icon.gif'
import warningIcon from '../assets/warning-icon.gif'
import checkIcon from '../assets/check-icon.gif'


/**
 * The `Popup` is a wrapper for the most of alerts and popups.
 * 
 * These are the default props for popup modal
 *
 * ```js
 * {
 *     primaryBtnTxt: 'Ok',
 *     primaryBtnStyles: {},
 *     onPrimaryClick: () => { },
 *     secondaryBtnTxt: 'Cancel',
 *     secondaryBtnStyles: {},
 *     onSecondaryClick: () => { },
 *     show: false,
 *     title: '',
 *     variant: 'info',
 *     consent: false,
 * }
 * ```
 */

const Popup = (props) => {
    const theme = useTheme()
    const [isPrimaryLoading, setIsPrimaryLoading] = useState(false)
    const [isSecondaryLoading, setIsSecondaryLoading] = useState(false)
    // const [disablePrimary, setDisablePrimary] = useState(props.consent)
    const bgColor = props.variant === "error" ? '#d32f2f2b' : props.variant === "warning" ? '#fbbe313b' : '#02304721'

    const isPrimaryClicked = useRef(false)
    useEffect(() => {
        if (!props.show) {
            isPrimaryClicked.current = false
        }
    }, [props.show])
    return (
        <ModalBox
            open={props.show}
            sx={{ border: 0, boxShadow: 0, width: 400, borderRadius: 4, p: 1, pt: 1 }}
        >
            <Box sx={{
                p: 2,
                background: `linear-gradient(${bgColor}, transparent 30%)`,
                position: "relative", borderRadius: 3,
            }}>
                {/* <IconButton size="small" sx={{ position: "absolute", top: 8, right: 8, backgroundColor: '#f5f5f5' }} onClick={(e) => { props.onSecondaryClick(e, setIsSecondaryLoading) }}>
                    <CloseIcon fontSize="small" />
                </IconButton> */}
                <Box sx={{ "& img": { height: '60%', width: '60%' }, textAlign: "center", mt: 3, display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{
                        width: '75px', height: '75px', borderRadius: '50%', p: 1,
                        background: `linear-gradient(#fff 50%, ${bgColor} )`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        {props.variant === "error" && <Box component="img" src={trashIcon} ></Box>}
                        {props.variant === "warning" && <Box component="img" src={warningIcon} ></Box>}
                        {props.variant === "success" && <Box component="img" src={checkIcon}></Box>}
                    </Box>

                </Box>
                <Box sx={{ mt: 4 }}>
                    <Box sx={{ textAlign: "center", mb: 1.5 }}>
                        <Typography variant='span' sx={{ fontSize: { xs: "14px", md: '16px' }, fontWeight: "500", mb: 2, color: "#121212" }}>{props.title}</Typography>
                    </Box>
                    {props.children}
                </Box>
                <Box sx={{ mt: 5 }}>
                    <Stack gap={1} alignItems="center" sx={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Button sx={{ px: 4, ...props.secondaryBtnStyles, borderColor: '#d5d5d5', color: '#222' }} color={'inherit'} variant='outlined' onClick={(e) => { props.onSecondaryClick(e, setIsSecondaryLoading) }}>
                            {props.secondaryBtnTxt}
                            {isSecondaryLoading && <CircularProgress sx={{ width: "20px !important", height: "20px !important", verticalAlign: "middle", ml: 1, color: "grey.500" }} />}
                        </Button>
                        <Button color={props.variant === "error" ? "error" : "primary"} sx={{ px: 4, ...props.primaryBtnStyles }} variant="contained" onClick={(e) => props.onPrimaryClick(e, setIsPrimaryLoading)}>
                            {props.primaryBtnTxt}
                            {isPrimaryLoading && <CircularProgress sx={{ width: "20px !important", height: "20px !important", verticalAlign: "middle", ml: 1, color: "grey.500" }} />}
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </ModalBox >
    )
}
Popup.propTypes = {
    primaryBtnTxt: PropTypes.string,
    secondaryBtnTxt: PropTypes.string,
    show: PropTypes.bool,
    onPrimaryClick: PropTypes.func,
    onSecondaryClick: PropTypes.func,
    variant: PropTypes.string,
    title: PropTypes.string,
    consent: PropTypes.bool,
};
Popup.defaultProps = {
    primaryBtnTxt: 'Ok',
    primaryBtnStyles: {},
    onPrimaryClick: () => { },
    secondaryBtnTxt: 'Cancel',
    secondaryBtnStyles: {},
    onSecondaryClick: () => { },
    show: false,
    title: '',
    variant: 'info',
    consent: false,
};

export default Popup