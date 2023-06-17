import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../context/bookContext";

export const NavBar = () => {

    const navigate = useNavigate();
    const {bookDispatch} = useContext(BookContext);


    const handleSearch = (value) => {
        navigate("/search");
        bookDispatch({ type: "HandleSearch", payload: value });
      };

  return (
      <nav className="navbar">
        <div className="searchbox">
          <form>
            <input
              className="input"
              type="text"
              placeholder="Search here"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
          </form>

        </div>
        <div className="icons">
          <Link to="/" className="nav-icons">
            HOME
          </Link>
        </div>  
      </nav>
  );
};
