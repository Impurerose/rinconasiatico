import React from "react";
import { Link } from "react-router-dom";
import candyImg from "../assets/img/candy.png";
import ramenImg from "../assets/img/ramen.png";
import sodaImg from "../assets/img/soda.png";
import snackImg from "../assets/img/snack.png";
import sojuImg from "../assets/img/soju.png";
import { useShoppingCart } from "./ShoppingCartContext";

function Home() {
  const { getCategoryItemCount } = useShoppingCart();
  const sojuItemsInCart = getCategoryItemCount("soju");
  const candiesItemsInCart = getCategoryItemCount("candies");
  const drinksItemsInCart = getCategoryItemCount("drinks");
  const snacksItemsInCart = getCategoryItemCount("snacks");
  const ramenItemsInCart = getCategoryItemCount("ramen");

  return (
    <div>
      <div
        id="sticky-navbar"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="px-10">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full mb-10 md:mb-0">
              <Link to="/ramen" className="flex flex-col items-center">
                <div className="hover:scale-110 transition-transform duration-1000 flex flex-col items-center relative">
                  {ramenItemsInCart > 0 && (
                    <div className="text-3xl text-asian py-2 px-4 font-semibold rounded-full absolute md:right-14 lg:top-6 lg:right-12 top-8 right-8 bg-[#d2a356] border-4 border-[rgb(86,63,19)] text-[#81591e]">
                      {ramenItemsInCart}
                    </div>
                  )}{" "}
                  <div>
                    <img
                      src={ramenImg}
                      alt="Ramen"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-merienda text-3xl text-primary font-semibold">
                    Ramen
                  </span>
                </div>
              </Link>

              <Link to="/soju" className="flex flex-col items-center">
                <div className="hover:scale-110 transition-transform duration-1000 flex flex-col items-center relative">
                  {sojuItemsInCart > 0 && (
                    <div className="text-3xl text-asian py-2 px-4 font-semibold rounded-full absolute top-5 right-4 bg-[#d2a356] border-4 border-[rgb(86,63,19)] text-[#81591e]">
                      {sojuItemsInCart > 0 ? sojuItemsInCart : 0}
                    </div>
                  )}
                  <div>
                    <img
                      src={sojuImg}
                      alt="Soju"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-merienda text-3xl text-primary font-semibold">
                    Soju
                  </span>
                </div>
              </Link>

              <Link to="/candies" className="flex flex-col items-center">
                <div className="hover:scale-110 transition-transform duration-1000 flex flex-col items-center relative">
                  {candiesItemsInCart > 0 && (
                    <div className="text-3xl text-asian py-2 px-4 font-semibold rounded-full absolute top-5 right-4 bg-[#d2a356] border-4 border-[rgb(86,63,19)] text-[#81591e]">
                      {candiesItemsInCart}
                    </div>
                  )}
                  <div>
                    <img
                      src={candyImg}
                      alt="Golosinas"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-merienda text-3xl text-center text-primary font-semibold">
                    Snacks y Golosinas
                  </span>
                </div>
              </Link>

              <Link to="/bebidas" className="flex flex-col items-center">
                <div className="hover:scale-110 transition-transform duration-1000 flex flex-col items-center relative">
                  {drinksItemsInCart > 0 && (
                    <div className="text-3xl text-asian py-2 px-4 font-semibold rounded-full absolute top-5 right-4 bg-[#d2a356] border-4 border-[rgb(86,63,19)] text-[#81591e]">
                      {drinksItemsInCart}
                    </div>
                  )}
                  <div>
                    <img
                      src={sodaImg}
                      alt="Bebidas"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-merienda text-3xl text-primary font-semibold">
                    Bebidas
                  </span>
                </div>
              </Link>

              <Link to="/combos" className="flex flex-col items-center">
                <div className="hover:scale-110 transition-transform duration-1000 flex flex-col items-center relative">
                  {/* {snacksItemsInCart > 0 && (
                    <div className="text-3xl text-asian py-2 px-4 font-semibold rounded-full absolute top-5 right-4 bg-[#d2a356] border-4 border-[rgb(86,63,19)] text-[#81591e]">
                      {snacksItemsInCart}
                    </div>
                  )} */}
                  <div>
                    <img
                      src={snackImg}
                      alt="Snacks"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-merienda text-3xl text-primary font-semibold">
                    Snacks
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to="/checkout">
        <div className="text-2xl px-10 text-merienda py-4 font-semibold mx-auto block rounded-3xl w-fit mt-20 transition duration-700 hover:bg-[#a19150] bg-[#719100] border-[rgb(86,63,19)] text-white">
          <button>Realizar pedido</button>
        </div>
      </Link>
    </div>
  );
}

export default Home;
