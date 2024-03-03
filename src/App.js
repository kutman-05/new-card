import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/header";
import Menu from "./pages/Menu/Menu";
import Home from "./pages/Home";
import Registartion from "./pages/Menu/Registartion";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} key={1} />
        <Route path="/Menu" element={<Menu />} key={2} />
        <Route path="/Registartion" element={<Registartion />} key={2} />
        <Route path="/Products" element={<Products/>} key={2} />
      </Routes>
    </div>
  );
}

export default App;
