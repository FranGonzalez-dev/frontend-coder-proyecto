import { Link } from "react-router-dom"




export const FormContainer = ({ title, children, link = '', text = '', highlight = '' }) => {
    return (
        <article className='card mx-4 md:mx-0 md:w-1/2 bg-base-100 shadow-xl py-4 px-6 animate__animated animate__fadeIn'>
            <h1 className='text-2xl text-center mb-10'>
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
    )
}
