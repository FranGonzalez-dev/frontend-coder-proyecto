import data from '../../../mocks/with-response.json'
import { Card } from '../../../layout';

export const Home = () => {
    const products = data.data.docs;
    return (
        <div className="bg-base-200">
            <main className='pt-16'>
                <div className='products'> 
                    { products.map( product => (
                        <Card key={ product._id } {...product }/>
                    ))}
                </div>
            </main>
        </div>
    )
}
