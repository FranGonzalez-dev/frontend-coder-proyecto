import { Card, Loader } from '../../../layout';
import { useProductsStore } from '../../../hooks';
import { useEffect } from 'react';




export const Home = () => {

    const { products, isLoadingProducts, startLoadingProducts } = useProductsStore()

    useEffect(() => {
        startLoadingProducts()
    }, []);

    if( isLoadingProducts ) {
        return <Loader />
    }
    return (
    
        <div className="bg-base-200">
            <main className='pt-16'>
                <div className='products'> 
                    { products.docs?.map( product => (
                        <Card key={ product._id } {...product }/>
                    ))}
                </div>
            </main>
        </div>
    )
}

