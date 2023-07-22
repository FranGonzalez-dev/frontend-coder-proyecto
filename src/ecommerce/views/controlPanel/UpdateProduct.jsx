
export const UpdateProduct = () => {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <article className="card w-1/2 h-full">
                <h1 className='text-2xl text-center mb-10'>
                    Actualizar Producto
                </h1>
                <form className="w-full flex flex-col gap-4" >
                    <div className="join gap-4">
                        <input type="text" name="title" className="input input-bordered w-full" placeholder="Título del producto" required />
                        <input type="url" name="thumbnail" className="input input-bordered w-full" placeholder="URL de la imágen del producto" required />
                    </div>
                    <div className="join gap-4">
                        <input type="number" name="price" className="input input-bordered w-full" placeholder="Precio del producto" required />
                        <input type="number" name="stock" className="input input-bordered w-full" placeholder="Stock del producto" required />
                    </div>
                    <textarea name="description" rows="4" className="textarea textarea-bordered w-full" placeholder="Descripción" required></textarea>

                    <button type="submit" className="btn btn-primary text-primary hover:text-base-100">
                        Crear
                    </button>
                </form>
            </article>
        </section>
    )
}
