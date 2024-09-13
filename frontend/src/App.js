import logocps from "./logocps.jpg";
import "./App.css";

// Importamos componentes
import CompShowBlogs from "./Components/ShowBlogs";
import CompCreateBlog from "./Components/CreateBlog";
import CompEditBlog from "./Components/EditBlog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-Navigator">
          <section>
            <a href="/">
              <img src={logocps} className="App-logo" alt="logo" />
            </a>
          </section>
          <section className="Sect-Navigator">
            <input
              placeholder="Búsqueda"
              type="text"
              className="Barra-busqueda"
            />
          </section>
          <section className="Sect-Navigator"></section>
          <section className="Sect-Navigator"></section>
        </nav>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowBlogs />} />
          <Route path="/create" element={<CompCreateBlog />} />
          <Route path="/edit/:id" element={<CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
