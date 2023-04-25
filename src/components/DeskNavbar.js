import NavLinks from "./NavLinks"
import Classes from '../styles/styles.module.scss'
const DeskNavbar = () => {
    return (
        <nav className={Classes.DeskNavbar}>
        <NavLinks/>
        </nav>
    )
}

export default DeskNavbar