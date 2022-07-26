import { Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom";

import { Cart, Home } from '@src/pages'

export default function Routes() {
    return(
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart/>} />
            </WrapperRoutes>
        </BrowserRouter>
    )
}
