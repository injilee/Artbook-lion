import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   updateProfile,
   signOut,
   onAuthStateChanged,
} from 'firebase/auth';

class AuthService {
   constructor(app) {
      this.firebaseAuth = getAuth(app);
   }

   checkLogin(onUserChanged) {
      const auth = this.firebaseAuth;
      onAuthStateChanged(auth, user => {
         onUserChanged(user);
      });
   }

   logout() {
      signOut(this.firebaseAuth);
      alert('정상적으로 로그아웃 되었습니다.');
   }

   emailSignIn(displayName, email, password) {
      const auth = this.firebaseAuth;
      createUserWithEmailAndPassword(auth, email, password)
         .then(() => {
            updateProfile(auth.currentUser, {
               displayName: displayName,
            });
         })
         .catch(error => console.log(error));
   }

   checkedEmailPassword(navigator, email, password) {
      const auth = this.firebaseAuth;
      signInWithEmailAndPassword(auth, email, password)
         .then(() => navigator('/home'))
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
