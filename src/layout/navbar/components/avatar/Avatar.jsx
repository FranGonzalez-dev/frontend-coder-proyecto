import { useNavigate } from "react-router-dom";
import { Dropdown } from "../"
import { useAuthStore } from "../../../../hooks";
import Swal from "sweetalert2";

export function Avatar () {

    const { user, startLogout } = useAuthStore();
    const navigate = useNavigate()

    const onLogout = () => {
        startLogout()
        Swal.fire({
            title: `Sesión cerrada.`,
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
        <Dropdown>
            <div className="tooltip tooltip-bottom capitalize" data-tip={ user.fullname }>
                <div tabIndex={ 0 } className="avatar placeholder cursor-pointer">
                    <div className="bg-neutral-focus text-neutral-content rounded-full p-4">
                        { user.initials }
                    </div>
                </div> 
            </div>
            <ul tabIndex={ 0 } className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li className="capitalize p-2">{ user.fullname }</li>
                <span className="divider my-0"></span>
                <li onClick={ () => onLogout() } className="cursor-pointer p-2">Cerrar sesión</li>
            </ul>
        </Dropdown>
    )
}