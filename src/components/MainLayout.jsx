import { Outlet, Navigate } from "react-router-dom";
import Navbar from './Navbar.jsx';
import { useAuth } from '../context/AuthContext';

const MainLayout = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
