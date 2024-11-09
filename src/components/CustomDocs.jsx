import { Avatar, Box, CircularProgress, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { PictureAsPdf } from '@mui/icons-material';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ForceLoadImage from './ForceLoadImage';

const CustomDocs = ({ imagesx, docs, deleteDocs, showDownloadIcon, showDeleteIcon, sx }) => {
    const [isLoading, setIsLoading] = useState(false)
    return (
        <Box sx={{
            borderRadius: '5px', overflow: 'hidden',
            background: docs.mimetype.search("pdf") !== -1 ? '#fdcbd12b' : (docs.mimetype.search("image") !== -1 ? '#f5f5f5' : '#edf6ff'),
            border: docs.mimetype.search("pdf") !== -1 ? '1px solid #fdcbd196' : (docs.mimetype.search("image") !== -1 ? '1px solid #24232326' : '1px solid #0288d13d'),
            cursor: "pointer", ...sx
        }}>
            <Box sx={{ height: '130px', position: "relative", ...imagesx }}>
                {
                    isLoading
                        ?
                        <Box sx={{ position: 'absolute', inset: 0, bgcolor: "#fff", display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', flexDirection: 'column', gap: 1 }}>
                            <CircularProgress
                                sx={{ color: 'error.main' }}
                                size={'25px'}
                            />
                            <Typography variant="body1" color="initial" >Deleting... </Typography>
                        </Box>
                        :
                        <>
                            {
                                docs.mimetype.search("image") !== -1 ?
                                    <ForceLoadImage url={docs.url} src={docs.low ? docs.low : docs.url ? docs.url : docs.imageurl} style={{ height: '100%', width: '100%', borderRadius: 0, objectFit: 'cover', background: "#fff", boxSizing: "border-box", fontSize: '16px' }} /> :
                                    <Avatar sx={{
                                        height: '100%', width: '100%', borderRadius: 0,
                                        background: docs.mimetype.search("pdf") !== -1 ? "#fdcbd1a1" : "#bde0fed4",
                                        borderBottom: docs.mimetype.search("image") === 0 && '1px solid #0288d13d',
                                        boxSizing: "border-box", fontSize: '16px'
                                    }}>
                                        {docs.mimetype.search("pdf") !== -1 ?
                                            <PictureAsPdf sx={{ fontSize: 30, color: '#f44040' }} /> :
                                            <DescriptionOutlinedIcon sx={{ fontSize: 30, color: 'info.main' }} />}
                                    </Avatar>
                            }
                            {showDeleteIcon &&
                                <IconButton onClick={async (e) => {
                                    e.stopPropagation()
                                    await setIsLoading(true)
                                    await deleteDocs(docs)
                                    setIsLoading(false)
                                }} sx={{ zIndex: 10, backgroundColor: "#f44040 !important", color: "#FFF !important", position: "absolute", top: 0, right: 0, borderRadius: "0 0 0 4px", p: .5 }}>
                                    <DeleteOutlineOutlinedIcon sx={{ fontSize: 16 }} />
                                </IconButton>
                            }
                            {showDownloadIcon &&
                                <IconButton component={'a'} href={docs.url ? docs.url : docs.imageurl} onClick={(e) => {
                                    e.stopPropagation()
                                }} sx={{ zIndex: 10, backgroundColor: "#0288d1", '&:hover': { backgroundColor: "#0288d1", }, color: "#FFF !important", position: "absolute", top: 0, left: 0, borderRadius: "0 0 4px 0", p: .5 }}>
                                    <FileDownloadOutlinedIcon sx={{ fontSize: 16 }} />
                                </IconButton>
                            }
                        </>
                }

            </Box>
            <Box sx={{
                py: .6, px: .8,
                borderTop: docs.mimetype.search("image") === 0 && '1px solid #24232326',
            }}>
                <Typography sx={{ display: '-webkit-box', WebkitLineClamp: 1, overflow: 'hidden', textOverflow: 'ellipsis', WebkitBoxOrient: 'vertical', fontSize: '13px' }}>{docs.title ? docs.title : docs.name}</Typography>
            </Box>
        </Box >
    )
}

export default CustomDocs