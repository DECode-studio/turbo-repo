import { HttpError } from "../helpers";
import { HttpResponse } from "../helpers/service/http";

import UserDataController from "../entities/user";
import UserModel from "../model/user";

class UserRepository {

    static GetUser = async (
        idUser?: string
    ) => {
        var userData = new UserDataController();
        var data: any

        if (idUser == null || idUser == undefined) {
            data = await userData.getAllUser();
        } else {
            data = await userData.getUserById(idUser ?? '');
        }

        return data
    }

    static AddUser = async (
        user: UserModel
    ): Promise<string> => {
        var userData = new UserDataController();
        var result = await userData.addUser(user)

        if (!result) {
            const err: HttpResponse<undefined> = {
                code: 422,
                message: "add user data not success"
            }

            throw new HttpError(err.code, err.message ?? '')
        }

        return "add user data success"
    }

    static EditUser = async (
        user: UserModel
    ): Promise<string> => {
        var userData = new UserDataController();
        var result = await userData.editUser(user)

        if (!result) {
            const err: HttpResponse<undefined> = {
                code: 422,
                message: "edit user data not success"
            }

            throw new HttpError(err.code, err.message ?? '')
        }

        return "edit user data success"
    }

    static DeleteUser = async (
        idUser?: string
    ): Promise<string> => {
        var userData = new UserDataController();
        var result = await userData.deleteUser(idUser ?? '')

        if (idUser == null || idUser == undefined || !result) {
            const err: HttpResponse<undefined> = {
                code: 422,
                message: "delete user data not success"
            }

            throw new HttpError(err.code, err.message ?? '')
        }

        return "delete user data success"
    }
}

export default UserRepository