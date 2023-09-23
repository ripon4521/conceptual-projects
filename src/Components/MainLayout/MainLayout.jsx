import { Outlet } from "react-router-dom";
import Navbr from "../Header/Navbar/Navbr";


const MainLayout = () => {
    return (
        <div className="max-w-[1300px]  mx-auto  " >
            
            <Navbr></Navbr>
            
           <div className="my-7 ">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;