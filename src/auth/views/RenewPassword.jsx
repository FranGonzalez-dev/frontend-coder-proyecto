import { useForm } from "../../hooks";
import { FormContainer, FormInput } from "../../layout";

const formFields = {
    email: ''
}

export const RenewPassword = () => {

    const { email, onInputChange } = useForm( formFields )

    return (
        <FormContainer title='Reestablecer contraseña' text='¿Recordaste tu contraseña?' highlight="Inicia sesión" link="/auth/login">
            <form className="w-full flex flex-col gap-4">
                <FormInput type='email' name='email' value={ email } action={ onInputChange } placeholder='Email'/>

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </FormContainer>
    )
}