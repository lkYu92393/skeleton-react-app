import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PlaceholderRoute from "./../features/placeholder/routes/index";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="placeholder/*" element={<PlaceholderRoute />} />
                <Route path="/" element={<div>Root</div>} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute;