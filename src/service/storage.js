import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

const storage = getStorage();

class StorageService {
   constructor(app) {
      this.firebaseStorage = getStorage(app);
   }

   async imageUpload(file, setProgress) {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
         uploadTask.on(
            'state_changed',
            snapshot => {
               const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
               setProgress(progress);
            },
            error => reject(error),
            () => {
               getDownloadURL(uploadTask.snapshot.ref)
                  .then(url => resolve(url))
                  .catch(error => reject(error));
            },
         );
      });
   }
}

export default StorageService;
