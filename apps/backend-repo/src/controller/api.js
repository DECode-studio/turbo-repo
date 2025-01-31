import Handler from '../helpers';
import UserRepository from '../repository/userCollection';
class ApiController extends Handler {
    GetUser = async (req, res) => {
        try {
            const { idUser } = req.query;
            const data = await UserRepository.GetUser(idUser);
            this.sendHttp(res, 200, data);
        }
        catch (error) {
            console.log(error);
            this.sendHttp(res, 422, error);
        }
    };
    AddUser = async (req, res) => {
        try {
            const user = req.body;
            const data = await UserRepository.AddUser(user);
            this.sendHttp(res, 200, data);
        }
        catch (error) {
            console.log(error);
            this.sendHttp(res, 422, error);
        }
    };
    EditUser = async (req, res) => {
        try {
            const user = req.body;
            const data = await UserRepository.EditUser(user);
            this.sendHttp(res, 200, data);
        }
        catch (error) {
            console.log(error);
            this.sendHttp(res, 422, error);
        }
    };
    DeleteUser = async (req, res) => {
        try {
            const { idUser } = req.query;
            const data = await UserRepository.DeleteUser(idUser);
            this.sendHttp(res, 200, data);
        }
        catch (error) {
            console.log(error);
            this.sendHttp(res, 422, error);
        }
    };
}
export default new ApiController();
