import { Link } from "react-router-dom"
import { Avatar, CartIcon } from "./components"


const NavLink = ({ text, link }) => {
    return (
        <Link className="btn btn-ghost text-sm normal-case" to={ link }>
            { text }
        </Link>
    )
}

export const Navbar = () => {

    const authStatus = 'authenticated' //'not-authenticated'

    return (
        <header className="navbar bg-base-100 top-0 fixed px-4 w-full z-10">
            <article className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" to='/products' title="Ir al inicio" children='Store'/>
            </article>
            <nav className="flex">
                {
                    (authStatus === 'not-authenticated') 
                    ?
                    <>
                        <NavLink text='Iniciar sesión' link='/auth/login'/>
                        <NavLink text='Registrarse' link='/auth/register'/>
                    </>
                    : 
                    <>
                        <NavLink text='Inicio' link='/products'/>
                        <NavLink text='Panel de control' link='/products'/>
                        <CartIcon/>
                        <Avatar />   
                    </>
                }
            </nav>
        </header>
    )
}
