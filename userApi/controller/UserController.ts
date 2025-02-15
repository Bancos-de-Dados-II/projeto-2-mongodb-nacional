import { Request, Response } from "express";
import UserService from "../services/UserService";
import UserDTO from "../model/dto/UserDTO";

export default class UserControll {

    private userService = new UserService();

    public save = async (request:Request, response:Response) => {

        try {
            const { name, email, password } = request.body as {name: string, email: string, password: string};
            const userDTO = new UserDTO(name, email, password);
            
            const result = await this.userService.save(userDTO);
            response.status(201).send(result);
        } catch (error) {
            const asError = error as Error;

            response.status(500).send({
                erro: asError.message
            });
        }
    }

    public findByEmail = async (request:Request, response:Response) => {
        try {
            const { email } = request.query as {email: string};

            const result = await this.userService.findByEmail(email);
            //retorna um UserDTO com as informações principais: nome, email e senha
            response.status(200).send(result);
        } catch(error) {
            const asError = error as Error;

            response.status(404).send({
                message: asError.message
            })
        }
    }

}