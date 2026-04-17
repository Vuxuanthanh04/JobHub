import { Route, Routes } from "react-router-dom";
import HomePage from "../../features/Home/Presentation";
import AppLayout from "../components/layout";
import ProtectedRouter from "./protectedRouter";
import LoginPage from "../../features/Auth/Presentation/login";
import RegisterPage from "../../features/Auth/Presentation/register";
import NewManagement from "../../features/NewManagement/Presentation";
import CompanyProfile from "../../features/CompanyProfile/Presentation";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/" element={<AppLayout />}>
                <Route path="/NewManagement" element={<NewManagement/> } />
                <Route path="/CompanyProfile" element={<CompanyProfile/> } />
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