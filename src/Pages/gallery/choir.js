import styles from '../../styles/_gallerypics.module.scss'
import { Link } from 'react-router-dom'

// photos //
import Child1 from '../../images/child1.jpg'
import Child2 from '../../images/child2.jpg'
import Child3 from '../../images/child3.jpg'
import Child4 from '../../images/child4.jpg'
import Child5 from '../../images/child5.jpg'



export default function Chior() {
  return (
    <div className={styles.galleryBody} >
         <Link className={styles.link}
   to="/gallery">Back</Link>
    
    <div className={styles.postList}>


                    <div className={styles.card}>
                    <img alt="description of image"
                    src={Child1}
                    className={styles.gallerySinglePic}/>
                       <h3>with mama 1936</h3>
                       </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={Child2}
                       className={styles.gallerySinglePic}/>
                       <h3>In the car 1937</h3>
                   </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={Child3} 
                       className={styles.gallerySinglePic}/>
                       <h3>Friend in the neigborhood</h3> 
                   </div>

                   <div className={styles.card}>
                    <img alt="description of image"
                    src={Child4}
                    className={styles.gallerySinglePic}/>
                    <h3>with Sam and Melany 1942</h3>
                       </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={Child5} 
                       className={styles.gallerySinglePic}/>
                       <h3>with mama 1936</h3>
                   </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={Child1} 
                       className={styles.gallerySinglePic}/>
                       <h3>In the car 1937</h3> 
                   </div>
                   
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={Child3} 
                       className={styles.gallerySinglePic}/>
                       <h3>Friend in the neigborhood</h3> 
                   </div>

                   <div className={styles.card}>
                    <img alt="description of image"
                    src={Child4}
                    className={styles.gallerySinglePic}/>
                    <h3>with Sam and Melany 1942</h3>
                       </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={Child5} 
                       className={styles.gallerySinglePic}/>
                       <h3>with mama 1936</h3>
                   </div>
   
                   <div className={styles.card}>
                       <img alt="description of image"
                       src={Child1} 
                       className={styles.gallerySinglePic}/>
                       <h3>In the car 1937</h3> 
                   </div>
                   

       </div>

       <Link className={styles.link}
   to="/gallery">Back</Link>
       </div>
  )
}
