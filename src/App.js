import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Main/Home';
import About from './components/Main/About';
import Party from './components/Main/Party';
import Politician from './components/Main/Politician';
// import firebase from "firebase"
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyDsoZMTU2VfFqOVdeCbmTqfklzWYAD5E6k",
//   authDomain: "prsau-16dba.firebaseapp.com",
//   projectId: "prsau-16dba",
//   storageBucket: "prsau-16dba.appspot.com",
//   messagingSenderId: "275262950080",
//   appId: "1:275262950080:web:0c9659a398dc083c8f7b25",
//   measurementId: "G-88BDW2Y9PT"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/party' element={<Party />} />
        <Route path='/politicians' element={<Politician />} />
      </Routes>
    </>

  );
}

export default App;
