import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
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
