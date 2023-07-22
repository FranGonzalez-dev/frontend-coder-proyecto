import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useCartStore } from "../../../../hooks"




export const CartIcon = () => {

    const { getCart, cart } = useCartStore();

    useEffect(() => {
        getCart()
    }, [cart]);

    
    return (    
        <Link to='/cart' className="btn btn-ghost btn-circle">
            <div className="indicator">
                <i className="ri-shopping-cart-2-line font-normal text-2xl"/>
                { 
                    cart == 'no-data'
                    ? null
                    : <span className="badge badge-sm indicator-item">{ cart?.length }</span>
                }
            </div>
        </Link>
    )
}
