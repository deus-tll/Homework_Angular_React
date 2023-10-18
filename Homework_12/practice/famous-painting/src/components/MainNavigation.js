import { NavLink } from "react-router-dom";

export const MainNavigation =  () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            About Artist
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/famous-painting">
            Famous Painting
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/painting-list">
            Painting List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}