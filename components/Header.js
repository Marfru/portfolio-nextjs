import Logo from '../images/logo2.svg';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="Logo" />
      <MenuIcon className="header__menu"/>
    </div>
  )
}

export default Header