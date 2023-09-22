import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Avatar, CartIcon } from "./components"
import { useAuthStore } from "../../hooks"


const NavLink = ({ text, link }) => {
    return (
        <Link className="btn btn-ghost h-9 text-sm normal-case" to={ link }>
            { text }
        </Link>
    )
}

export const Navbar = () => {

    const { status, user, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken()
    }, []);

    return (
        <header className="navbar bg-base-100 top-0 fixed h-12 w-full z-10 px-4">
            <article className="flex-1">
                <Link className="btn btn-ghost h-9 normal-case text-lg" to='/products' title="Ir al inicio">
                    <i className="ri-store-2-line font-normal"/>
                    Store
                </Link>
            </article>
            <nav className="flex gap-2">
                <NavLink text='Inicio' link='/products'/>
                {
                    ( status === 'not-authenticated' ) 
                    ?
                    <NavLink text='Iniciar sesión' link='/auth/login'/>
                    : 
                    <>
                        { user?.role === 'admin' && <NavLink text='Panel de control' link='/admin'/> }
                        { user?.role === 'user' && <CartIcon/> }
                        <Avatar />
                    </>
                }
            </nav>
        </header>
    )
}
