import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   updateProfile,
   signOut,
   onAuthStateChanged,
   setPersistence,
   inMemoryPersistence,
} from 'firebase/auth';

class AuthService {
   constructor(app) {
      this.firebaseAuth = getAuth(app);
   }

   onAuthChanged(onUserChanged) {
      const auth = this.firebaseAuth;
      onAuthStateChanged(auth, user => {
         onUserChanged(user);
      });
   }

   logout() {
      signOut(this.firebaseAuth);
   }

   signIn(displayName, email, password) {
      const auth = this.firebaseAuth;
      createUserWithEmailAndPassword(auth, email, password)
         .then(() => {
            updateProfile(auth.currentUser, {
               displayName: displayName,
            });
         })
         .catch(error => console.log(error));
   }

   loginWithEmailAndPass(email, password) {
      const auth = this.firebaseAuth;
      setPersistence(auth, inMemoryPersistence)
         .then(async () => {
            await signInWithEmailAndPassword(auth, email, password);
            alert('로그인 되었습니다.');
            return;
         })
         .catch(error => {
            switch (error.code) {
               case 'auth/user-not-found':
                  alert('가입되지 않은 이메일 입니다.');
                  break;

               case 'auth/wrong-password':
                  alert('가입한 비밀번호와 일치하지 않습니다.');
                  break;

               default:
                  console.log(error);
            }
         });
   }
}

export default AuthService;
