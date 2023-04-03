import React from 'react';
import Employee from './modules/employee/containers/Employee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardNavbar from './modules/templates/DashboardNavbar';
import Event from './modules/event/containers/Event';
import Timesheet from './modules/timesheet/containers/Timesheet'
import Blog from './modules/blog/containers/Blog';
import About from './modules/about/containers/About'
import Faq from './modules/faq/containers/Faq';
import Login from './modules/login/containers/Login'
import PrivateRoutes from './modules/utils/Auth';
import { AuthProvider } from './modules/utils/Auth';
import { RequiredAuth } from './modules/utils/RequiredAuth';

const Router = () => {
    return (

        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route element={<DashboardNavbar />}>
                        <Route path="/employee" element={<Employee />} />
                        <Route path="/event" element={<Event />} />
                        <Route path="/timesheet" element={<RequiredAuth><Timesheet /></RequiredAuth>} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/faq" element={<Faq />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>

    );
};

export default Router;