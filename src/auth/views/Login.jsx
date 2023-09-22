import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useAuthStore, useForm } from '../../hooks'
import { FormContainer, FormInput } from "../../layout"
import Swal from "sweetalert2"

import { useNavigate } from "react-router-dom"

const loginFormFields = {
    email: '',
    password: '',
}

export const Login = () => {

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
        <FormContainer title='¡Bienvenido otra vez!' text="¿Nuevo en este lugar?" highlight="Crea una cuenta." link="/auth/register">
            <form className='w-full flex flex-col gap-4' onSubmit={ loginSubmit }>
                <FormInput type='email' name='email' value={email} action={ onInputChange } placeholder='Email'/>
                <FormInput type='password' name='password' value={password} action={ onInputChange } placeholder='Contraseña'/>

                <Link to='/auth/renew-password' className="text-sm text-right link link-hover" children='Olvidé mi contraseña'/>

                <button type='submit' className='btn btn-primary'>
                    Ingresar
                </button>
            </form>
            <div className='divider text-sm font-thin uppercase'> o ingresa con </div>
            <a href='/sessions/github' className='btn btn-neutral'> Github </a>
        </FormContainer>
    )
}