import jwt from 'jsonwebtoken';

class AuthDataController {
    JWT_SECRET = 'd42577d4-b425-4714-a889-3ba33d4807fa';

    createToken = (
        idUser: string
    ): string => {
        try {
            return jwt.sign({ idUser }, this.JWT_SECRET, { expiresIn: '1h' });
        } catch (error) {
            return ''
        }
    };

    verifyToken = async (
        token: string,
        idUser: string
    ): Promise<boolean> => {
        try {
            const decoded = jwt.verify(token, this.JWT_SECRET);
            return decoded != '';
        } catch (error) {
            return false;
        }
    }
}

export default AuthDataController