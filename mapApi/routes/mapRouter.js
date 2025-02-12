import { Router } from "express";
import {criarLocalizacao, buscarLocalizacoes, deletarLocalizacaoPorNome}from "../controller/MapController";

const mapRouter = Router();

//controlador
//const mapController = new MapController();

//adição das rotas

mapRouter.post('/',criarLocalizacao)
mapRouter.get('/', buscarLocalizacoes)
mapRouter.delete('/localizacao/:nome', deletarLocalizacaoPorNome);





export default mapRouter;