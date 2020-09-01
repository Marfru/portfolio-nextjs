import Link from 'next/link'
import { useEffect, useState } from 'react'
import { fetchMenuContent } from '../contentful'

function MenuItems({open, setOpen}) {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    async function getMenu() {
      const allMenus = await fetchMenuContent()
      setMenu([...allMenus])
    }
    getMenu()
  }, [])
  return (
    <div className="menu">
    <nav>
      <ul>
      {menu.length > 0
        ? menu.map(p => (
          <li>
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
      </ul>
    </nav>
  </div>
  )
}

export default MenuItems