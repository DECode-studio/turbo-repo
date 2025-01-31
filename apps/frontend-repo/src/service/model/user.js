class UserModel {
    idUser;
    nameUser;
    emailUser;
    contactUser;
    constructor(idUser, nameUser, emailUser, contactUser) {
        this.idUser = idUser;
        this.nameUser = nameUser;
        this.emailUser = emailUser;
        this.contactUser = contactUser;
    }
    // Method untuk menampilkan informasi pengguna
    displayUserInfo() {
        return `User Info:
      ID: ${this.idUser}
      Name: ${this.nameUser}
      Email: ${this.emailUser}
      Contact: ${this.contactUser}`;
    }
    // Static method untuk mengubah data Firestore menjadi instance User
    static fromFirestore(doc) {
        const data = doc.data();
        return new UserModel(doc.id, data?.nameUser ?? '', data?.emailUser ?? '', data?.contactUser ?? '');
    }
    // Static method untuk mengubah object menjadi instance User
    static fromObject(obj) {
        return new UserModel(obj.idUser, obj.nameUser, obj.emailUser, obj.contactUser);
    }
    toObject() {
        return {
            idUser: this.idUser,
            nameUser: this.nameUser,
            emailUser: this.emailUser,
            contactUser: this.contactUser,
        };
    }
}
export default UserModel;
