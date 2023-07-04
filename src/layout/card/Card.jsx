
export const Card = ({ _id, thumbnail, title, price }) => {
    return (
        <article class='card bg-base-100 shadow-xl'>
            <a href={`/products/${ _id }`}>
                <img src={ thumbnail } alt={ title }/>
            </a>
            <div class='card-body p-2'>
                <h2 class='card-title text-sm'>{ title }</h2>
                <p class='text-sm'>${ price }</p>
                <button class="btn btn-neutral normal-case w-full">
                    Añadir al carrito
                </button>
            </div>
        </article>
    )
}
