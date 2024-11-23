import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

const About = () => {

    useEffect(() => {
        document.title = 'Best Coders | About'
    }, []);

  return (
    <div>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <nav>
        <NavLink to='team'>Team</NavLink>
        <NavLink to='aim'>Aim</NavLink>
        <NavLink to='company'>Company</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default About
