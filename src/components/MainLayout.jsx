import { Outlet } from "react-router-dom";
import Navbar from './Navbar.jsx';

const MainLayout=()=>{
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default MainLayout;