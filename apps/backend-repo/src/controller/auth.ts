import { Request, Response } from 'express'
import Handler from '../helpers';
import AuthRepository from '../repository/authCollection';

class AuthController extends Handler {
    GetToken = async (req: Request, res: Response) => {
        try {
            const { idUser } = req.body;
            const data = await AuthRepository.GetToken(idUser as string | undefined)

            this.sendHttp(res, 200, data)
        } catch (error: any) {
            console.log(error);
            this.sendHttp(res, 422, error)
        }
    }

    CheckToken = async (req: Request, res: Response) => {
        try {
            const {
                token,
                idUser
            } = req.body;
            
            const data = await AuthRepository.CheckToken(
                token as string | undefined,
                idUser as string | undefined
            )

            this.sendHttp(res, 200, data)
        } catch (error: any) {
            console.log(error);
            this.sendHttp(res, 422, error)
        }
    }
}

export default new AuthController()