import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoTransparent from "../assets/img/ra-logo-transparent.png";
import { useShoppingCart } from "./ShoppingCartContext";

// Componente de ícono del carrito integrado
const ShoppingCartIcon = ({ size = 24, color = "#000" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 5H18.5L17.25 12H6M17.5 17H6.5L4.5 5H2M6 12L4.5 17M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5M11 19.5C11 18.6716 10.3284 18 9.5 18C8.67157 18 8 18.6716 8 19.5M11 19.5H15M15 19.5C15 20.3284 15.6716 21 16.5 21C17.3284 21 18 20.3284 18 19.5C18 18.6716 17.3284 18 16.5 18C15.6716 18 15 18.6716 15 19.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { getCartItemCount } = useShoppingCart();

  const handleCartClick = () => {
    navigate("/");
  };

  return (
    <nav className="xhidden sticky top-0 z-50 py-6 px-4 bg-[#f3e0bc] -bg-[#d3a457] xbg-[#dccd9c] bg-opacity-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-grow flex justify-start">
          <Link to="/" className="flex items-center">
            {/* Logo pequeño siempre visible */}
            <img
              src={logoTransparent}
              alt="Rincón Asiáticox"
              className="h-12 w-auto"
            />
            <span className="ml-2 text-2xl font-bold text-merienda text-[#81591e] hidden sm:inline">
              Rincón Asiático
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          {/* Enlaces de navegación */}
          <div className="hidden md:flex space-x-6 mr-6">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors duration-300 hover:text-amber-800 ${
                location.pathname === "/"
                  ? "text-amber-800 font-bold"
                  : "text-[#81591e]"
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/ramen"
              className={`text-lg font-medium transition-colors duration-300 hover:text-amber-800 ${
                location.pathname === "/ramen"
                  ? "text-amber-800 font-bold"
                  : "text-[#81591e]"
              }`}
            >
              Ramen
            </Link>
            <Link
              to="/soju"
              className={`text-lg font-medium transition-colors duration-300 hover:text-amber-800 ${
                location.pathname === "/soju"
                  ? "text-amber-800 font-bold"
                  : "text-[#81591e]"
              }`}
            >
              Soju
            </Link>
            <Link
              to="/candies"
              className={`text-lg font-medium transition-colors duration-300 hover:text-amber-800 ${
                location.pathname === "/candies"
                  ? "text-amber-800 font-bold"
                  : "text-[#81591e]"
              }`}
            >
              Golosinas
            </Link>
            <Link
              to="/candies"
              className={`text-lg font-medium transition-colors duration-300 hover:text-amber-800 ${
                location.pathname === "/bebidas"
                  ? "text-amber-800 font-bold"
                  : "text-[#81591e]"
              }`}
            >
              Bebidas
            </Link>
            <Link
              to="/candies"
              className={`text-lg font-medium transition-colors duration-300 hover:text-amber-800 ${
                location.pathname === "/snacks"
                  ? "text-amber-800 font-bold"
                  : "text-[#81591e]"
              }`}
            >
              Snacks
            </Link>
          </div>
          {/* Carrito incorporado en el navbar */}
          {getCartItemCount() > 0 && (
            <div
              className="relative p-2 rounded-full bg-[#719100] hover:bg-[#85a800] cursor-pointer transition-colors duration-300"
              onClick={handleCartClick}
            >
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center">
                <span className="text-xs font-semibold text-white">
                  {getCartItemCount()}
                </span>
              </div>
              <ShoppingCartIcon size={28} color="#bfec21" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
