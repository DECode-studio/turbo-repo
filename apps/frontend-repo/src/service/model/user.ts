import * as admin from 'firebase-admin';

class UserModel {
  idUser?: string;
  nameUser?: string;
  emailUser?: string;
  contactUser?: string;

  constructor(
    idUser?: string,
    nameUser?: string,
    emailUser?: string,
    contactUser?: string
  ) {
    this.idUser = idUser;
    this.nameUser = nameUser;
    this.emailUser = emailUser;
    this.contactUser = contactUser;
  }

  // Method untuk menampilkan informasi pengguna
  displayUserInfo(): string {
    return `User Info:
      ID: ${this.idUser}
      Name: ${this.nameUser}
      Email: ${this.emailUser}
      Contact: ${this.contactUser}`;
  }

  // Static method untuk mengubah data Firestore menjadi instance User
  static fromFirestore(doc: admin.firestore.DocumentSnapshot): UserModel {
    const data = doc.data();
    return new UserModel(
      doc.id,
      data?.nameUser ?? '',
      data?.emailUser ?? '',
      data?.contactUser ?? ''
    );
  }

  // Static method untuk mengubah object menjadi instance User
  static fromObject(obj: { idUser?: string; nameUser?: string; emailUser?: string; contactUser?: string }): UserModel {
    return new UserModel(
      obj.idUser,
      obj.nameUser,
      obj.emailUser,
      obj.contactUser
    );
  }

  toObject(): { idUser?: string; nameUser?: string; emailUser?: string; contactUser?: string } {
    return {
      idUser: this.idUser,
      nameUser: this.nameUser,
      emailUser: this.emailUser,
      contactUser: this.contactUser,
    };
  }
}

export default UserModel;
