import { db } from '../config/firebaseConfig';
import UserModel from '../model/user'

class UserDataController {
    async addUser(
        user: UserModel
    ): Promise<boolean> {
        try {
            const userRef = db.collection('UserCollection').doc(user.idUser ?? '');
            await userRef.set({
                idUser: user.idUser,
                nameUser: user.nameUser,
                emailUser: user.emailUser,
                contactUser: user.contactUser
            });

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
            const userRef = db.collection('UserCollection').doc(user.idUser ?? '');
            await userRef.update({
                nameUser: user.nameUser,
                emailUser: user.emailUser,
                contactUser: user.contactUser
            });

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
            const userRef = db.collection('UserCollection').doc(idUser);
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
            const userRef = db.collection('UserCollection').doc(idUser);
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
            const usersSnapshot = await db.collection('UserCollection').get();
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