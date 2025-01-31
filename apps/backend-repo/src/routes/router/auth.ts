import ConfigRouter from '../config/index';
import Auth from '../../controller/auth'

class TokenRoute extends ConfigRouter<typeof Auth> {
    constructor() {
      super(Auth)
    }
  
    public routes() {
      this.router.post(
        '/get-token', 
        this.bindHandler(Auth.GetToken)
      )

      this.router.post(
        '/check-token', 
        this.bindHandler(Auth.CheckToken)
      )
    }
  }
  
  export default new TokenRoute().router