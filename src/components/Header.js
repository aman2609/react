const Title = () => {
  return (
    <h1>Tasty Trek</h1>
    // <img src={logo} alt="logo" className="logo" />
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;