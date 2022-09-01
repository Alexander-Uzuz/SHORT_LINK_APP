import { useAppSelector } from 'core/redux/hooks';
import {Outlet, Navigate} from 'react-router-dom';

export const RequireAuth = () => {
    const {token} = useAppSelector((state => state.user.user))
    
    if(token){
        return <Outlet/>
    }else{
        return <Navigate to='/login'/>
    }
}