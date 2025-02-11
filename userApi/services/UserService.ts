import UserDTO from "../model/dto/UserDTO";
import UserRepository from "../repository/UserRepository";
import bcryptjs from "bcryptjs";

export default class UserService {
    private userRepository = new UserRepository();

    //encripta a string passada
    private encriptData = async (input: string) => {
        const ROUNDS = 10;
        
        const hash = await bcryptjs.hash(input, ROUNDS);

        return hash;
    }

    public save = async (user: UserDTO) => {
        try {
            //criptografando o email e a senha no salvamento dos dados
            const response = await this.userRepository.saveOne(
                user.getName(), 
                user.getEmail(), 
                await this.encriptData(user.getPassword()));

            return response;
        } catch (error) {
            throw new Error(`Error in save one: ${error}`);
        }
    }

    public findByEmail = async (email: string) => {
        try {
            const response = await this.userRepository.findByEmail(email);
            
            const userDto = new UserDTO(response.name as string, response.email as string, response.password as string);

            return userDto;
        } catch(error) {
            const asError = error as Error;

            throw new Error(asError.message);
        }
    }
}