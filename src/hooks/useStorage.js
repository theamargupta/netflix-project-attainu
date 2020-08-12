import { useState, useEffect } from 'react';
import { storage } from '../Firebase';

const useStorage = (file) => {
  const [progress, setProgress] = useState('');
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    const storageRef = storage.ref(file);
    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadUrl();
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, error, url };
};
export default useStorage;
