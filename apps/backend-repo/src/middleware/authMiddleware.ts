import { Request, Response, NextFunction } from 'express';
import AuthDataController from '../entities/auth';

class AuthorizationMiddleware {

    async checkAuthorization(req: Request, res: Response, next: NextFunction) {
        const authData = new AuthDataController()
        const { authorization } = req.headers;
        
        const query = req.query;
        const body = req.body;

        var idUser = body.idUser ?? query.idUser

        if (!authorization) {
            const response = {
                status: 401,
                message: 'No Unauthorization Token'
            }

            return res.status(401).json(response);
        }

        const isAuthorized = await authData.verifyToken(
            authorization.substring(7, authorization.length),
            idUser
        );

        if (!isAuthorized) {
            const response = {
                status: 401,
                message: 'Unauthorized'
            }

            return res.status(401).json(response);
        }

        next();
    }
}

export default new AuthorizationMiddleware();