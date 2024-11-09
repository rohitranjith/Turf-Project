import { useEffect } from 'react'
import { axiosFetch, } from '../utils/apiUtils';
import useLoader from './use-loader';


const useAxios = (options = { enableLoader: true }) => {
    const { enableLoader } = options;
    const loader = useLoader()
    useEffect(() => {
        const requestIntercept = axiosFetch.interceptors.request.use(
            config => {
                enableLoader && loader(true)
                return config;
            },
            error => Promise.reject(error)
        );

        const responseIntercept = axiosFetch.interceptors.response.use(
            resp => {
                enableLoader && loader(false)
                return resp
            },
            async (error) => {
                enableLoader && loader(false)
                if (error?.name !== 'CanceledError') {
                    // handleApiError(error)
                    return Promise.reject(error);
                }
            }
        );

        return () => {
            axiosFetch.interceptors.request.eject(requestIntercept);
            axiosFetch.interceptors.response.eject(responseIntercept);
        }
    }, [loader, enableLoader])

    return axiosFetch


}

export default useAxios