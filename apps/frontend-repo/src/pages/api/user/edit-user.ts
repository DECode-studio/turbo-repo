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
        if (req.method === 'POST') {
            result.codeResponse = 200
            result.messageResponse = "edit data success"
            result.dataResponse = await EditUser(req, res)

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

const EditUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const body = req.body
        const data = await UserRepository.EditUser(body)

        return data
    } catch (error: any) {
        throw new Error(error);
    }
}