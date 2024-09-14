import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";

const CompEditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navegate = useNavigate();
  const { id } = useParams();

  // Procedimiento para actualizar

  const update = async (e) => {
    await e.preventDefault();
    axios.put(URI + id, { title: title, content: content });
    navegate("/");
  };

  useEffect(() => {
    getBlogById();
  });

  const getBlogById = async (e) => {
    const res = await axios.get(URI + id);
    setTitle(res.title);
    setContent(res.content);
  };

  return (
    <div>
      <h3> Editar POST </h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label /*className="form-label"*/>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            /*className="form-control"*/
          />
        </div>
        <div className="mb-3">
          <label /*className="form-label"*/>Content</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            /*className="form-control"*/
          />
        </div>
        {/* <button type="button" className="btn btn-primary boton">
          <a href="/" className="button-turnback">
            <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
          </a> 
        </button>*/}
        <button type="submit" /*className="btn btn-primary"*/>
          actualizar
        </button>
      </form>
    </div>
  );
};
export default CompEditBlog;
