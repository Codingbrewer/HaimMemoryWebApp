import styles from '../../styles/_gallerypics.module.scss'
import { Link } from 'react-router-dom'

// photos //
import landscape1 from '../../images/landscape1.jpg'
import landscape2 from '../../images/landscape2.jpg'
import landscape3 from '../../images/landscape3.jpg'
import landscape4 from '../../images/landscape4.jpg'
import landscape5 from '../../images/landscape5.jpg'
import landscape6 from '../../images/landscape6.jpg'
import landscape7 from '../../images/landscape7.jpg'
import landscape8 from '../../images/landscape8.jpg'





export default function Family() {
  return (
    <div className={styles.galleryBody} >
         <Link className={styles.link}
   to="/gallery">Back</Link>
    
    <div className={styles.postList}>


                    <div className={styles.card}>
                    <img alt="description of image"
                    src={landscape1}
                    className={styles.gallerySinglePic}/>
                      
                       </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={landscape2}
                       className={styles.gallerySinglePic}/>
                     
                   </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={landscape3} 
                       className={styles.gallerySinglePic}/>
                   
                   </div>

                   <div className={styles.card}>
                    <img alt="description of image"
                    src={landscape4}
                    className={styles.gallerySinglePic}/>
                   
                       </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={landscape5} 
                       className={styles.gallerySinglePic}/>
                      
                   </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={landscape6} 
                       className={styles.gallerySinglePic}/>
                       
                   </div>
                   
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={landscape7} 
                       className={styles.gallerySinglePic}/>
                     
                   </div>

                   <div className={styles.card}>
                       <img alt="description of image"
                       src={landscape8} 
                       className={styles.gallerySinglePic}/>
                        
                   </div>

                   
       </div>

       <Link className={styles.link}
   to="/gallery">Back</Link>
       </div>
  )
}
