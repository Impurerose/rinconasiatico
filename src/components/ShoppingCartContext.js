import React, { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto
const ShoppingCartContext = createContext();

// Hook personalizado para usar el contexto
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

// Función para obtener datos iniciales del sessionStorage
const getInitialCartItems = () => {
  // Si estamos en el navegador (no en SSR)
  if (typeof window !== 'undefined') {
    try {
      const storedCart = window.sessionStorage.getItem('shoppingCart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('Error al recuperar el carrito desde sessionStorage:', error);
      return [];
    }
  }
  return [];
};

// Proveedor del contexto
export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCartItems);

  // Actualizar sessionStorage cuando cambian los items del carrito
  useEffect(() => {
    try {
      window.sessionStorage.setItem('shoppingCart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error al guardar el carrito en sessionStorage:', error);
    }
  }, [cartItems]);

  // Agregar un item al carrito
  const addToCart = (product) => {
    // Verificar que el producto tenga la propiedad category
    if (!product.category) {
      console.warn("Producto sin categoría:", product);
    }
    
    setCartItems((prevItems) => {
      // Verificar si el producto ya está en el carrito
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex !== -1) {
        // Si el producto ya está en el carrito, incrementar la cantidad pero mantener todas sus propiedades
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...prevItems[existingItemIndex], // Mantener todas las propiedades existentes
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return updatedItems;
      } else {
        // Si el producto no está en el carrito, agregarlo con todas sus propiedades y cantidad 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Eliminar un item del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      return prevItems.filter(item => item.id !== productId);
    });
  };

  // Disminuir cantidad de un producto en el carrito
  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(item => item.id === productId);
      
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        if (updatedItems[existingItemIndex].quantity === 1) {
          // Si la cantidad es 1, eliminar el producto
          return updatedItems.filter(item => item.id !== productId);
        } else {
          // Si la cantidad es mayor que 1, disminuirla
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity - 1
          };
          return updatedItems;
        }
      }
      return prevItems;
    });
  };

  // Limpiar el carrito completamente
  const clearCart = () => {
    setCartItems([]);
  };

  // Obtener el número total de items en el carrito
  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  
  // Obtener el precio total del carrito
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      // Convertir el precio de formato string "$8.990" a número
      const priceNumber = parseFloat(item.price.replace('$', '').replace('.', ''));
      return total + (priceNumber * item.quantity);
    }, 0);
  };

  // Obtener el número de items de una categoría específica en el carrito
  const getCategoryItemCount = (category) => {
    return cartItems
      .filter(item => item.category === category)
      .reduce((total, item) => total + item.quantity, 0);
  };

  // El valor que expondrá el contexto
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart,
    getCartItemCount,
    getCartTotal,
    getCategoryItemCount
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};