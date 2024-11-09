import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { axiosPrivate, handleApiError } from '../utils/apiUtils';
import useLoader from './use-loader';
import useRefreshToken from './use-refresh-token';
import useAuth from './use-auth';
import { authActions } from '../redux/reducers/auth-slice';


const useAxiosPrivate = (options = { enableLoader: true }) => {
    const { enableLoader } = options;
    const loader = useLoader()
    const refresh = useRefreshToken();
    const accessToken = useSelector(state => state.auth.accessToken)

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                enableLoader && loader(true)
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${accessToken}`;
                }
                return config;
            },
            error => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            resp => {
                enableLoader && loader(false)
                return resp
            },
            async (error) => {
                enableLoader && loader(false)
                const prevRequest = error?.config;
                if ((error?.response?.status === 401 || (error?.response?.status === 403 && error?.response?.data?.detail === "Access token expired")) && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const access_token = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${access_token}`;
                    return axiosPrivate(prevRequest);
                }
                // handleApiError(error)
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }


    }, [accessToken, refresh]);

    return axiosPrivate;
}

export default useAxiosPrivate;