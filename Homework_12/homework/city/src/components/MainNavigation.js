import { NavLink } from "react-router-dom";

export const MainNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            About City
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/famous-landmark">
            Famous Landmark
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/landmark-list">
            Landmark List
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/city-photo">
            City Photo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
