// Import Components
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompShowTable from "./Components/GetInventario.js";
import CompCreateTable from "./Components/CreateInventario.js";
import CompEditTable from "./Components/EditInventario.js";
import Navbar from "./Components/NavBar.jsx";
import Inicio from "./Components/Index.jsx";
import Login from "./Components/login.jsx";
import Footer from "./Components/footer.jsx";
import Admin from "./Components/admin-index.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/inventario" element={<CompShowTable />} />
          <Route path="/nuevo-producto" element={<CompCreateTable />} />
          <Route path="/editar-producto/:id" element={<CompEditTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
