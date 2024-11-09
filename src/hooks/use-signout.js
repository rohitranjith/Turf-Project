import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
// import { jobActions } from "../redux/reducers/job-slice"
import { alertMsg } from "../utils/basicUtils"
import { uiActions } from "../redux/reducers/ui-slice"
import { authActions } from "../redux/reducers/auth-slice"

const useSignout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    return async () => {
        try {
            // const response = await axios.post("accounts/signout/", {}, { withCredentials: true })
            alertMsg('Logged Out Successfully', 'success')
            navigate('/accounts/login')
            dispatch(uiActions.setDarkMode(false))
            dispatch(authActions.grantLoginAccess({
                accessToken: '',
                user: {},
                isLoggedIn: false
            }));
            localStorage.clear()
        }
        catch (err) {
            console.error("🚀 ~ file: use-signout.js:19 ~ return ~ err:", err)
        }
    }
}

export default useSignout