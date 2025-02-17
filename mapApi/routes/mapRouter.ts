import { Router } from "express";
import  {MapController}  from "../controller/MapController";

const mapRouter = Router();

//controlador
const mapController = new MapController();

//adição das rotas

mapRouter.post('/',mapController.criarLocalizacao)
mapRouter.get('/', mapController.buscarLocalizacoes)
mapRouter.delete('/:nome', mapController.deletarLocalizacaoPorNome);
mapRouter.put('/:nome', mapController.buscarLocalizacaoPorNome)
mapRouter.patch("/:nome", mapController.atualizarLocalizacao)
//mapRouter.get("/:nome", mapController.buscarPorNoomeLocalizacao)





export default mapRouter;