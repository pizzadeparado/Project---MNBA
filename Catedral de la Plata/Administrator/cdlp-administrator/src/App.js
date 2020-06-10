import React from 'react';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/auth';
import './styles/main.css';
import './pages/dashboard';


// Configuring Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyAjgfHpUV0PK9vaNg2TKZEif5zaOYUl_0U",
  authDomain: "globant-catedraladmin.firebaseapp.com",
  databaseURL: "https://globant-catedraladmin.firebaseio.com",
  projectId: "globant-catedraladmin",
  storageBucket: "globant-catedraladmin.appspot.com",
  messagingSenderId: "486174749370",
  appId: "1:486174749370:web:4560f0cb1d5eed46334883",
  measurementId: "G-P64S8YGTR7"
};
firebase.initializeApp(firebaseConfig);


// Configuring Firebase UI

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: './dashboard',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <h1 className="title">Administrador Catedral</h1>

          <p className="description">Para comenzar, iniciá sesión con tu cuenta de Google.</p>

          <div className="card">
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            ></StyledFirebaseAuth>
          </div>
        </main>

        <footer>Powered by Globant</footer>
      </div>
    </div>
  );
}
