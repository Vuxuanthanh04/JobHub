import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: JSX.Element;
}
const ProtectedRouter = ({ children }: Props) => {
    if (localStorage.getItem("token") == null) {
        return <Navigate to="/login" replace />
    }
    return children;
}
export default ProtectedRouter;