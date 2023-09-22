import { useNavigate } from "react-router-dom"
import { FormContainer, FormInput } from "../../layout"
import { useAuthStore, useForm } from "../../hooks"
import Swal from "sweetalert2"




const formFields = {
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    password: ''
}

export const Register = () => {

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
        <FormContainer title='Registro' text="¿Ya tienes cuenta?" highlight="Inicia sesión." link="/auth/login">
            <form className='w-full flex flex-col gap-4' onSubmit={ registerUser }>
                <div className="join gap-2">
                    <FormInput type='text' name='first_name' value={first_name} action={ onInputChange }placeholder='Nombre'/>
                    <FormInput type='text' name='last_name' value={last_name} action={ onInputChange }placeholder='Apellido'/>
                </div>
                
                <div className="join gap-2">
                    <FormInput type='email' name='email' value={email} action={ onInputChange }placeholder='Email'/>
                    <FormInput type='number' name='age' value={age} action={ onInputChange }placeholder='Edad'/> 
                </div>
                <FormInput type='password' name='password' value={password} action={ onInputChange }placeholder='Contraseña'/> 
                
                <button type='submit' className='btn btn-primary'>
                    Registrar
                </button>
            </form>
        </FormContainer>
    )
}
