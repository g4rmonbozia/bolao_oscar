import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function listarIndicados() {
    let retorno;
    await getDocs(collection(db, "indicado"))
        .then((querySnapshot) => {
            retorno = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        });
    return retorno;
}