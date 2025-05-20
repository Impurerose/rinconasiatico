import React from "react";
import { useShoppingCart } from "./ShoppingCartContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { cartItems, addToCart, decreaseQuantity, getCartTotal } = useShoppingCart();
  
  // Función para generar el mensaje de WhatsApp con el detalle del pedido
  const generateOrderMessage = () => {
    let message = "Quiero realizar un pedido:\n\n";
    
    // Agregar cada producto al mensaje
    cartItems.forEach(item => {
      message += `x${item.quantity} ${item.name}\n`;
    });
    
    // Agregar el total al final
    message += `\nTotal a pagar: $${new Intl.NumberFormat('es-CL').format(getCartTotal())}`;
    
    return encodeURIComponent(message);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl text-merienda text-primary font-semibold mb-8">Tu Pedido</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl text-primary mb-4">Tu carrito está vacío</p>
          <Link to="/" className="text-lg mt-4 px-10 text-merienda py-4 font-semibold mx-auto block rounded-3xl w-fit transition duration-700 hover:bg-[#a19150] bg-[#6c722f] text-white">
            Volver a la tienda
          </Link>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-[#f3e0bc] text-primary">
                <tr>
                  <th className="py-4 px-6 text-left text-lg">Foto</th>
                  <th className="py-4 px-6 text-left text-lg">Producto</th>
                  <th className="py-4 px-6 text-center text-lg">Cantidad</th>
                  <th className="py-4 px-6 text-center text-lg">Precio</th>
                  <th className="py-4 px-6 text-center text-lg">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3e0bc]">
                {cartItems.map((item) => (
                  <tr key={item.id} className="hover:bg-[#f9f3e3]">
                    <td className="py-4 px-6">
                      <div className="w-20 h-20 overflow-hidden rounded-full p-4 bg-white flex items-center justify-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <h3 className="text-lg font-medium text-primary">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </td>
                    <td className="py-4 px-6 text-center text-lg">{item.quantity}</td>
                    <td className="py-4 px-6 text-center text-lg">{item.price}</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button 
                          onClick={() => addToCart(item)}
                          className="text-white bg-[#6c722f] hover:bg-[#8a913b] p-2 rounded-full transition-colors duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                        <button 
                          onClick={() => decreaseQuantity(item.id)}
                          className="text-white bg-[#d2a356] hover:bg-[#e0b46d] p-2 rounded-full transition-colors duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center text-xl font-semibold text-primary">
              <span>Total:</span>
              <span>${new Intl.NumberFormat('es-CL').format(getCartTotal())}</span>
            </div>
            
            <div className="mt-6 flex justify-between">
              <Link to="/" className="text-lg px-8 py-3 border-2 border-[#6c722f] text-[#6c722f] font-medium rounded-3xl transition-colors duration-300 hover:bg-[#f3e0bc]">
                Seguir comprando
              </Link>
              <a 
                href={`https://api.whatsapp.com/send/?phone=543584244167&text=${generateOrderMessage()}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg px-8 py-3 bg-[#6c722f] text-white font-medium rounded-3xl transition-colors duration-300 hover:bg-[#8a913b] flex items-center"
              >
                <span>Finalizar compra</span>
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6 6.32A7.85 7.85 0 0 0 12.08 4c-4.38 0-7.94 3.56-7.93 7.94a7.92 7.92 0 0 0 1.06 3.95l-1.13 4.12 4.22-1.1a7.93 7.93 0 0 0 3.79.96h.04c4.38 0 7.94-3.55 7.93-7.93a7.86 7.86 0 0 0-2.36-5.62zm-5.52 12.2h-.03a6.57 6.57 0 0 1-3.35-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.59 6.59 0 0 1-1.01-3.49c0-3.64 2.96-6.6 6.61-6.6a6.58 6.58 0 0 1 6.6 6.59c-.01 3.65-2.97 6.6-6.6 6.6zm3.61-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.06-.31-.1-.44.1-.13.2-.51.64-.62.77-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.52-.99-1.18-1.1-1.38-.12-.2-.01-.3.09-.4.08-.09.2-.23.3-.35.1-.12.13-.2.19-.33.06-.13.03-.24-.02-.33-.05-.1-.44-1.06-.6-1.44-.16-.38-.32-.32-.44-.32-.11 0-.24-.02-.37-.02-.13 0-.34.05-.51.24-.17.2-.66.64-.66 1.6s.67 1.85.77 1.98c.1.13 1.37 2.1 3.33 2.94.46.2.83.32 1.11.41.47.15.89.13 1.23.08.38-.06 1.17-.48 1.33-.94.17-.46.17-.86.12-.95-.05-.08-.18-.14-.38-.23z" />
                </svg>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
