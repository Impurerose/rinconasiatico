import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './styles/output.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Soju from './components/Soju';
import Ramen from './components/Ramen';
import Candies from './components/Candies';
import Checkout from './components/Checkout';
import reportWebVitals from './reportWebVitals';
import { ShoppingCartProvider } from './components/ShoppingCartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/soju" element={<Soju />} />
            <Route path="/ramen" element={<Ramen />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/candies" element={<Candies />} />
            <Route path="/bebidas" element={<ComingSoon title="Bebidas" />} />
            <Route path="/snacks" element={<ComingSoon title="Snacks" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ShoppingCartProvider>
  </React.StrictMode>
);

// Componentes auxiliares para las páginas en desarrollo
function ComingSoon({ title }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="heading-primary text-5xl mb-8 text-center">{title}</h1>
        <p className="text-asian text-2xl text-primary">Próximamente</p>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="heading-primary text-5xl mb-8 text-center">404</h1>
        <p className="text-asian text-2xl text-primary mb-8">Página no encontrada</p>
        <a href="/" className="btn-primary">Volver al inicio</a>
      </div>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
