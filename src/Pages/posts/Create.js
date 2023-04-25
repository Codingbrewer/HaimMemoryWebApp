//CSS
import styles from '../../styles/_createform.module.scss';
import buttons from '../../styles/_buttons.module.scss';

//React Imports
import {useState, useRef, useEffect, useCallback} from 'react';

//React Router Imports
import {useNavigate, useLocation, useParams} from 'react-router-dom';


//Firestore
import { db } from '../../firebase/config';

//Loader
import loader from '../../assets/loading.svg';


const Create = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [name, setName] = useState(""); 
  
    const [isSubmitted, setIsSubmitted] = useState(false);

    const bottomRef = useRef(null);    
    const form = useRef();

    //Query Parameters
    const navigate = useNavigate();
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const action = queryParams.get('action');

    //Route parameteres
    const params = useParams();
    const id = params.id;

 
    useEffect(() => {
        if(!action){
            const docRef = db.collection('posts').doc(id);
            docRef.get().then(document => {
                const data = document.data();
                setTitle(data.title);
                setText(data.text);
                setName(Number(data.name.split(" ")[0]));
               
            }) 

        } else {
                setTitle("");
                setText("");
                setName("");
                
        }
    },[action, id])

    const handleSubmit = async (e) => {
       e.preventDefault();
       setIsSubmitted(true);
       const PostToAddOrUpdate = {
            title,
            text,
            name: name 
       }
       
       {
       if(action === 'create') {
        try {
            await db.collection('posts').add(PostToAddOrUpdate);
            setIsSubmitted(false);
            navigate({
                pathname: '/memorybook',
                state: {addedPost: PostToAddOrUpdate}
            });
       } catch(error){
            console.log(error);
       }
       } else {
           try {
            await db.collection('posts').doc(id).update(PostToAddOrUpdate);
            setIsSubmitted(false);
            navigate({
                pathname: '/',
                state: {updatedPost: PostToAddOrUpdate}
            });
           }catch(error){
               console.log(error);
           }
       }
   
   
   

 }
      
    }

    const scroll = useCallback(node => {
        if (node !== null) {
          window.scrollTo({
            top: node.getBoundingClientRect().top,
            behavior: "smooth"
          })
        }
      }, []);

 
    return (
        <div className={styles.formContainer}>
           <h2 className={styles.title}>{action === 'create' ? 'Write your memory' : 'Update your post!'}</h2>
           <div className={styles.card}>
           <div className={styles.box}>
           <form onSubmit={handleSubmit} ref={form}>



           <label>
                   <span>{action === 'create' ? 'Your name: ' : 'New Name'  }</span>
                   <input 
                    autoFocus
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    disabled={action !== 'create' && !name}
                   />
               </label>


               <label>
                   <span>{action === 'create' ? 'Title:' : 'New title:'  }</span>
                   <input 
                   
                   type="text"
                   onChange={(e) => setTitle(e.target.value)}
                   value={title}
                   required
                   disabled={action !== 'create' && !title}
                   />
               </label>

               <label>
                   <span>{action === 'create' ? 'Text:' : 'New content:'  }</span>
                   <textarea 
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    required
                    disabled={action !== 'create' && !text}
                   />
               </label>

                {isSubmitted  && <div className='loader-image'>
                    <img 
                    src={loader} 
                    alt='Loading'
                    
                    />
                    </div>}
              {(!isSubmitted ) && <button ref={scroll} className={buttons.btnDark}>
                  {action === 'create' ? 'Post' : 'Update post'}
              </button>} 
           </form>
           </div>
           </div>
        </div>
    )
}

export {Create}