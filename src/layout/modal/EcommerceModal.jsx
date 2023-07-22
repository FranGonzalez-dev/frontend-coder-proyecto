import { useState, useEffect, useMemo } from "react";
import { useProductsStore, useUiStore } from "../../hooks";
import Modal from 'react-modal'
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';


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


export const EcommerceModal = () => {

    const { isModalOpen, closeModal } = useUiStore()
    const { selectedProduct, startSavingProduct } = useProductsStore()

    const [ formSubmitted, setFormSubmitted ] = useState( false );

    const [ formValues, setFormValues ] = useState({
        title: '',
        thumbnail: '',
        price: '',
        stock: '',
        description: ''
    });

    const titleClass = useMemo(() => {
        if( !formSubmitted ) return ''
        return ( formValues.title.length > 0 )
            ? ''
            : 'is-invalid'
    }, [ formValues.title, formSubmitted ]);

    useEffect(() => {
        if( selectedProduct !== null ){
            setFormValues({ ...selectedProduct })
        }
    }, [ selectedProduct ]);

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onCloseModal = () => {
        closeModal()
    }

    const onSubmit = async ( e ) => {
        e.preventDefault()
        setFormSubmitted( true )
        if( formValues.title.length <= 0 ) return;
        console.log(formValues);

        await startSavingProduct(formValues)
        closeModal()
        setFormSubmitted(false)
    }

    return (
        <Modal
            isOpen={ isModalOpen }
            onRequestClose={ onCloseModal }
            style={ customStyles }
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={ 200 }
        >
            <h2 className='text-2xl text-center mb-10'> Nuevo producto </h2>
            <form onSubmit={ onSubmit }>
                <div className="join gap-4">
                    <input type="text" name="title" value={ formValues.title } onChange={ onInputChanged } className="input input-bordered w-full" placeholder="Título del producto" required/>
                    <input type="url" name="thumbnail" value={ formValues.thumbnail } onChange={ onInputChanged } className="input input-bordered w-full" placeholder="URL de la imágen del producto" required/>
                </div>
                <div className="join gap-4">
                    <input type="number" name="price" value={ formValues.price } onChange={ onInputChanged } className="input input-bordered w-full" placeholder="Precio del producto" required/>
                    <input type="number" name="stock" value={ formValues.stock } onChange={ onInputChanged } className="input input-bordered w-full" placeholder="Stock del producto" required/>
                </div>
                <textarea name="description" rows="4" value={ formValues.description } onChange={ onInputChanged } className="textarea textarea-bordered w-full" placeholder="Descripción" required></textarea>

                <button type="submit" className="btn btn-primary text-primary hover:text-base-100">
                    Crear
                </button>
            </form>
        </Modal>
    )
}