import { useDispatch } from 'react-redux'
import { uiActions } from '../redux/reducers/ui-slice'

const useLoader = () => {
    const dispatch = useDispatch()
    return (state) => {
        dispatch(uiActions.setLoading(state))
    }
}

export default useLoader