import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

class AuthService {
   constructor(app) {
      this.firebaseAuth = getAuth(app);
   }

   emailPasswordLogin(email, password) {
      const auth = this.firebaseAuth;
      createUserWithEmailAndPassword(auth, email, password)
         .then(userCredential => {
            const user = userCredential.user;
            console.log(user);
         })
         .catch(error => console.log(error));
   }

   emailSignIn(email, password) {
      const auth = this.firebaseAuth;
      signInWithEmailAndPassword(auth, email, password)
         .then(userCredential => {
            const user = userCredential.user;
            console.log(user);
         })
         .catch(error => console.log(error));
   }
}

export default AuthService;
