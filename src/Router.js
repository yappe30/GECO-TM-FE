import React from 'react';
import Employee from './modules/employee/containers/Employee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardNavbar from './modules/templates/DashboardNavbar';
import Dashboard from './modules/dashboard/containers/Dashboard';
import Event from './modules/event/containers/Event';
import Timesheet from './modules/timesheet/containers/Timesheet'
import Blog from './modules/blog/containers/Blog';
import About from './modules/about/containers/About'
import Faq from './modules/faq/containers/Faq';
import Login from './modules/login/containers/Login'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path="/login" element={<Login />} />
                    <Route element={<DashboardNavbar />}>
                        <Route path="/employee" element={<Employee />} />
                        <Route path="/" element={<Timesheet />} />
                        <Route path="/event" element={<Event />} />
                        <Route path="/timesheet" element={<Timesheet />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/faq" element={<Faq />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;