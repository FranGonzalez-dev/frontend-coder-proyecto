import { useEffect } from "react"
import { useAuthStore, useForm } from '../../../hooks'
import { FormContainer } from "../../components"
import Swal from "sweetalert2"

import { useNavigate } from "react-router-dom"

const loginFormFields = {
    email: '',
    password: '',
}

export const LoginView = () => {

    const { startLogin, errorMessage } = useAuthStore();
    const { email, password, onInputChange } = useForm( loginFormFields )

    const navigate = useNavigate();

    const loginSubmit = async ( e ) => {
        e.preventDefault();

        startLogin({ email: email, password: password })
        
        Swal.fire({
            title: `¡Bienvenido!`,
            icon: 'success',
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            background: '#181A2A',
            color: '#fff',
            timer: 2000
        }).then(() => {
            navigate('/')
        })
    }

    useEffect(() => {
        if ( errorMessage !== undefined ) {
          Swal.fire('Error en la autenticación', errorMessage, 'error');
        }    
    }, [errorMessage])

    return (
        <FormContainer title='Iniciar sesión' text="¿Nuevo en este lugar?" highlight="Crea una cuenta." link="/auth/register">
            <form className='w-full flex flex-col gap-8' onSubmit={ loginSubmit }>
                <input 
                    type='email'
                    name='email'
                    value={ email } 
                    onChange={ onInputChange } 
                    className='input input-bordered w-full'
                    placeholder='Email'
                    required
                />
                <input 
                    type='password'
                    name='password'
                    value={ password }
                    onChange={ onInputChange } 
                    className='input input-bordered w-full'
                    placeholder='Contraseña'
                    required
                />
                <button type='submit' className='btn btn-primary text-primary hover:text-base-100'>
                    Ingresar
                </button>
            </form>
            <div className='divider'> O </div>
            <a href='/sessions/github' className='btn btn-neutral'> Ingresa con Github </a>
        </FormContainer>
    )
}