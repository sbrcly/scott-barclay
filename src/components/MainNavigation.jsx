import { NavLink } from "react-router-dom"

export default function MainNavigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/connect">Connect</NavLink>
                </li>
            </ul>
        </nav>
    )
};
