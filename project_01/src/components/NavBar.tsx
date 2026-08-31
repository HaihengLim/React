import { NavLink } from 'react-router-dom';
import { routes } from '../config/RoutesConfig.tsx';
import './style/navbar.css';

export default function NavBar() {
  return (
    <nav>
      {routes.map((route) => (
        <NavLink
          to={route.path}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <route.label />
        </NavLink>
      ))}
    </nav>
  );
}
