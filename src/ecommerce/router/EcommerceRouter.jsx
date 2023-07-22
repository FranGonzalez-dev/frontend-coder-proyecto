import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Product, Cart, ControlPanel, AddNewProduct } from "../views";


export const EcommerceRouter = () => {
    return (
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='product/:id' element={ <Product/> }/>
            <Route path="/cart" element={ <Cart/> }/>
            <Route path="/admin" element={ <ControlPanel/> }/>
            <Route path="/admin/new-product" element={ <AddNewProduct/> }/>
            <Route path='/*' element={ <Navigate to='/' />}/>
        </Routes>
    )
}