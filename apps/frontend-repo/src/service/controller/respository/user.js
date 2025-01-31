import UserDataController from "../data/user";
class UserRepository {
    static GetUser = async (idUser) => {
        const userData = new UserDataController();
        let data;
        if (idUser == null || idUser == undefined) {
            data = await userData.getAllUser();
        }
        else {
            data = await userData.getUserById(idUser ?? '');
        }
        return data;
    };
    static AddUser = async (user) => {
        const userData = new UserDataController();
        const result = await userData.addUser(user);
        if (!result) {
            throw new Error("add user data not success");
        }
        return "add user data success";
    };
    static EditUser = async (user) => {
        const userData = new UserDataController();
        const result = await userData.editUser(user);
        if (!result) {
            throw new Error("edit user data not success");
        }
        return "edit user data success";
    };
    static DeleteUser = async (idUser) => {
        const userData = new UserDataController();
        const result = await userData.deleteUser(idUser ?? '');
        if (idUser == null || idUser == undefined || !result) {
            throw new Error("delete user data not success");
        }
        return "delete user data success";
    };
}
export default UserRepository;
