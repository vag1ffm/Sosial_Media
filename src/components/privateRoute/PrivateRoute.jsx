import React, {useState} from 'react';
import Sidebar from "../sidebar";
import {Outlet} from "react-router-dom";

const PrivateRoute = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <Sidebar sidebarOpen={sidebarOpen}/>
            <section className="home-section">
                <div className="home-content">
                    <i className='bx bx-menu' onClick={handleSidebarToggle}></i>
                    <span className="text"></span>
                </div>
                <Outlet/>
            </section>

        </>
    );
};

export default PrivateRoute;
