import { Route, Routes } from "react-router-dom";
import HomePage from "../../features/Home/Presentation";
import AppLayout from "../components/layout";
import ProtectedRouter from "./protectedRouter";
import LoginPage from "../../features/Auth/Presentation/login";
import RegisterPage from "../../features/Auth/Presentation/register";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="/protected"
                    element={
                        <ProtectedRouter>
                            <div>HomePage</div>
                        </ProtectedRouter>
                    }
                />
            </Route>
        </Routes>
    )
}