import Express from 'express';
import formData from "express-form-data";
import Cors from 'cors';
import routes from '../routes';
class Server {
    app;
    port;
    constructor() {
        this.port = process.env.PORT || 3000 || 5000 || 8000;
        this.app = Express();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(Express.urlencoded({ extended: true }));
        this.app.use(Express.json());
        this.app.use(formData.parse());
        this.app.use(Cors());
    }
    routes() {
        this.app.use(routes);
    }
    run() {
        this.app.listen(this.port, () => {
            console.log('back end repo api server');
            console.log(`Server listening on http://localhost:${this.port}`);
        });
    }
}
const server = new Server();
server.run();
