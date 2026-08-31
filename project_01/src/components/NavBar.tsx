import { NavLink } from 'react-router-dom';
import NavIcon from './NavIcon.tsx';
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
          {({ isActive }) => (
            <>
              <NavIcon icon={route.label} active={isActive} />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
