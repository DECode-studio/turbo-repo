import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import UserModel from '../../model/user'
import { database } from '@/service/config/firebace-config';

class UserDataController {
    collectionData = 'UserCollection'

    async addUser(
        user: UserModel
    ): Promise<boolean> {
        try {
            if (typeof window !== "undefined") {
                const ref = collection(database, this.collectionData)
                await addDoc(ref, user.toObject())
            } else {
                const userRef = db.collection(this.collectionData).doc(user.idUser ?? '');
                await userRef.set({
                    idUser: user.idUser,
                    nameUser: user.nameUser,
                    emailUser: user.emailUser,
                    contactUser: user.contactUser
                });
            }

            return true;
        } catch (error) {
            console.error('Error saving user:', error);
            return false;
        }
    }

    // method untuk memperbarui data User di Firestore
    async editUser(
        user: UserModel
    ): Promise<boolean> {
        try {
            if (typeof window !== "undefined") {
                const collectionById = doc(database, this.collectionData, user.idUser ?? '')
                await updateDoc(collectionById, user.toObject())
            } else {
                const userRef = db.collection(this.collectionData).doc(user.idUser ?? '');
                await userRef.update({
                    nameUser: user.nameUser,
                    emailUser: user.emailUser,
                    contactUser: user.contactUser
                });
            }


            return true;
        } catch (error) {
            console.error('Error updating user:', error);
            return false;
        }
    }

    // method untuk menghapus data User di Firestore
    async deleteUser(
        idUser: string
    ): Promise<boolean> {
        try {
            const userRef = db.collection(this.collectionData).doc(idUser);
            await userRef.delete();

            return true;
        } catch (error) {
            console.error('Error deleting user:', error);
            return false;
        }
    }

    // method untuk mengambil data User dari Firestore berdasarkan ID
    async getUserById(
        idUser: string
    ): Promise<UserModel> {
        try {
            const userRef = db.collection(this.collectionData).doc(idUser);
            const doc = await userRef.get();

            if (doc.exists) {
                return UserModel.fromFirestore(doc);
            }

            return new UserModel(); // Tidak ditemukan
        } catch (error) {
            console.error('Error getting user by id:', error);
            return new UserModel(); // Tidak ditemukan
        }
    }

    // method untuk mengambil semua data User dari Firestore
    async getAllUser(): Promise<UserModel[]> {
        try {
            const usersSnapshot = await db.collection(this.collectionData).get();
            const users: UserModel[] = [];
            usersSnapshot.forEach(doc => {
                users.push(UserModel.fromFirestore(doc));
            });

            return users;
        } catch (error) {
            console.error('Error getting all users:', error);
            return [];
        }
    }
}

export default UserDataController