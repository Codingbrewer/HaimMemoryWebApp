import styles from '../../styles/_postList.module.scss'
import { Link } from 'react-router-dom'
import lifePic from '../../images/life.png'


export default function gallery() {
  return (

<div>
<div className={styles.photosBody} >

    <div className={styles.galleryList}>

 <div className={styles.card}>
<Link className={styles.link}
to="/childhood">

                    <h3>Childhood</h3>
                    <img src={lifePic} style={{width:'100px'}} alt=""/>
                    </Link>
                </div>

                <div className={styles.card}>
<Link className={styles.link}
to="/family">

                    <h3>Mature life</h3>
                    <img src={lifePic} style={{width:'100px'}} alt=""/>
                    </Link>
                </div>


                <div className={styles.card}>
<Link className={styles.link}
to="/menorah">

                    <h3>Menorahs</h3>
                    <img src={lifePic} style={{width:'100px'}} alt=""/>
                    </Link>
                </div>



                <div className={styles.card}>
<Link className={styles.link}
to="/landscape">

                    <h3>Photography</h3>
                    <img src={lifePic} style={{width:'100px'}} alt=""/>
                    </Link>
                </div>


    </div>


    </div>
    <div className={styles.clear}></div>
    </div>
  )
}
