import { useNavigate } from "react-router-dom"
import { FormContainer } from "../../../auth"
import { useForm, useProductsStore } from "../../../hooks"
import Swal from "sweetalert2"

const formFields = {
    title: '',
    thumbnail: '',
    price: '',
    stock: '',
    description: ''
}

export const AddNewProduct = () => {
    const { createProduct } = useProductsStore()

    const { title, thumbnail, price, stock, description, onInputChange } = useForm( formFields )

    const navigate = useNavigate()

    const onCreateProduct = ( e ) => {
        e.preventDefault()
        createProduct({ title, thumbnail, price, stock, description })

        Swal.fire({
            title: 'Producto create.',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000
        }).then(() => {
            navigate('/admin')
        })
    }

    return (

        <FormContainer title='Nuevo producto'>    
            <form className="w-full flex flex-col gap-2" onSubmit={ onCreateProduct }>
                <div className="join gap-2">
                    <input 
                        type="text" 
                        name="title"
                        value={ title }
                        onChange={ onInputChange }
                        className="input input-bordered w-full"
                        placeholder="Título del producto"
                        required
                    />
                    <input
                        type="url"
                        name="thumbnail"
                        value={ thumbnail }
                        onChange={ onInputChange }
                        className="input input-bordered w-full" placeholder="URL de la imágen del producto"
                        required
                    />
                </div>
                <div className="join gap-2">
                    <input
                        type="number"
                        name="price"
                        value={ price }
                        onChange={ onInputChange }
                        className="input input-bordered w-full"
                        placeholder="Precio del producto"
                        required
                    />
                    <input
                        type="number"
                        name="stock"
                        value={ stock }
                        onChange={ onInputChange }
                        className="input input-bordered w-full"
                        placeholder="Stock del producto"
                        required
                    />
                </div>
                <textarea
                    name="description"
                    rows="4"
                    className="textarea textarea-bordered w-full"
                    placeholder="Descripción"
                    required
                    value={ description }
                    onChange={ onInputChange }
                >
                    { description }
                </textarea>

                <button type="submit" className="btn btn-primary">
                    Crear
                </button>
            </form>
        </FormContainer>
    )
}
