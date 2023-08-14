import React from "react";

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Shelf from "./components/Shelf";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import MinicartProvider from "./context/minicartContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <MinicartProvider>
        <Shelf shelfTitle="Mais Vendidos" />
      </MinicartProvider>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
