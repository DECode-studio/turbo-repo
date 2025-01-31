import { Request, Response } from 'express'
import Http, { HttpResponse } from './service/http'
import HttpError from './service/http_error'

export { default as Http } from './service/http'
export { default as HttpError } from './service/http_error'

class Handler {
  protected sendHttp<T>(
    res: Response,
    code: number,
    data: any
  ): Response {
    var response: HttpResponse<undefined> = {
      code: code,
      data: data,
      error: code == 200 ? false : true
    }

    return Http.send(res, response)
  }

  protected setHttpError({
    code,
    message
  }: HttpResponse<undefined>
  ): void {
    throw new HttpError(code, message ?? '')
  }

  protected handleHttpError(
    req: Request,
    res: Response,
    error: Error
  ): Response {
    return HttpError.handle(req, res, error)
  }
}

export default Handler
