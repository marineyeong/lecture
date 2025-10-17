import { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
        alt="Netflix log"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <img
        alt="Use logged"
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_image_avatar.asp&psig=AOvVaw0a664Z8prMXu2_wahHSNe1&ust=1760691894584000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOibr8muqJADFQAAAAAdAAAAABAE"
        className="nav__avatar"
      />
    </nav>
  );
};

export default Nav;
