import React from 'react'
import Classes from './navigation.module.css'
import Logo from '../../../assests/LogoPMA.png'
import User from '../../../assests/user.png'
import { IconContext } from 'react-icons'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
export default function Nav () {
  return (
    <div>
      <nav className={Classes.nav}>
        <div>
      <img src={Logo} alt="logo" className={Classes.logo} />
      </div>
      <ul className={Classes.navbar_menu}>
        <li>
          <img src={User} alt="user" className={Classes.icons} />
        </li>
        <li>
          <IconContext.Provider value={{ className: `${Classes.dots}` }}>
            <BiDotsHorizontalRounded />
          </IconContext.Provider>
        </li>
      </ul>
      </nav>
    </div>
  )
}
