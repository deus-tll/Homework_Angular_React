import { NavLink } from "react-router-dom";

export const MainNavigation = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/ratings">
                        Ratings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};