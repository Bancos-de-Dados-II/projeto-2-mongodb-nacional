import { Router } from "express";
import UserControll from "../controller/UserController";

const routes = Router();

//instanciando o controller
const controller = new UserControll();

//espera receber o email
routes.post('/', controller.save);
routes.get('/:email', controller.findByEmail);

export default routes;