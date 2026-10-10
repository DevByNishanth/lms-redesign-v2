import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
    return (
        <>
            <div className="main-container min-h-screen w-full ">
                <div className="nav-main-container w-[100%]">
                    <Navbar />
                    <div className="main-container w-[97%] mt-3 m-auto ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardLayout;