import { FormContainer } from "../../"

export const RegisterView = () => {
    return (
        <FormContainer title='Registrar usuario' text="¿Ya tienes cuenta?" highlight="Inicia sesión." link="/auth/login">
            <form className='w-full flex flex-col gap-8' action='/sessions/register' method='post'>
                <div className='join gap-2'>
                    <input type='text' name='first_name' className='input input-bordered w-full max-w-xs' placeholder='Nombre' required />
                    <input type='text' name='last_name' className='input input-bordered w-full max-w-xs' placeholder='Apellido' required />
                </div>
                <div className='join gap-2'>
                    <input type='number' name='age' className='input input-bordered w-full max-w-xs' placeholder='Edad' required />
                    <input type='email' name='email' className='input input-bordered w-full max-w-xs' placeholder='Email' required />
                </div>
                <input type='password' name='password' className='input input-bordered w-full' placeholder='Contraseña' required />
                <button type='submit' className='btn btn-primary text-primary hover:text-base-100'>
                    Registrar
                </button>
            </form>
        </FormContainer>
    )
}
