import UserRepository from "@/service/controller/respository/user";
export default async function handler(req, res) {
    const result = {
        codeResponse: undefined,
        messageResponse: undefined,
        dataResponse: undefined
    };
    try {
        if (req.method === 'GET') {
            result.codeResponse = 200;
            result.messageResponse = "get data success";
            result.dataResponse = await GetUser(req, res);
            res.status(200).json(result);
        }
        else {
            result.codeResponse = 404;
            result.messageResponse = "route not found";
            res.status(404).json(result);
        }
    }
    catch (error) {
        result.codeResponse = 422;
        result.messageResponse = error.toString();
        res.status(422).json(result);
    }
}
const GetUser = async (req, res) => {
    try {
        const { idUser } = req.query;
        const data = await UserRepository.GetUser(idUser);
        return data;
    }
    catch (error) {
        throw new Error(error);
    }
};
