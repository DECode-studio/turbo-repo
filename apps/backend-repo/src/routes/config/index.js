import { Router } from 'express';
class ConfigRouter {
    router;
    binder;
    constructor(binder) {
        this.router = Router();
        this.binder = binder;
        this.routes();
    }
    bindHandler(handler) {
        if (typeof this.binder !== 'object') {
            throw new Error(`If you want to use 'bindHandler' method, property 'binder' must be 'object' which has RequestHandler. Received: '${typeof this.binder}'`);
        }
        return handler.bind(this.binder);
    }
}
export default ConfigRouter;
