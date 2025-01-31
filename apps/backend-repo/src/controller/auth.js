import Handler from '../helpers';
import AuthRepository from '../repository/authCollection';
class AuthController extends Handler {
    GetToken = async (req, res) => {
        try {
            const { idUser } = req.body;
            const data = await AuthRepository.GetToken(idUser);
            this.sendHttp(res, 200, data);
        }
        catch (error) {
            console.log(error);
            this.sendHttp(res, 422, error);
        }
    };
    CheckToken = async (req, res) => {
        try {
            const { token, idUser } = req.body;
            const data = await AuthRepository.CheckToken(token, idUser);
            this.sendHttp(res, 200, data);
        }
        catch (error) {
            console.log(error);
            this.sendHttp(res, 422, error);
        }
    };
}
export default new AuthController();
