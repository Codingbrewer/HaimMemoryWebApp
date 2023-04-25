import styles from '../../styles/_gallerypics.module.scss'
import { Link } from 'react-router-dom'

// photos //
import Child1 from '../../images/child1.jpg'
import Child2 from '../../images/child2.jpg'
import Child3 from '../../images/child3.jpg'
import Child4 from '../../images/child4.jpg'
import Child5 from '../../images/child5.jpg'
import Child6 from '../../images/child6.jpg'
import Child7 from '../../images/child7.jpg'



export default function Childhood() {
  return (
    <div className={styles.galleryBody} >
         <Link className={styles.link}
   to="/gallery">Back</Link>
    
    <div className={styles.postList}>


                    <div className={styles.card}>
                    <img alt=""
                    src={Child1}
                    className={styles.gallerySinglePic}/>
                       <h3>1947</h3>
                       </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={Child2}
                       className={styles.gallerySinglePic}/>
                       <h3>1948</h3>
                   </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={Child3} 
                       className={styles.gallerySinglePic}/>
                       <h3>1950</h3> 
                   </div>

                   <div className={styles.card}>
                    <img alt="description of image"
                    src={Child4}
                    className={styles.gallerySinglePic}/>
                    <h3>1948</h3>
                       </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={Child5} 
                       className={styles.gallerySinglePic}/>
                       <h3>1952</h3>
                   </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={Child6} 
                       className={styles.gallerySinglePic}/>
                       <h3>1948</h3> 
                   </div>
                   
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={Child7} 
                       className={styles.gallerySinglePic}/>
                       <h3>1949</h3> 
                   </div>


       </div>

       <Link className={styles.link}
   to="/gallery">Back</Link>
       </div>
  )
}
