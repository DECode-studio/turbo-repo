import ConfigRouter from '../config/index';
import Api from '../../controller/api'
import authMiddleware from '../../middleware/authMiddleware'

class UserRoute extends ConfigRouter<typeof Api> {
    constructor() {
      super(Api)
    }
  
    public routes() {
      this.router.get(
        '/get-user', 
        authMiddleware.checkAuthorization,
        this.bindHandler(Api.GetUser)
      )

      this.router.post(
        '/add-user', 
        authMiddleware.checkAuthorization,
        this.bindHandler(Api.AddUser)
      )
      
      this.router.post(
        '/edit-user', 
        authMiddleware.checkAuthorization,
        this.bindHandler(Api.EditUser)
      )
      
      this.router.post(
        '/delete-user', 
        authMiddleware.checkAuthorization,
        this.bindHandler(Api.DeleteUser)
      )
    }
  }
  
  export default new UserRoute().router