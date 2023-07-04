import { FormContainer } from "../../components"

export const LoginView = () => {
    return (
        <FormContainer title='Iniciar sesión' text="¿Aún no tienes cuenta?" highlight="Regístrate." link="/auth/register">
            <form className='w-full flex flex-col gap-8' action='/sessions/login' method='post'>
                <input type='email' name='email' className='input input-bordered w-full' placeholder='Email' required/>
                <input type='password' name='password' className='input input-bordered w-full' placeholder='Contraseña' required/>
                <button type='submit' className='btn btn-primary text-primary hover:text-base-100'>
                    Ingresar
                </button>
            </form>
            <div className='divider'> O </div>
            <a href='/sessions/github' class='btn btn-neutral'> Ingresa con Github </a>
        </FormContainer>
    )
}