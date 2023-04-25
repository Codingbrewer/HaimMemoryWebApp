import styles from '../../styles/_gallerypics.module.scss'
import { Link } from 'react-router-dom'

// photos //
import menorah1 from '../../images/menorah1.jpg'
import menorah2 from '../../images/menorah2.jpg'
import menorah3 from '../../images/menorah3.jpg'
import menorah4 from '../../images/menorah4.jpg'
import menorah5 from '../../images/menorah5.jpg'
import menorah6 from '../../images/menorah6.jpg'





export default function Family() {
  return (
    <div className={styles.galleryBody} >
         <Link className={styles.link}
   to="/gallery">Back</Link>
    
    <div className={styles.postList}>


                    <div className={styles.card}>
                    <img alt="description of image"
                    src={menorah1}
                    className={styles.gallerySinglePic}/>
                     
                       </div>

                   <div className={styles.card}>
                    <img alt="description of image"
                    src={menorah2}
                    className={styles.gallerySinglePic}/>
                    
                       </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={menorah3} 
                       className={styles.gallerySinglePic}/>
                       
                   </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={menorah4} 
                       className={styles.gallerySinglePic}/>
                       
                   </div>
                   
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={menorah5} 
                       className={styles.gallerySinglePic}/>
                
                   </div>

                   <div className={styles.card}>
                       <img alt="description of image"
                       src={menorah6} 
                       className={styles.gallerySinglePic}/>
                       
                   </div>

                   <div className={styles.card}>
                    <img alt="description of image"
                    src={menorah1}
                    className={styles.gallerySinglePic}/>
                     
                       </div>

                   <div className={styles.card}>
                    <img alt="description of image"
                    src={menorah2}
                    className={styles.gallerySinglePic}/>
                    
                       </div>


       </div>

       <Link className={styles.link}
   to="/gallery">Back</Link>
       </div>
  )
}
