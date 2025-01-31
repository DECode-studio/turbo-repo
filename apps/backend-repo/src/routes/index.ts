import { Request, Response } from 'express'
import { Http } from '../helpers';
import ConfigRouter from './config/index';

import Auth from './router/auth'
import User from './router/user'

class Routes extends ConfigRouter {
    public routes() {
      this.router.use('/api/auth', Auth)
      this.router.use('/api/user', User)
      this.router.use('*', (req: Request, res: Response): void => {
        Http.send(res, {
          code: 404,
          message: 'Sorry, HTTP resource you are looking for was not found.',
          error: true
        })
      })
    }
  }
  
export default new Routes().router