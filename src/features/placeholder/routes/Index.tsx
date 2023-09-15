import { Redirect, Switch, Route } from "react-router-dom";

const PartA = () => <div>Part A</div>

const PlaceholderRoute = () => {
    return (
        <Switch>
            <Route path="a" component={<PartA/>} />
            <Route path="b" element={<div>Part B</div>} />
            <Route path="*" element={<Redirect to='a' />} />
        </Switch>
    )
}

export default PlaceholderRoute;
