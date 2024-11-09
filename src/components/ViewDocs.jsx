import React from 'react'
import ModalBox from './ModalBox'
import { Box } from '@mui/material'

const ViewDocs = ({ open, viewed, onClose, onError }) => {
    return (
        <ModalBox
            open={open}
            onClose={onClose}
            title={viewed.name}
            sx={{ width: { xs: "100%", sm: "80% !important", md: "950px !important" }, maxWidth: { xs: "95%", sm: "80%", md: "950px" }, '& .modal-child > div': { p: 1 } }}
        >
            <Box sx={{ height: "100%", overflowY: "auto", padding: "8px !important", "& *": { zIndex: 1500 } }} className="scroll-bar">
                {viewed.type.search("image") !== -1 ?
                    <img
                        onError={onError}
                        src={viewed.url} style={{ width: "100%", height: "auto" }} alt="" /> :
                    <iframe
                        onError={onError}
                        src={`https://docs.google.com/viewer?url=${viewed.url}&embedded=true`} style={{ border: "none", height: "100%", minHeight: "88vh", width: "100%" }}></iframe>
                }
            </Box>
        </ModalBox>
    )
}

export default ViewDocs