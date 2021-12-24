import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './components/pages/loginPage/index';
import { Posts } from './components/pages/homepage';
import { ProfilePage } from './components/pages/profilePage';
import { Link } from 'react-router-dom';

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

console.log(posts);

    return(

        <Router>
          <Link to = "/homepage"><button>HomePage</button></Link>
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

