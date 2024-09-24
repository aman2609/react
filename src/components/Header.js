
const Title = () => {
  return (
    // <h1>Tasty Trek</h1>
    <img src="https://scontent.fbom9-1.fna.fbcdn.net/v/t39.30808-6/295029800_551908023300340_1366754401973005177_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=k59pUsmQ6-MQ7kNvgET62m6&_nc_ht=scontent.fbom9-1.fna&_nc_gid=AbTvAXOhhhaja2-U1RocFox&oh=00_AYDgd2zzcagPxRzYFKZAEhBLN28p_Jfu2UesHnftufo-AQ&oe=66F8D4E6" alt="logo" className="logo" />
  );
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Title />
      </div>
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