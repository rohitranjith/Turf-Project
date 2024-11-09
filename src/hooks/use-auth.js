import { useSelector } from 'react-redux'
const useAuth = () => {
    const auth = useSelector(state => state.auth)
    const { user, isLoggedIn } = auth
    return {
        user: user,
        protector: (allowedList = []) => {
            if (!isLoggedIn) {
                return false
            }
            for (let role of allowedList) {
                if (user.role_id === role) {
                    return true
                }
            }
            return false
        }
    }
}

export default useAuth