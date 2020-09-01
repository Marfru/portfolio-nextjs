import React, { useState } from 'react';
import Logo from '../images/logo2.svg';
import Menu from './Menu';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="Logo" />
      <Menu open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Header