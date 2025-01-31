import { database } from '@/service/config/firebace-config';
import axios from 'axios';
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
const BASE_URL = 'http://localhost:3000/api/user';
const collectionData = 'UserCollection';
export const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}/get-user`);
    return response.data;
};
export const getUserById = async (idUser) => {
    const response = await axios.get(`${BASE_URL}/get-user?idUser=${idUser}`);
    return response.data;
};
export const addUser = async (user) => {
    const ref = collection(database, collectionData);
    await addDoc(ref, user.toObject());
};
export const editUser = async (user) => {
    const collectionById = doc(database, collectionData, user.idUser ?? '');
    await updateDoc(collectionById, user.toObject());
};
export const deleteUser = async (idUser) => {
    const collectionById = doc(database, collectionData, idUser);
    await deleteDoc(collectionById);
};
