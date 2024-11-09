import { useEffect, useRef, useState } from 'react'
import { Box, Stack, Typography, SpeedDial, SpeedDialIcon, SpeedDialAction, Fab, CircularProgress } from '@mui/material'
import { Edit, DeleteOutlined, Save, CloudUploadOutlined, ImageOutlined, Crop, Circle } from '@mui/icons-material';
import Cropper from "react-cropper";
import moment from 'moment';
import DropZone from './DropZone'
import ModalBox from './ModalBox'
import { urltoFile, fileToURL } from '../utils/basicUtils';

const HeadshotUploader = ({ open, title, imageUrl, onSave, onDelete, onClose }) => {

    const cropperRef = useRef()
    const [url, setUrl] = useState(imageUrl)
    const [cropMode, setCropMode] = useState(false)

    const [loadding, setLoading] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [uploading, setUploading] = useState(false)

    const getCropData = async () => {
        const croppedCanvas = cropperRef.current?.cropper.getCroppedCanvas();
        croppedCanvas.toBlob(async (blob) => {
            const filename = "cropped_image";
            const imageFile = new File([blob], filename, { type: "image/jpeg" });
            await onSave(imageFile, setUploading)
        }, "image/jpeg");
    }

    const UploadSpeedDialAction = (props) => {
        return (
            <>
                <input
                    accept="image/*"
                    onChange={async (e) => {
                        if (!e.target.files[0]) return
                        try {
                            setLoading(true)
                            const dataURL = await fileToURL(e.target.files[0])
                            setUrl(dataURL)
                            setLoading(false)
                        } catch (error) {
                            console.error('error: ', error);
                        }
                    }}
                    style={{ display: "none" }}
                    id="icon-button-file"
                    type="file"
                />
                <label htmlFor="icon-button-file">
                    <SpeedDialAction
                        icon={<CloudUploadOutlined />}
                        tooltipTitle="Upload"
                        component="span"
                        {...props}
                    ></SpeedDialAction>
                </label>
            </>
        );
    }

    useEffect(() => {
        setUrl(imageUrl)
    }, [imageUrl])

    return (
        <Box>
            <ModalBox
                open={open}
                title={title}
                closeBtn={false}
                onClose={onClose}
            >
                <Box sx={{ position: "relative" }}>
                    {loadding &&
                        <Box sx={{ position: "absolute", inset: 0, bgcolor: "#00000030", alignBoth: "center", backdropFilter: "blur(10px)" }}>
                            <CircularProgress size="50px" sx={{ color: "#fff" }} />
                        </Box>
                    }
                    <Box>
                        {
                            url ?
                                cropMode ?
                                    <Cropper
                                        ref={cropperRef}
                                        style={{ height: 400, width: "100%" }}
                                        aspectRatio={1 / 1}
                                        src={url}
                                        viewMode={1}
                                        minCropBoxHeight={50}
                                        minCropBoxWidth={50}
                                        background={true}
                                        responsive={true}
                                        autoCropArea={1}
                                        disabled
                                        checkOrientation={false}
                                        guides={true}
                                    /> :
                                    <Box>
                                        <Box component={"img"} src={url} sx={{ height: 400, width: "100%", objectFit: "contain" }} />
                                    </Box> :
                                <DropZone
                                    getDropped={async (e) => {
                                        if (!e.target.files[0]) return
                                        try {
                                            setLoading(true)
                                            const dataURL = await fileToURL(e.target.files[0])
                                            setUrl(dataURL)
                                            setLoading(false)
                                        } catch (error) {
                                            console.error('error: ', error);
                                        }
                                    }}
                                    formats={[".jpg", ".jpeg", ".png"]}
                                    multiple={false}
                                >
                                    <Stack sx={{ textAlign: "center", minHeight: 350, border: "1px dashed #e4e4e4", borderRadius: 2, bgcolor: "#f5f5f54a", alignBoth: "center" }}>
                                        <ImageOutlined sx={{ fs: 60, color: "info.main", mb: 3 }} />
                                        <Typography variant="h6" sx={{ fw: 600 }} color="initial">Drop your image here, or browse</Typography>
                                        <Typography variant="body1" color="text.secondary"> Supports: JPG, JPEG, PNG.</Typography>
                                    </Stack>
                                </DropZone>
                        }
                    </Box>
                    <Box sx={{ position: 'absolute', bottom: 15, right: 10, alignBoth: "end" }}>
                        <>
                            <Fab color="info"
                                disabled={uploading}
                                sx={{ size: 45 }}
                                onClick={async () => {
                                    if (cropMode) {
                                        getCropData()
                                    }
                                    else {
                                        if (url) {
                                            if (url.startsWith('data:')) {
                                                const newFile = await urltoFile(url, `company_logo_${moment.now()}`, "image/jpeg")
                                                await onSave(newFile, setUploading)
                                            }
                                        }
                                    }
                                    setCropMode(false)
                                }}>
                                {uploading ? <CircularProgress size="25px" sx={{ color: "#fff" }} /> : <Save />}
                            </Fab>
                            {
                                url ?
                                    <SpeedDial
                                        ariaLabel="SpeedDial basic example"
                                        sx={{ "& button": { size: 45 } }}
                                        icon={<Edit />}
                                        disabled={uploading}
                                    >
                                        <UploadSpeedDialAction />
                                        <SpeedDialAction
                                            sx={{ bgcolor: cropMode ? "info.main" : "#fff" }}
                                            icon={<Crop sx={{ color: cropMode ? "#fff" : "inherit" }} />}
                                            onClick={() => setCropMode(!cropMode)}
                                            tooltipTitle={"Crop"}
                                        />
                                        <SpeedDialAction
                                            icon={deleting ?
                                                <CircularProgress size="25px" sx={{ color: "error.main" }} /> :
                                                <DeleteOutlined
                                                    sx={{ color: "error.main" }}
                                                    onClick={async () => {
                                                        if (url.startsWith('data:')) {
                                                            setUrl("")
                                                            return
                                                        }
                                                        await onDelete(setDeleting);
                                                        setUrl("")
                                                        setCropMode(false)
                                                    }}
                                                />}
                                            tooltipTitle={"Remove Logo"}
                                        />
                                    </SpeedDial> :
                                    <Fab component="label" color="primary" sx={{ size: 45, ml: 1 }}>
                                        <input
                                            accept="image/*"
                                            onChange={async (e) => {
                                                if (!e.target.files[0]) return
                                                try {
                                                    setLoading(true)
                                                    const dataURL = await fileToURL(e.target.files[0])
                                                    setUrl(dataURL)
                                                    setLoading(false)
                                                } catch (error) {
                                                    console.error('error: ', error);
                                                }
                                            }}
                                            style={{ display: "none" }}
                                            type="file"
                                        />
                                        <SpeedDialIcon />
                                    </Fab>
                            }
                        </>
                    </Box>
                </Box>
            </ModalBox>
        </Box>
    )
}

export default HeadshotUploader

HeadshotUploader.defaultProps = {
    open: false,
    title: "",
    imageUrl: "",
    onSave: () => { },
    onDelete: () => { },
    onClose: () => { }
};