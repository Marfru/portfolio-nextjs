import React, { useState } from 'react';
import Link from 'next/link'
import Logo from '../images/logo.svg';
import Menu from './Menu';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <Link as="/" href="/">
        <a>
          <img className="header__logo" src={Logo} alt="Logo" />
        </a>
      </Link>
      <Menu open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Header