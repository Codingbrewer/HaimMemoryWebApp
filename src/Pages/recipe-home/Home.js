//CSS
import './Home.css';

//Hooks
import { useEffect, useState } from 'react';

//Components
import {PostList} from '../../components/PostList';

//Import firestore reference
import { db } from '../../firebase/config';



//Loader

import loader from '../../assets/loading.svg';

const Home = () => {

    const [posts, setPosts] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);
    const[deletedPost, setDeletedPost] = useState(false);

    useEffect(() => {
        setIsPending(true);

        const postsCollection = db.collection('posts');
        const unsub = postsCollection.onSnapshot(snapshot => {
            if(snapshot.empty){
                setError('No Memories to Load. Please Add Some first!');
                setPosts(null);
                setIsPending(false);
            } else {
               if(snapshot.docChanges()[0]._delegate.type === 'removed') {
                 setDeletedPost(true);
                 setTimeout(() => {
                     setDeletedPost(false)
                 }, 3000)
               } else {
                   setDeletedPost(false);
               }
                let results = [];
                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()})
                })
                setPosts(results);
                setError(false);
                setIsPending(false);
            }
        }, error => {
            setError(error.message);
            setIsPending(false);
        })    

        return () =>{
            console.log("Cleanup time");
            unsub();
        }

    }, []);

    return (
        <div className='home'>
            {error && <p className="">{error}</p>}
            {isPending && <div className='loader-image'>
                    <img 
                    src={loader} 
                
                    />
                    </div>}
            {posts && <PostList posts={posts} isDeleted={deletedPost}/>}
        </div>
    )
}

export {Home}