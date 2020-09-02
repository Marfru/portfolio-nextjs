import Link from 'next/link'
import { useEffect, useState } from 'react'
import { fetchMenuContent } from '../contentful'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import { MenuAnimation } from './Animations'

function MenuItems({open, setOpen}) {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    async function getMenu() {
      const allMenus = await fetchMenuContent()
      setMenu([...allMenus])
      document.body.classList.add('scroll-block');
      
    }
    getMenu()
    return () => {
      document.body.classList.remove('scroll-block');
      
    }
    
  }, [])
  return (
    <MenuAnimation>
      <nav>
        <ul>
        {menu.length > 0
          ? menu.map(p => (
            <li key={p.sys.id}>
              <Link 
              as={p.fields.url} 
              href={p.fields.url}>
                <a onClick={() => setOpen(!open)}>
                  {p.fields.name}
                </a>
              </Link>
            </li>
            ))
          : null}
          <li><ul className="menu__socials">
            <li><a href="https://www.linkedin.com/in/marcos-frutos-3a023385/" target='_blank' rel='noreferrer noopener'><LinkedInIcon fontSize="large"/></a></li>
            <li><a href="https://github.com/Marfru" target='_blank' rel='noreferrer noopener'><GitHubIcon fontSize="large"/></a></li>
            <li><a href="mailto:hola@marfru.com" target='_blank' rel='noreferrer noopener'><EmailIcon fontSize="large"/></a></li>
              </ul>
          </li>
        </ul>
      </nav>
    </MenuAnimation>
  )
}

export default MenuItems