import { Routes, Route } from "react-router-dom";
import Landing from "@/pages/common/Landing";
import Login from "@/pages/common/Login";
import Otp from "@/pages/common/Otp";
import SelectRole from "@/pages/common/SelectRole";
import SignUp from "@/pages/common/SignUp";
import ProtectedRoute from "@/components/protectedRoute/SelectProtected";

const AuthRoutes = () => (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/select-role" element={<SelectRole />} />

        <Route element={<ProtectedRoute />}>
            <Route path="/signup" element={<SignUp />} />
        </Route>
    </Routes>
);

export default AuthRoutes;