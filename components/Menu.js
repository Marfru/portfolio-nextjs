
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { bool, func } from 'prop-types';
import MenuItems from '../components/MenuItems';

function Menu({open, setOpen}) {
  return (
    <>
    {open ?
    <CloseIcon className="header__menu" open={open} onClick={() => setOpen(!open)}/> : 
    <MenuIcon className="header__menu" open={open} onClick={() => setOpen(!open)}/>}
    { open && 
    <MenuItems/>
    }
  </>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default Menu