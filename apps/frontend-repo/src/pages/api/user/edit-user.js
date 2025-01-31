import UserRepository from "@/service/controller/respository/user";
export default async function handler(req, res) {
    const result = {
        codeResponse: undefined,
        messageResponse: undefined,
        dataResponse: undefined
    };
    try {
        if (req.method === 'POST') {
            result.codeResponse = 200;
            result.messageResponse = "edit data success";
            result.dataResponse = await EditUser(req, res);
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
const EditUser = async (req, res) => {
    try {
        const body = req.body;
        const data = await UserRepository.EditUser(body);
        return data;
    }
    catch (error) {
        throw new Error(error);
    }
};
