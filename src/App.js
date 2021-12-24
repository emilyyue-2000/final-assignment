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

import { AuthContext } from './Auth';
//import { AuthProvider } from './Auth';
import Login from './components/pages/loginPage/index';
import { Posts } from './components/pages/homepage';
//import Button from './components/buttons'
import { ProfilePage } from './components/pages/profilePage';

const firebaseConfig = {
  apiKey: "AIzaSyCGyCh42-XpeJY4OG5sH9HgzsJ9JdUE9dM",
  authDomain: "final-assignment-5abc7.firebaseapp.com",
  projectId: "final-assignment-5abc7",
  storageBucket: "final-assignment-5abc7.appspot.com",
  messagingSenderId: "296396049185",
  appId: "1:296396049185:web:54f3e99f4c09fc08334c60"
};

firebase.initializeApp(firebaseConfig);



function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("posts");

/*
const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=> {
        firebaseConfig.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return(
        <AuthContext.AuthProvider
        value={{
            currentUser
        }}

        debugger

        >
            {children}
        </AuthContext.AuthProvider>
    ); 
}; */


/*
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

*/
console.log(posts);

    return(

        <Router>
          <Switch>
            <Route exact path="/homepage" component={Posts}>
            </Route>
            <Route exact path="/me" component={ProfilePage}>
            </Route>
            <Route exact path="/login" component={Login}>
              <Login/>
            </Route>
          </Switch>
        </Router>

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
    