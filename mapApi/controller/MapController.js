export default class MapController {
    //testando configurações
    findAll = (request, response, next) => {
        try {
            response.status(200).send({
                message: "OK"
            })
            return;
        } catch (error) {
            response.status(500).send({
                error: "Server internal error"
            })
        }
    }
}