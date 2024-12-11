import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar() {
  const links = [
    { to: "/use-state", label: "useState" },
    { to: "/use-effect", label: "useEffect" },
    { to: "/use-context", label: "useContext" },
    { to: "/use-reducer", label: "useReducer" },
    { to: "/use-memo", label: "useMemo" },
    { to: "/use-callback", label: "useCallback" },
    { to: "/use-ref", label: "useRef" },
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">React Hooks</h2>
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {links.map((link) => (
            <li key={link.to} className="sidebar__item">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  "sidebar__link" + (isActive ? " sidebar__link--active" : "")
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
