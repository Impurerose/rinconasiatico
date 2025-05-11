import React from "react";
import { Link, useLocation } from "react-router-dom";
import backgroundImage from "../assets/img/ra-background.jpg";
import logoTransparent from "../assets/img/ra-logo-transparent.png";
import Navbar from "./Navbar";

function Layout({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navbar sticky */}
      <Navbar />
      
      <div
        className="relative min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: "rgba(245, 232, 199, 0.85)" }}
      >
        {isHomePage && (
          <header className="relative pt-10 pb-8 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <Link to="/">
                <img
                  src={logoTransparent}
                  alt="Rincón Asiático Logo"
                  className="mx-auto"
                  style={{ width: "100%", maxWidth: "520px" }}
                />
              </Link>
            </div>
          </header>
        )}
        <main className="w-full">{children}</main>
        <footer className="py-6 text-center accent-color">
          <p className="font-semibold">
            &copy; 2025 Rincón Asiático - Todos los derechos reservados
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
