import React from "react";
import "./styles/output.css";
import Logo from "./components/Logo";
import backgroundImage from "./assets/img/ra-background.jpg";
import logoTransparent from "./assets/img/ra-logo-transparent.png";
import candyImg from "./assets/img/candy.png";
import ramenImg from "./assets/img/ramen.png";
import sodaImg from "./assets/img/soda.png";
import snackImg from "./assets/img/snack.png";
import sojuImg from "./assets/img/soju.png";

function App() {
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
        <header className="mt-20 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <img
              src={logoTransparent}
              alt="Rincón Asiático Logo"
              className="mb-4 mt-24 mx-auto"
              style={{ maxWidth: "420px" }}
            />
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden p-6 sm:p-10">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-8 w-full mb-10">
                  <div className="flex flex-col items-center">
                    <div>
                      <img
                        src={ramenImg}
                        alt="Ramen"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-asian text-4xl text-primary font-medium">
                      Ramen
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div>
                      <img
                        src={sojuImg}
                        alt="Soju"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-asian text-4xl text-primary font-medium">
                      Soju
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div>
                      <img
                        src={candyImg}
                        alt="Golosinas"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-asian text-4xl text-primary font-medium">
                      Candies
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div>
                      <img
                        src={sodaImg}
                        alt="Bebidas"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-asian text-4xl text-primary font-medium">
                      Bebidas
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div>
                      <img
                        src={snackImg}
                        alt="Snacks"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-asian text-4xl text-primary font-medium">
                      Snacks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="py-6 text-center accent-color">
          <p className="font-semibold">
            &copy; 2025 Rincón Asiático - Todos los derechos reservados
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
