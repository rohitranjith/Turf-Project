import { forwardRef } from 'react';
import { Box, Modal, Dialog, Typography, Slide, IconButton, Stack } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const ModalBox = ({ children, open, onClose, sx, title, subtitle, closeBtn, bottomSheet }) => {
    const style = {
        width: '27%',
        outline: "none",
        backgroundColor: "#fff",
        borderRadius: 1,
        border: 1,
        borderColor: "divider",
        boxShadow: "-1px 2px 20px 3px #00000025",
        overflow: 'auto',
        "& *": { boxSizing: "border-box" },
        '@media (max-width: 1400px)': {
            width: '40%',
        },
        '@media (max-width: 1200px)': {
            width: '60%',
        },
        '@media (max-width: 600px)': {
            width: bottomSheet ? '100% !important' : '94%',
            margin: bottomSheet ? 0 : "20px"
        },
        ...sx,
    };

    const bottomSheetStyles = {
        ".MuiDialog-container": {
            alignItems: { xs: "end", sm: "center" }
        },
        ".MuiDialog-paper": {
            borderRadius: { xs: "15px 15px 0 0", sm: 1 }
        }
    }

    return (
        <Dialog
            open={Boolean(open)}
            TransitionComponent={Transition}
            onClose={onClose}
            sx={bottomSheet ? bottomSheetStyles : {}}
            maxWidth={"none"}
            PaperProps={{
                sx: { ...style },
                className: 'scroll-bar'
            }}
        >
            <Box>
                {
                    title && <Stack direction={'row'} sx={{ px: { xs: 1.5, sm: 1.8 }, py: { xs: .5, sm: 1 }, minHeight: 50, borderBottom: 1, borderColor: "divider", justifyContent: 'end', alignItems: subtitle ? 'start' : 'center', position: 'sticky', top: 0, left: 0, zIndex: 1, bgcolor: 'background.paper' }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography sx={{ fontSize: { xs: 14, sm: 16 }, fontWeight: 600 }} color="#000">{title}</Typography>
                            {subtitle && <Typography color="text.secondary" sx={{ fontSize: 13 }}>{subtitle}</Typography>}
                        </Box>
                        {
                            closeBtn && <Box>
                                <IconButton onClick={onClose} size='small' >
                                    <CloseIcon sx={{ fontSize: 22 }} />
                                </IconButton>
                            </Box>
                        }
                    </Stack>
                }

                <Box className='modal-child' sx={{ "& > div": { p: 1.5 }, bgcolor: 'background.paper', ".MuiInputBase-root": { minHeight: 38 } }}>
                    {children}
                </Box>
            </Box>
        </Dialog >
    )
}

export default ModalBox

ModalBox.defaultProps = {
    open: false,
    closeBtn: true,
    onClose: () => { },
};
