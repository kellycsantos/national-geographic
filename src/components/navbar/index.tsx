import Logo from '../../assets/logo_national_geographic.svg'
import { links } from '../../constants'
import style from './navbar.module.scss'
import { useState } from 'react'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    function toggleMenu(){
        setShowMenu(!showMenu)
    }
    return (
        <nav className={style.navbar}>
            <img src={Logo} alt="national geographic" />
            <ul className={showMenu ? style.visible : undefined }>
                {
                    links.map((link, index) =>
                        <li key={index} ><a href="#">{link.title}</a></li>
                    )
                }

            </ul>
            <button onClick={toggleMenu} className={`${style.menu} ${showMenu && style.menuOpen}`}></button>
        </nav>
    )
}