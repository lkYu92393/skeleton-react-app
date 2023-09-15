import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PlaceholderRoute from "../features/placeholder/routes/Index";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="placeholder/*" element={<PlaceholderRoute />} />
                <Route path="/" element={<div>Root</div>} />
                <Route path='*' element={<Redirect to='/' />} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoute;