import { Link } from 'react-router-dom';

//CSS
import styles from '../../styles/_container.module.scss'


//React Hook
import { useState, useEffect } from 'react';
//React Router Imports
import {useParams, useNavigate} from 'react-router-dom';


//Firestore 
import { db } from '../../firebase/config';

//loader image
import loader from '../../assets/loading.svg';
import editIcon from '../../assets/edit.svg';

const FullPost = () => {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(false);
    const [isPending, setIsPending] = useState(false);


    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        setIsPending(true);
        const postsCollection = db.collection('posts');
        const documentReference = postsCollection.doc(id);
        const unsub = documentReference.onSnapshot(snapshot => {
            if(snapshot.exists){
                setIsPending(false);
                setPost(snapshot.data());
                setError(false);
                
            } else {
                setIsPending(false);
                setError("This Post does not exist in the database!")
            }
        })

        return () => {
            console.log("Cleanup");
            unsub();
        }
       
    }, [id])

    return (
        <div>

        <div className={styles.container}>
        
    
            <div>
                <div className={styles.box}>
           {error && <p className='error'>{error}</p>}
           {isPending && <div className='loader-image'>
                    <img 
                    src={loader} 
                    alt='Loading'
            
                    />
                    </div>}
           {post && (
               <>
                    <h2 className={styles.pageTitle}>{post.title}</h2>
                    <br/>
                    <p>Written by: {post.name} </p>
                    <br/>
                    <p>----</p>
                    <br/>
                    <p className={styles.method}>{post.text}</p>
               </>
           )}
           <img 
                        className={styles.editIcon}
                        src={editIcon}
                        alt='Edit Post'
                        onClick={() => navigate(`/edit/${id}`)}
                        
                 
                 />
             </div>
           </div>
        </div>
        <Link className={styles.link}
        to="/memorybook">Back</Link>
        </div>
    )
}

export {FullPost};