import { collection, QuerySnapshot } from '@firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useEffect, useState } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Navlink
} from "react-router-dom";
import { AuthProvider } from './Auth';

import Login from './components/pages/loginPage/index'

//import posts from './components/Posts/index'
//import Button from './components/buttons'

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: "final-assignment-5abc7",
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};

firebase.initializeApp(firebaseConfig);

function App() {
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

/*
if (loading) {
  return <h1>Loading...</h1>
}
return(
  <div>
    <h1>Posts</h1>
    {
      posts.map((post) => (
        <div key = {post.user}>
          <h1>{post.user}</h1>
          <p>{post.text}</p>
        </div>
      ))}
  </div>);
*/

console.log(posts);

    return(
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/homepage">
            </Route>
            <Route exact path="/me">
            </Route>
            <Route exact path="/login">
            </Route>
          </Switch>
        </Router>
        </AuthProvider>
      );
    
};

 export default App;

/*

function App() {
  
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if(user) {
          setUser(user);
        }else {
          setUser(null);
        }
      });

      return unsubscribe;
    }, []);

  

  const signOut = async () => {
    try{
      await firebase.auth().signOut();
    }catch (error) {
      console.log(error.message);
    }
  };

  if (initalizing) return 'Loading...';

  /*

  return (
    <div>
      {user ? (
      <>
      <Button onClick={signOut}>Sign Out</Button>
      <p>Welcome to the chat</p>
      </>
      ) : (
        
      )}
        
    </div>
  );
}*/

/*
    try{
      await auth.signInWithPopup(provider);
    }catch (error){
      console.error(error);
    }

    const signInWithGoogle = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.useDeviceLanguage();
    };
*/
    