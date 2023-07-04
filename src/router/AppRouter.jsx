import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRouter } from '../auth';
import { Home } from '../ecommerce';

export function AppRouter () {

    const authStatus = 'not-authenticated' //'checking' // 'authenticated'

    return (
        <Routes>
            {
                ( authStatus === 'not-authenticated' )
                ?   <Route path="/auth/*" element={ <AuthRouter/> }/>
                :   <Route path="/*" element={ <Home/> }/>
            }
            <Route path="/*" element={ <Navigate to='/auth/login'/> }/>
        </Routes>
    )
}