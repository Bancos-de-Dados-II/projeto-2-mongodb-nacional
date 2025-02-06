import { Router } from "express";
import MapController from "../controller/MapController";

const mapRouter = Router();

//controlador
const mapController = new MapController();

//adição das rotas
mapRouter.get('/', mapController.findAll);

export default mapRouter;