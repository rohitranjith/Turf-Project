import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../redux/reducers/auth-slice';
import { axiosFetch } from '../utils/apiUtils';
import { useEffect } from 'react';


const useRefreshToken = () => {
    const dispatch = useDispatch();

   
    const refresh = async () => {
        try {
            const response = await axiosFetch.get('accounts/token/refresh/', {
                withCredentials: true,
            });
            const { access_token, user } = response.data.results
            dispatch(authActions.grantLoginAccess({
                accessToken: access_token,
                user: { ...user },
                isLoggedIn: true
            }));
            return access_token
        } catch (err) {
            console.error("🚀 ~ file: use-refresh-token.js:21 ~ refresh ~ err:", err)
            dispatch(authActions.removeLoginAccess());
            localStorage.removeItem('user');
            window.location.replace('/accounts/signin');
        }
    }
    return refresh;
}

export default useRefreshToken;