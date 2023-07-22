import { Routes, Route } from "react-router-dom";
import { AuthRouter } from '../auth';
import { EcommerceRouter } from "../ecommerce";

export function AppRouter () {

    return (
        <Routes>
            <Route path="/auth/*" element={ <AuthRouter/> }/>
            <Route path="/*" element={ <EcommerceRouter/> }/>
        </Routes>
    )
}