import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import firebaseConfig from '../../firebase';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("posts");

  function getPosts() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setPosts(items);
      setLoading(false);
    });
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
      <Link to = "/me"><button>Profile Page</button></Link>
      <h1>Home Page</h1>
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
