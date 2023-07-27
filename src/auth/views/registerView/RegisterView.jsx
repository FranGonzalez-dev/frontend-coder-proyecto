import { useNavigate } from "react-router-dom"
import { FormContainer } from "../../"
import { useAuthStore, useForm } from "../../../hooks"
import Swal from "sweetalert2"


const formFields = {
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    password: ''
}

export const RegisterView = () => {

    const { startRegister, errorMessage } = useAuthStore();

    const { first_name, last_name, age, email, password, onInputChange } = useForm( formFields )

    const navigate = useNavigate();

    const registerUser = ( e ) => {
        e.preventDefault()

        startRegister({ first_name, last_name, age, email, password })

        Swal.fire({
            title: `¡Registro exitoso!`,
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
    }

    return (
        <FormContainer title='Registrar usuario' text="¿Ya tienes cuenta?" highlight="Inicia sesión." link="/auth/login">
            <form className='w-full flex flex-col gap-8' onSubmit={ registerUser }>
                <div className='join gap-2'>
                    <input
                        type='text'
                        name='first_name'
                        value={ first_name }
                        onChange={ onInputChange }
                        className='input input-bordered w-full max-w-xs'
                        placeholder='Nombre'
                        required
                    />
                    <input
                        type='text'
                        name='last_name'
                        value={ last_name }
                        onChange={ onInputChange }
                        className='input input-bordered w-full max-w-xs'
                        placeholder='Apellido'
                        required
                    />
                </div>
                <div className='join gap-2'>
                    <input
                        type='number'
                        name='age'
                        value={ age }
                        onChange={ onInputChange }
                        className='input input-bordered w-full max-w-xs' placeholder='Edad'
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        value={ email }
                        onChange={ onInputChange }
                        className='input input-bordered w-full max-w-xs'
                        placeholder='Email'
                        required
                    />
                </div>
                <input
                    type='password'
                    name='password'
                    value={ password }
                    onChange={ onInputChange }
                    className='input input-bordered w-full'
                    placeholder='Contraseña'
                    required
                />
                <button type='submit' className='btn btn-primary'>
                    Registrar
                </button>
            </form>
        </FormContainer>
    )
}
