import axios from "axios"
import { alertMsg } from "./basicUtils";

export const BASE_URL = process.env.NODE_ENV === "development" ? process.env.REACT_APP_LOCAL_SERVER_URL : process.env.REACT_APP_LIVE_SERVER_URL;
export const BASE_DOWNLOAD_URL = BASE_URL.replace("/api", "");

export const axiosFetch = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosFetch.interceptors.request.use(
    config => {
        return config;
    },
    error => Promise.reject(error)
);

axiosFetch.interceptors.response.use(
    resp => resp,
    async (error) => {
        if (error?.name !== 'CanceledError') {
            handleApiError(error)
        }
        return Promise.reject(error);
    }
);

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

axiosPrivate.interceptors.request.use(
    config => {
        return config;
    },
    error => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
    resp => resp,
    async (error) => {
        if (error?.name !== 'CanceledError') {
            handleApiError(error)
        }
        return Promise.reject(error);
    }
);

export const handleApiError = (error) => {

    if (error?.response?.data?.message) {
        let serverError = error?.response?.data?.message

        if (typeof serverError == 'object') {
            alertMsg(
                Object.keys(serverError).map(ele => {
                    if (typeof serverError[ele] == "string") {
                        return serverError[ele]
                    }
                    if (Array.isArray(serverError[ele])) {
                        return serverError[ele].join('\n')
                    }
                    return `${ele} error` //nested error
                }).join('\n'), 'error'
            )
        } else {
            if (serverError === "Token prefix missing") {
                return
            }
            if (serverError === 'Your account is inactive') {
                return
            }
            if (serverError === 'Item name already exists') {
                return
            }
            alertMsg(serverError, 'error')
        }
    }
    else if (error?.response?.data?.detail) {
        if (error?.response?.data?.detail === "Access token expired") {
            return
        }
        let serverError = error?.response?.data?.detail
        alertMsg(
            Object.keys(serverError).map(ele => {
                if (typeof serverError[ele] == "string") {
                    return serverError[ele]
                }
                if (Array.isArray(serverError[ele])) {
                    return serverError[ele].join('\n')
                }
                return `${ele} error` //nested error
            }).join('\n'), 'error')
    }
    else {
        alertMsg(error.message, 'error')
    }
}

export const uploadPresigned = async (upload, signal, onUploadProgress) => {
    try {
        await axios.put(upload.url, upload.file,
            {
                headers: { "x-amz-acl": "public-read" },
                onUploadProgress: onUploadProgress,
                signal
            })
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}