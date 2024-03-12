import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase"


export async function inserirAposta(novaAposta) {
    const docRef = await addDoc(collection(db, "aposta"), novaAposta);
    return docRef.id;
}

export async function listarApostas() {
    let retorno;
    await getDocs(collection(db, "aposta"))
        .then((querySnapshot) => {
            retorno = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        });
    return retorno;
}
