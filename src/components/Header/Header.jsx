import logo from "../../assets/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img className="logo" src={logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
