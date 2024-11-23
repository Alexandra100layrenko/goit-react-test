import s from './Header.module.css'
import clsx from 'clsx';
import { NavLink } from 'react-router-dom'

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
        <h3></h3>
        <nav className={s.nav}>
            <NavLink to='/' className={buildLinkClass}>Home</NavLink>
            <NavLink to='/about' className={buildLinkClass}>About</NavLink>
            <NavLink to='/users' className={buildLinkClass}>Users</NavLink>
        </nav>
    </header>
  )
}

export default Header
