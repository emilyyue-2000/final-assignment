import { getDefaultNormalizer } from '@testing-library/react';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firebaseAuth } from '../../../firebase';

const auth = getAuth()
console.log (auth.currentUser);

export const ProfilePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("posts");
  const [newPost, setNewPost] = useState(""); 

  const auth = getAuth();

  function getPosts() {
    setLoading(true);
    ref.where('user', '==', auth.currentUser.email ).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
          
            items.push(doc.data());
          
      });
      setPosts(items);
      setLoading(false);
    });
  }

  const handleOnChange = e => {
      setNewPost(e.target.value);
  }

  const handleOnSubmit = e =>{
      e.preventDefault();
    
      if(ref) {
        ref.add({
            text: newPost,
            user: auth.currentUser.email,
        })   
       }
    }

  useEffect (() => {
    getPosts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }
  return(
    <div>
      <Link to = "/login"><button>Login/Sign out</button></Link>
      <Link to = "/homepage"><button>HomePage</button></Link>
      <form>
          <input type="text"
          value={newPost}
          onChange={handleOnChange}
          placeholder='Type new post'>
          </input>
          <button onClick={handleOnSubmit}>Submit Post</button>
      </form>
      <h1>My Posts</h1>
      {
        posts.map((post) => (
          <div key = {post.user}>
            <h1>{post.user}</h1>
            <p>{post.text}</p>
          </div>
        ))}
    </div>);

  console.log(posts);
}
