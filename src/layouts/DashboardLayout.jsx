import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
    return (
        <>
            <div className="main-container flex min-h-screen w-full ">
                <div className="sidebar-container border w-[20%]">
                    <Sidebar />
                </div>
                <div className="nav-main-container w-[80%]">
                    <Navbar />

                    <div className="main-container px-4 py-2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardLayout;