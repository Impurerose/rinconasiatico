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

// Lista de todos los productos
export const allProducts = [
  {
    id: 1,
    name: "Soju Arándanos",
    image: arandanosImg,
    price: "$8.990",
    category: "soju",
  },
  {
    id: 2,
    name: "Soju Durazno",
    image: duraznoImg,
    price: "$8.990",
    category: "soju",
  },
  {
    id: 3,
    name: "Soju Mango",
    image: mangoImg,
    price: "$8.990",
    category: "soju",
  },
  {
    id: 4,
    name: "Soju Manzana",
    image: manzanaImg,
    price: "$8.990",
    category: "soju",
  },
  {
    id: 5,
    name: "Soju Original",
    image: originalImg,
    price: "$8.990",
    category: "soju",
  },
  {
    id: 6,
    name: "Soju Sandía",
    image: sandiaImg,
    price: "$8.990",
    category: "soju",
  },
  {
    id: 7,
    name: "Soju Uva Verde",
    image: uvaVerdeImg,
    price: "$8.990",
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
];

// Funciones de utilidad para filtrar productos
export const getProductsByCategory = (category) => {
  return allProducts.filter((product) => product.category === category);
};

export const getSojuProducts = () => getProductsByCategory("soju");
export const getRamenProducts = () => getProductsByCategory("ramen");
export const getProductCount = (category) =>
  getProductsByCategory(category).length;
export const getSojuProductCount = () => getSojuProducts().length;
export const getRamenProductCount = () => getRamenProducts().length;
