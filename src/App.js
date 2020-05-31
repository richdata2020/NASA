import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NasaData from "./components/NasaData";

function App() {
  return (
    <div className="App">
     <Header />
     <NasaData />
     <Footer />
    </div>
  );
}

export default App;
