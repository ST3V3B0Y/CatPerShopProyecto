import logocps from "./logocps.jpg";
import "./App.css";

// Importamos componentes
import CompShowBlogs from "./blog/ShowBlogs";
import CompCreateBlog from "./blog/CreateBlog";
import CompEditBlog from "./blog/EditBlog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <navigator className="App-Navigator ">
          <a href="/">
            <img src={logocps} className="App-logo" alt="logo" />
          </a>
          <section className="Sect-Navigator">
            <input
              placeholder="Búsqueda"
              type="text"
              className="Barra-busqueda"
            />
          </section>
          <section className="Sect-Navigator"></section>
          <section className="Sect-Navigator"></section>
        </navigator>
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
