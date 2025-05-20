import arandanosImg from "./products/soju/good-day/arandanos.webp";
import duraznoImg from "./products/soju/good-day/durazno.webp";
import mangoImg from "./products/soju/good-day/mango.webp";
import manzanaImg from "./products/soju/good-day/manzana.webp";
import originalImg from "./products/soju/good-day/original.webp";
import sandiaImg from "./products/soju/good-day/sandia.webp";
import uvaVerdeImg from "./products/soju/good-day/uva-verde.webp";

// Importar imágenes de Ramen
import carneAsadaImg from "./products/ramen/kang/carne-asada.webp";
import mariscosImg from "./products/ramen/kang/mariscos.webp";
import cerdoCebollaImg from "./products/ramen/kang/cerdo-y-cebolla.webp";
import polloEstofadoImg from "./products/ramen/kang/pollo-estofado.webp";
import carnePicanteImg from "./products/ramen/kang/carne-picante.webp";
import carneRepolloImg from "./products/ramen/kang/carne-repollo-escabeche.webp";

// Importar imágenes de Candies/Golosinas
import cookiesImg from "./products/candies/cookies.webp";
import gomitasFrutillaImg from "./products/candies/gomitas-sabor-frutilla-20g.webp";
import chicleLotteArandanoImg from "./products/candies/chicle-lotte-sabor-arandano.webp";
import chicleLotteFrutillaImg from "./products/candies/chicle-lotte-sabor-frutilla.webp";
import palitosPikachuImg from "./products/candies/palitos-con-chocolate-pikachu.webp";
import gomitasMixFrutasImg from "./products/candies/gomitas-sabor-mix-frutas.jpg";
import peperoAlmendraImg from "./products/candies/pepero-almendra.webp";
import snackQuesoImg from "./products/candies/snack-sabor-queso.webp";
import carameloBosqueSkittlesImg from "./products/candies/caramelos-masticables-sabor-frutos-del-bosque-skittles.webp";
import malvabiscosHeladoImg from "./products/candies/malvabiscos-forma-de-helado-jalea-de-frutilla.webp";
import cheetosPavoImg from "./products/candies/cheetos-snack-sabor-a-pavo.webp";
import gomitasDuraznoImg from "./products/candies/gomitas-rellenas-con-jugo-de-fruta-sabor-durazno.webp";
import caramelMixFrutasImg from "./products/candies/caramelos-masticables-sabor-mix-de-frutas.webp";
import pastillasMixFrutasSkittlesImg from "./products/candies/caramelos-pastillas-mix-de-frutas-skittles.webp";

// Lista de todos los productos
export const allProducts = [
  {
    id: 1,
    name: "Soju Arándanos",
    image: arandanosImg,
    price: "$12.000",
    category: "soju",
  },
  {
    id: 2,
    name: "Soju Durazno",
    image: duraznoImg,
    price: "$12.000",
    category: "soju",
  },
  {
    id: 3,
    name: "Soju Mango",
    image: mangoImg,
    price: "$12.000",
    category: "soju",
  },
  {
    id: 4,
    name: "Soju Manzana",
    image: manzanaImg,
    price: "$12.000",
    category: "soju",
  },
  {
    id: 5,
    name: "Soju Original",
    image: originalImg,
    price: "$12.000",
    category: "soju",
  },
  {
    id: 6,
    name: "Soju Sandía",
    image: sandiaImg,
    price: "$12.000",
    category: "soju",
  },
  {
    id: 7,
    name: "Soju Uva Verde",
    image: uvaVerdeImg,
    price: "$12.000",
    category: "soju",
  },
  // Productos de Ramen
  {
    id: 8,
    name: "Carne asada",
    image: carneAsadaImg,
    price: "$6.500",
    category: "ramen",
  },
  {
    id: 9,
    name: "Mariscos",
    image: mariscosImg,
    price: "$6.500",
    category: "ramen",
  },
  {
    id: 10,
    name: "Cerdo y Cebollita",
    image: cerdoCebollaImg,
    price: "$6.500",
    category: "ramen",
  },
  {
    id: 11,
    name: "Pollo asado y champiñones",
    image: polloEstofadoImg,
    price: "$6.500",
    category: "ramen",
  },
  {
    id: 12,
    name: "Carne picante",
    image: carnePicanteImg,
    price: "$6.500",
    category: "ramen",
  },
  {
    id: 13,
    name: "Carne y repollo en escabeche",
    image: carneRepolloImg,
    price: "$6.500",
    category: "ramen",
  },
  // Productos de Candies/Golosinas
  {
    id: 14,
    name: "Galleta De La Fortuna Sabor Vainilla",
    image: cookiesImg,
    price: "$500",
    category: "candies",
  },
  {
    id: 15,
    name: "Gomitas Sabor Frutilla 20 Grs",
    image: gomitasFrutillaImg,
    price: "$3445",
    category: "candies",
  },
  {
    id: 16,
    name: "Chicles - Lotte - Sabor Arandános",
    image: chicleLotteArandanoImg,
    price: "$4200",
    category: "candies",
  },
  {
    id: 17,
    name: "Chicles - Lotte - Sabor Frutilla",
    image: chicleLotteFrutillaImg,
    price: "$4200",
    category: "candies",
  },
  {
    id: 18,
    name: "Palitos Con Chocolate Pikachu 25 Gr",
    image: palitosPikachuImg,
    price: "$8540",
    category: "candies",
  },
  {
    id: 19,
    name: "Gomitas Sabor Mix De Frutas 20 Grs",
    image: gomitasMixFrutasImg,
    price: "$5225",
    category: "candies",
  },
  {
    id: 20,
    name: "Pepero Almendra Stick De Galleta Y Chocolate",
    image: peperoAlmendraImg,
    price: "$7899",
    category: "candies",
  },
  {
    id: 21,
    name: "Snack Sabor Queso 33 Grs",
    image: snackQuesoImg,
    price: "$4500",
    category: "candies",
  },
  {
    id: 22,
    name: "Caramelos Masticables Sabor Frutos Del Bosque Skittles",
    image: carameloBosqueSkittlesImg,
    price: "$5225",
    category: "candies",
  },
  {
    id: 23,
    name: "Malvadiscos C/forma De Helado Relleno Jalea De Frutilla",
    image: malvabiscosHeladoImg,
    price: "$650",
    category: "candies",
  },
  {
    id: 24,
    name: "Cheetos Snack Con Sabor A Pavo Americano 25 Gr",
    image: cheetosPavoImg,
    price: "$3225",
    category: "candies",
  },
  {
    id: 25,
    name: "Gomitas Rellenas Con Jugo De Fruta Sabor Durazno 60 Gr",
    image: gomitasDuraznoImg,
    price: "$5225",
    category: "candies",
  },
  {
    id: 26,
    name: "Caramelos Masticables Sabor Mix De Frutas - Skittles - 40 G",
    image: caramelMixFrutasImg,
    price: "$8540",
    category: "candies",
  },
  {
    id: 27,
    name: "Caramelos/pastillas Mix De Frutas- Skittles",
    image: pastillasMixFrutasSkittlesImg,
    price: "$5220",
    category: "candies",
  },
];

// Funciones de utilidad para filtrar productos
export const getProductsByCategory = (category) => {
  return allProducts.filter((product) => product.category === category);
};

export const getSojuProducts = () => getProductsByCategory("soju");
export const getRamenProducts = () => getProductsByCategory("ramen");
export const getCandiesProducts = () => getProductsByCategory("candies");
export const getProductCount = (category) =>
  getProductsByCategory(category).length;
export const getSojuProductCount = () => getSojuProducts().length;
export const getRamenProductCount = () => getRamenProducts().length;
export const getCandiesProductCount = () => getCandiesProducts().length;
