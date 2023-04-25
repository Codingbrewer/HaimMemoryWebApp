import { Link } from 'react-router-dom'
import styles from '../styles/styles.module.scss'
import MainPic from '../images/lifeLogo1.png'
import { motion } from  'framer-motion'
const NavLinks = (props) => {

const animateForm = {opacity: 0, y: -40}   
const animateTo = {opacity: 1, y: 0} 
    return (
<ul>
<motion.li
className={styles.logo}> <Link to='/'> 
<img src={MainPic} style={{width:'300px'}} alt=""/>
</Link> 
</motion.li>

<motion.li
initial={animateForm}
animate={animateTo}
transition={{delay: 0.10}}
onClick={() => props.isMobile && props.closeMobileNav()}>
<Link to="/">Story</Link> </motion.li>

<motion.li
initial={animateForm}
animate={animateTo}
transition={{delay: 0.20}}
onClick={() => props.isMobile && props.closeMobileNav()}>
<Link to="memorybook">Memory Book</Link> </motion.li>

<motion.li
initial={animateForm}
animate={animateTo}
transition={{delay: 0.40}}
onClick={() => props.isMobile && props.closeMobileNav()} >
<Link to="gallery">Photos</Link> </motion.li>



</ul>
)

}


export default NavLinks;