//CSS
import styles from '../styles/_postList.module.scss';

//React Router Imports
import { Link, useNavigate, useLocation } from 'react-router-dom';


import candle from '../images/candle.gif';


//Firebase
import {db} from '../firebase/config';
import { useState, useEffect } from 'react';



const PostList = ({posts}) => {


    const location = useLocation();
    const navigate = useNavigate();
    const [addedPost, setAddedPost] = useState(null);
    const [updatedPost, setUpdatedPost] = useState(null);

    useEffect(() => {
        if(location.state) {
            if(location.state.addedPost) {
                setAddedPost(location.state.addedPost);
            } else if (location.state.updatedPost){
                setUpdatedPost(location.state.updatedPost);
            }
            setTimeout(() => {
                location.state = null;
                setAddedPost(null)
                setUpdatedPost(null)
            }, [3000])
        }
    }, [location])

    if(posts.length === 0) {
        return <div className="">No Memories found...</div>
    }
    
    return (
        <>

        <div className={styles.addAlertContainer} style={{
            display: addedPost ? 'flex' : 'none'
        }}>
            <div className={styles.addedPost ? 'styles.addAlert.show' : 'styles.addAlert'}>
            {`Post ${addedPost ? 'from ' + addedPost.title : '' } Added!`}
        </div>
        </div>

        <div className={styles.updateAlertContainer} style={{
            display: updatedPost ? 'flex' : 'none'
        }}>
            <div className={styles.updatedPost ? 'styles.updateAlert.show' : 'styles.updateAlert'}>
            {`Memory Updated!`}
        </div>
        </div>

        <Link  className={styles.createButton} to="/create?action=create">Write a memory</Link>

        <div className={styles.postList}>
            {posts.map(post => {
                return <div key={post.id} className={styles.card}>
                    <h3>{post.title}</h3>
                    <p>from <h3 className={styles.fromName}>{post.name}</h3></p>
                    <div>{post.text.substring(0,100)}...</div>
                    <Link
                    className={styles.link} 
                    to={`/fullpost/${post.id}`}
                    >Read Post</Link>
        
                    <img 
                        className={styles.candle}
                        src={candle}
                        alt='candle'
                    />


                 
                </div>
            })}


        </div>
        <div className={styles.clear}></div>
        </>
    )
}

export {PostList}