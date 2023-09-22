import { useState } from "react";
import Modal from 'react-modal'
import { useProductsStore, useUiStore, useForm } from "../../hooks";
import Swal from "sweetalert2";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

Modal.setAppElement('#root');

const initialForm = {
    title: '',
    thumbnail: '',
    price: '',
    stock: '',
    description: ''
}
const formValidations = {
    title:       [ value => value.length > 0, 'El título es requerido'      ],
    thumbnail:   [ value => value.length > 0, 'La URL es requerida'         ],
    price:       [ value => value.length > 0, 'El precio es requerido'      ],
    stock:       [ value => value.length > 0, 'El stock es requerido'       ],
    description: [ value => value.length > 0, 'La descripción es requerida' ],
}

export const ProductModal = () => {

    const { isModalOpen, closeModal } = useUiStore()
    const { selectedProduct, startSavingProduct, createProduct } = useProductsStore()


    const {
        title, thumbnail, price, stock, description,
        titleValid, thumbnailValid, priceValid, stockValid, descriptionValid, isFormValid,
        onInputChange, onResetForm
    } = useForm( initialForm, formValidations )


    const [ formSubmitted, setFormSubmitted ] = useState( false );

    /**
    useEffect(() => {
        if( selectedProduct !== null ){
            setFormValues({ ...selectedProduct })
        }
    }, [ selectedProduct ]);

    const onSubmit = async ( e ) => {
        e.preventDefault()
        setFormSubmitted( true )

        const fieldErrors = validateForm(formValues)
        if( Object.values( fieldErrors ).some( error => error !== '')) {
            console.log('El formulario contiene errores.')
            setFormSubmitted( false )
            return;
        }

        console.log(inputClasses)
        // if( formValues.title.length <= 0 ) return;
        console.log(formValues);

        // await startSavingProduct(formValues)
        // closeModal()
        setFormSubmitted(false)
        
    }
*/

    const onSubmit = async (e) => {
        e.preventDefault()

        setFormSubmitted( true )
        if (!isFormValid) {
            Swal.fire({
                title: `El formulario contiene errores`,
                icon: 'error',
                toast: true,
                position: 'top-right',
                showConfirmButton: false,
                background: '#181A2A',
                color: '#fff',
                timer: 2000
            })
            return;
        }
        await createProduct({ title, thumbnail, price, stock, description, })
        onResetForm()
        setFormSubmitted( false )
        closeModal()
        Swal.fire({
            title: `Producto agregado.`,
            icon: 'success',
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            background: '#181A2A',
            color: '#fff',
            timer: 1500
        }).then(() => {
            window.location.reload(true)
        })
    }

    return (
        <Modal
            isOpen={ isModalOpen }
            onRequestClose={ closeModal }
            overlayClassName='modal-fondo'
            style={ customStyles }
            closeTimeoutMS={ 200 }
        >
            <h2 className='text-2xl text-center mb-8'> Nuevo producto </h2>

            <form onSubmit={ onSubmit } className="flex flex-col gap-2">
                <div className="join gap-2">
                    <div className="flex flex-col w-full">
                    <input
                        type="text"
                        name="title"
                        value={ title }
                        onChange={ onInputChange }
                        className={`input input-bordered w-full ${ formSubmitted && titleValid ? 'input-error' : '' }`}
                        placeholder="Título"
                    />
                        <label className="text-sm text-gray-500">
                            { formSubmitted && titleValid ? titleValid : ''}
                        </label>
                    </div>
                    <div className="flex flex-col w-full">
                        <input 
                            type="url"
                            name="thumbnail"
                            value={ thumbnail }
                            onChange={ onInputChange }
                            className={`input input-bordered w-full ${ formSubmitted && thumbnailValid ? 'input-error' : '' }`}
                            placeholder="URL de la imágen"
                        />
                        <label className="text-sm text-gray-500">
                            { formSubmitted && thumbnailValid ? thumbnailValid : ''}
                        </label>
                    </div>
                    
                </div>
                <div className="join gap-2">
                    <div className="flex flex-col w-full">
                        <input 
                            type="number"
                            name="price"
                            value={ price }
                            onChange={ onInputChange } 
                            className={`input input-bordered w-full ${ formSubmitted && priceValid ? 'input-error' : '' }`}
                            placeholder="Precio" 
                        />
                        <label className="text-sm text-gray-500">
                            { formSubmitted && priceValid ? priceValid : ''}
                        </label>
                    </div>
                    <div className="flex flex-col w-full">
                        <input
                            type="number"
                            name="stock"
                            value={ stock } 
                            onChange={ onInputChange }
                            className={`input input-bordered w-full ${ formSubmitted && stockValid ? 'input-error' : '' }`}
                            placeholder="Stock" 
                        />
                        <label className="text-sm text-gray-500">
                            { formSubmitted && stockValid ? stockValid : ''}
                        </label>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <textarea
                        name="description" 
                        rows="4" 
                        cols='4'
                        value={ description }
                        onChange={ onInputChange } 
                        className={`textarea textarea-bordered w-full ${ formSubmitted && descriptionValid ? 'textarea-error' : '' }`}
                        placeholder="Descripción">
                    </textarea>
                    <label className="text-sm text-gray-500">
                        { formSubmitted && descriptionValid ? descriptionValid : ''}
                    </label>
                </div>
                <div className="btn-group gap-2 place-content-end mt-4">
                    <button type="reset" onClick={ closeModal } className="btn btn-outline btn-error">
                        <i className="ri-close-fill" />
                    </button>
                    <button type="submit" className="btn btn-primary normal-case">
                        Guardar producto
                        <i className="ri-check-fill" />
                    </button>
                </div>
            </form>
        </Modal>
    )
}