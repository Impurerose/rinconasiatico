import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({ size = 24, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 5H18.5L17.25 12H6M17.5 17H6.5L4.5 5H2M6 12L4.5 17M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5M11 19.5C11 18.6716 10.3284 18 9.5 18C8.67157 18 8 18.6716 8 19.5M11 19.5H15M15 19.5C15 20.3284 15.6716 21 16.5 21C17.3284 21 18 20.3284 18 19.5C18 18.6716 17.3284 18 16.5 18C15.6716 18 15 18.6716 15 19.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function CartIcon() {
  const { getCartItemCount } = useShoppingCart();
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/');
  };
  
  return (
    <div 
      className="px-4 pt-5 pb-4 rounded-full bg-[#719100] fixed top-4 right-4 z-50 cursor-pointer hover:bg-[#85a800] transition-colors duration-300"
      onClick={handleClick}
    >
      <div className="absolute left-4 text-center top-0 text-xl font-semibold text-asian text-white">
        <span className="px-5">{getCartItemCount()}</span>
      </div>
      <ShoppingCart
        size={42}
        color="#bfec21"
      />
    </div>
  );
}

export default CartIcon;