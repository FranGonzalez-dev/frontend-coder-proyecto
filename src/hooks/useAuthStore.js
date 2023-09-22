import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ecommerceApi } from '../api'
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store'
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';


export const useAuthStore = () => {

    const navigate = useNavigate()

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

    

    const logout = () => {
        try {
            localStorage.clear()
            dispatch( onLogout() )
            Swal.fire({
                title: `Sesión cerrada.`,
                icon: 'success',
                toast: true,
                position: 'top-right',
                showConfirmButton: false,
                background: '#181A2A',
                color: '#fff',
                timer: 2000
            }).then(() => {
                navigate('/auth/login')
            })
        } catch (err) {
            console.log( err.message )
            Swal.fire({
                title: `Error al cerrar sesión.`,
                icon: 'error',
                toast: true,
                position: 'top-right',
                showConfirmButton: false,
                background: '#181A2A',
                color: '#fff',
                timer: 2000
            })
        }
    }

    return {
        // Propiedades
        errorMessage, status, user,
        // Métodos
        startRegister, startLogin, logout, checkAuthToken
    }
}