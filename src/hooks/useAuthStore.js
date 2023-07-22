import { useSelector, useDispatch } from "react-redux";
import { ecommerceApi } from '../api'
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store'


export const useAuthStore = () => {


    const { status, user, errorMessage } = useSelector( state => state.auth )
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {
            const { data } = await ecommerceApi.post('/auth/login', { email, password })
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin( data ))
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch( clearErrorMessage() )
            }, 10)
        }
    }

    const startRegister = async ({ first_name, last_name, age, email, password }) => {
        dispatch( onChecking() );
        try {
            await ecommerceApi.post('/auth/register', { first_name, last_name, age, email, password });
        } catch ( error ) {
            dispatch( onLogout( error.response.data?.msg || '--' ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if( !token ) return dispatch( onLogout() )

        try {
            const { data } = await ecommerceApi.get('/auth/renew')
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin( data ))
        } catch (error) {
            localStorage.clear()
            dispatch( onLogout() )
        }

    }

    

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() )
    }

    return {
        // Propiedades
        errorMessage, status, user,
        // Métodos
        startRegister, startLogin, startLogout, checkAuthToken
    }
}