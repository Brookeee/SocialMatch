import app from 'firebase/app'; //The app variable represents the firebase application.

//We have to import auth and firestore to use the features.
import 'firebase/auth';
import 'firebase/firebase-firestore';

//For firebase config setting, you should use your own application's information.
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

class Firebase {
  constructor() {
    app.initializeApp(config); //Let config information initialize firebase
    //With this.auth and this.db variables we can access auth and firestore
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, pass) {
    //firebase login function
    return this.auth.signInWithEmailAndPassword(email, pass);
  }

  logout() {
    //firebase logout function
    return this.auth.signOut();
  }

  async register(name, email, pass) {
    //firebase register function
    await this.auth.createUserWithEmailAndPassword(email, pass);
    //We've updated the username of the register result.
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  addFruit(fruit) {
    //user presence control
    if (!this.auth.currentUser) {
      return alert('Not authorized');
    }

    //Adding documents to the collection of pckurdu
    return this.db.doc(`pckurdu/${this.auth.currentUser.uid}`).set({
      fruit: fruit,
    });
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
