import { collection, doc, setDoc } from "firebase/firestore";
import { slots } from "../store/doctors";
import { db } from "./firebaseConfig";

const _doctors = slots;

const uploadData = async () => {
    try {
        for (let i = 0; i < _doctors.length; i++) {
            const doctor = _doctors[i];

            const collectionName = 'slots';
            const documentId = `slot_${i + 1}`;

            const docRef = doc(collection(db, collectionName), documentId);
            await setDoc(docRef, doctor);
        }
        console.log('Data uploaded successfully.');
    } catch (error) {
        console.log('Error uploading data: ', error);
    }
};

export default uploadData;