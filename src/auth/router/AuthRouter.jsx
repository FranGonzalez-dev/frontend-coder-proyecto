import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginView, RegisterView } from '../views'

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path='login' element={ <LoginView/> }/>
            <Route path='register' element={ <RegisterView/> }/>
            <Route path='/*' element={ <Navigate to='/auth/login' />}/>
        </Routes>
    )
}
