import UserRepository from "@/service/controller/respository/user";
import ResponseModel from "@/service/model/response";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseModel>,
) {
    const result: ResponseModel = {
        codeResponse: undefined,
        messageResponse: undefined,
        dataResponse: undefined
    }

    try {
        if (req.method === 'GET') {
            result.codeResponse = 200
            result.messageResponse = "get data success"
            result.dataResponse = await GetUser(req, res)

            res.status(200).json(result);
        } else {
            result.codeResponse = 404
            result.messageResponse = "route not found"

            res.status(404).json(result);
        }
    } catch (error: any) {
        result.codeResponse = 422
        result.messageResponse = error.toString()

        res.status(422).json(result);
    }
}

const GetUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { idUser } = req.query;
        const data = await UserRepository.GetUser(idUser as string | undefined)

        return data
    } catch (error: any) {
        throw new Error(error);
    }
}