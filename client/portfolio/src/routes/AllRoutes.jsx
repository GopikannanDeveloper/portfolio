import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/DashboardLayout";
import Navbar from "../Layout/Navbar";
import About from "../Pages/About";
import TechStack from "../Pages/TechStack/TechStack";
import Projects from "../Pages/Projects/Projects";
import Footer from "../Pages/Footer/Footer";
const AllRoutes = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="p-3 d-lg-block d-none mb-4">
        <Navbar />
      </div>
      <div
        className="row main-container"
        style={{ overflowY: "auto", overflowX: "hidden" }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/myTech" element={<TechStack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </div>
      <div className=" card d-block d-lg-none fixed-bottom p-4 position-fixed">
        <Navbar />
      </div>
      <div className="d-lg-block d-none">
        <div
          className="col-11 fixed-bottom p-2 position-fixed"
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AllRoutes;
