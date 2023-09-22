import { Navigate, Route, Routes } from 'react-router-dom'
import { Login, Register, RenewPassword } from '../views'

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path='login' element={ <Login/> }/>
            <Route path='register' element={ <Register/> }/>
            <Route path='renew-password' element={ <RenewPassword/> }/>
            <Route path='/*' element={ <Navigate to='/auth/login' />}/>
        </Routes>
    )
}
