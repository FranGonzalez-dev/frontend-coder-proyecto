import { Link } from "react-router-dom";

export const FormContainer = ({ title, children, link = '', text = '', highlight = '' }) => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-base-100">
            <article className=' mx-4 md:mx-0 md:w-1/2 animate__animated animate__fadeIn'>
                <h1 className='text-2xl font-medium text-center mb-6'>
                    { title }
                </h1>

                {/* Contenido */}
                {
                    children
                }

                {/* Navegación */}
                <p className="pt-4 text-center">
                    { text } <Link to={ link } children={ highlight } className="link link-primary link-hover font-bold"/>
                </p>
            </article>
        </div>
    )
}