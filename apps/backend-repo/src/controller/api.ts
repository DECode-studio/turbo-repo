import { Request, Response } from 'express'
import Handler from '../helpers';
import UserRepository from '../repository/userCollection';

class ApiController extends Handler {

    GetUser = async (req: Request, res: Response) => {
        try {
            const { idUser } = req.query;
            const data = await UserRepository.GetUser(idUser as string | undefined)

            this.sendHttp(res, 200, data)
        } catch (error: any) {
            console.log(error);
            this.sendHttp(res, 422, error)
        }
    }

    AddUser = async (req: Request, res: Response) => {
        try {
            const user = req.body;
            const data = await UserRepository.AddUser(user)

            this.sendHttp(res, 200, data)
        } catch (error: any) {
            console.log(error);
            this.sendHttp(res, 422, error)
        }
    }

    EditUser = async (req: Request, res: Response) => {
        try {
            const user = req.body;
            const data = await UserRepository.EditUser(user)

            this.sendHttp(res, 200, data)
        } catch (error: any) {
            console.log(error);
            this.sendHttp(res, 422, error)
        }
    }

    DeleteUser = async (req: Request, res: Response) => {
        try {
            const { idUser } = req.query;
            const data = await UserRepository.DeleteUser(idUser as string | undefined)

            this.sendHttp(res, 200, data)
        } catch (error: any) {
            console.log(error);
            this.sendHttp(res, 422, error)
        }
    }
}

export default new ApiController()