import { Link } from "react-router-dom"
import { useAuthStore, useCartStore } from "../../hooks"


export const Card = ({ _id, thumbnail, title, price }) => {

    const { user } = useAuthStore();
    const { addToCart } = useCartStore()

    const product = { _id, thumbnail, title, price }

    return (
        <article className='card bg-base-100 shadow-xl animate__animated animate__fadeIn'>
            <Link to={`/product/${ _id }`}>
                <img src={ thumbnail } alt={ title } className='product-image'/>
            </Link>
            <div className='card-body p-2 gap-0'>
                <h2 className='card-title text-sm font-normal mt-2'>{ title }</h2>
                <p className='text-md font-bold mb-2'>${ price }</p>
                {
                    user?.role === 'user' &&
                    <button className="btn btn-neutral normal-case w-full" onClick={ async () => await addToCart( _id ) }>
                        Añadir al carrito
                    </button>
                }
            </div>
        </article>
    )
}
