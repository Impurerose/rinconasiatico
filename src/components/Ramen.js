// filepath: /home/impure/Desktop/ra/src/components/Ramen.js
import React from "react";
import backgroundImage from "../assets/img/ra-background.jpg";
import ramenImg from "../assets/img/ramen.png";
import { useShoppingCart } from "./ShoppingCartContext";
import { getRamenProducts } from "../store/productData";

function Ramen() {
  const { addToCart } = useShoppingCart();
  const products = getRamenProducts();

  const handleAddToCart = (product) => {
    // Asegurarnos de que la categoría está presente antes de añadir al carrito
    const productWithCategory = {
      ...product,
      category: product.category || "ramen", // Usar la categoría existente o asignar "ramen" por defecto
    };

    // Agregar el producto con la categoría garantizada
    addToCart(productWithCategory);

    // Para debugging: mostrar en consola el producto agregado
    console.log("Producto agregado al carrito:", productWithCategory);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="min-h-screen"
        style={{ backgroundColor: "rgba(245, 232, 199, 0.85)" }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center mb-12">
            <div className="flex flex-col md:flex-row _flex-col items-center justify-center pb-40">
              <img src={ramenImg} alt="Ramen" className="object-contain" />
              <h1 className="heading-primary text-5xl lg:text-[10rem] text-center">
                Ramen
              </h1>
            </div>
            {/* Grilla de productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Imagen sin padding/margin, ocupando todo el ancho */}
                  <div className="h-[320px] w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Contenido con padding */}
                  <div className="p-5">
                    <h3 className="text-2xl heading-secondary font-medium mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xl text-primary mb-1 font-semibold">
                      {product.price}
                    </p>
                    <button
                      className="mt-3 w-full text-white py-3 px-4 rounded-3xl text-lg font-semibold bg-[#6c722f] hover:bg-[#8a913b] transition-colors duration-300"
                      onClick={() => handleAddToCart(product)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ramen;
