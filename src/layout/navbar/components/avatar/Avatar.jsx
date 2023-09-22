import { Dropdown } from "../"
import { useAuthStore } from "../../../../hooks";

export function Avatar () {

    const { user, logout } = useAuthStore();
    
    return (
        <Dropdown>
            <div className="tooltip tooltip-bottom capitalize" data-tip={ user.fullname }>
                <div tabIndex={ 0 } className="avatar placeholder cursor-pointer">
                    <div className="bg-neutral-focus text-neutral-content rounded-full p-3">
                        { user.initials }
                    </div>
                </div> 
            </div>
            <ul tabIndex={ 0 } className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li className="capitalize p-2">{ user.fullname }</li>
                <span className="divider my-0"></span>
                <li onClick={ () => logout() } className="cursor-pointer p-2">Cerrar sesión</li>
            </ul>
        </Dropdown>
    )
}