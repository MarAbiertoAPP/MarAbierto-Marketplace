import React, { useState } from 'react'
import Classes from './navigation.module.css'
import Logo from '../../../assests/LogoPMA.png'
import User from '../../../assests/user.png'
import { IconContext } from 'react-icons'
import PropTypes from 'prop-types'
import { BiDotsHorizontalRounded, BiRocket } from 'react-icons/bi'
export default function Nav () {
  const [open, setOpen] = useState(false)
  const showDropdown = () => {
    setOpen(!open)
  }
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
        <li onClick={() => showDropdown()}>
          <IconContext.Provider value={{ className: `${Classes.dots}` }}>
            <BiDotsHorizontalRounded />
          </IconContext.Provider>
        </li>
        {
          open
            ? <li>
                <Dropdown />
          </li>
            : null}
      </ul>
      </nav>
    </div>
  )
}
function Dropdown () {
  function DropdownItem (props) {
    Dropdown.propTypes = {
      exploreIcon: PropTypes.function
    }

    return (
      <a href="#" className={Classes.menu_item}>
        <span className={Classes.icon_button}>
          <IconContext.Provider value={{ className: `${Classes.icon_button}` }}>
            {props.exploreIcon}
          </IconContext.Provider>
        </span>
        <span className={Classes.dropdownText}>Explore</span>
      </a>
    )
  }

  return (
    <div className={`${Classes.dropdown} ${open ? Classes.fadeIn : Classes.fadeOut}`}>
      <DropdownItem
        exploreIcon={<BiRocket />}
      />
      </div>
  )
}
