import { Navigate, Routes, Route } from "react-router-dom";

const PlaceholderRoute = () => {
    return (
        <Routes>
            <Route path="a" element={<div>Part A</div>} />
            <Route path="b" element={<div>Part B</div>} />
            <Route path="*" element={<Navigate to='a' />} />
        </Routes>
    )
}

export default PlaceholderRoute;
