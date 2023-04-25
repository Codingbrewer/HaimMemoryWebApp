import NavLinks from "./NavLinks"
import Classes from '../styles/styles.module.scss'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import LogoMobile from '../images/life.png'
import { useState } from "react"
import { Link } from "react-router-dom"


const MobileNavbar = () => {

const [open, setOpen] = useState(false);

const hamburgerIcon =  <AiOutlineMenu
className={Classes.Hamburger}
size='30px' 
onClick={() => setOpen(!open)}
/>

const closeIcon = <AiOutlineClose
className={Classes.Hamburger}
size='30px' 
onClick={() => setOpen(!open)}
/>

const closeMobileNav = () => setOpen(false)
    return (

        <nav className={Classes.MobileNavbar}>
 <div
className={Classes.logoMobile}>
    <Link to='/'> 
    <img src={LogoMobile} style={{width:'45%'}} alt="" />
    </Link>
</div>   
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks isMobile={true} closeMobileNav={closeMobileNav}/>}
        </nav>
    );
}

export default MobileNavbar