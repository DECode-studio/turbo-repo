import AuthDataController from '../entities/auth'

class AuthRepository {

    static GetToken = async (
        idUser?: string
    ): Promise<string> => {
        var authData = new AuthDataController();
        var data = authData.createToken(idUser ?? '')

        return data
    }

    static CheckToken = async (
        token?: string,
        idUser?: string
    ): Promise<Object> => {
        var authData = new AuthDataController();
        var result = await authData.verifyToken(token ?? '', idUser ?? '')
        var data = {
            message: result ? "token and user id match" : "token and user id not match",
            token: token,
            idUser: idUser
        }

        return data
    }
}

export default AuthRepository