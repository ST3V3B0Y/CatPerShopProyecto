// Import Components
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompShowTable from "./Components/GetUsuario.js";
import CompCreateTable from "./Components/CreateUsuario.js";
import CompEditTable from "./Components/EditUsuario.js";
import Navbar from "./Components/NavBar.jsx";
import Inicio from "./Components/Index.jsx";
import Login from "./Components/login.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/invetario" element={<CompShowTable />} />
          <Route path="/nuevo-producto" element={<CompCreateTable />} />
          <Route path="/editar-producto/:id" element={<CompEditTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
