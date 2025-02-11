import UserDTO from "../model/dto/UserDTO";
import UserRepository from "../repository/UserRepository";

export default class UserService {
    private userRepository = new UserRepository();

    public save = async (user: UserDTO) => {
        try {
            const response = await this.userRepository.saveOne(user.getName(), user.getEmail(), user.getPassword());
            return response;
        } catch (error) {
            throw new Error(`Error in save one: ${error}`);
        }
    }

    public findByEmail = async (email: string) => {
        try {
            const response = await this.userRepository.findByEmail(email);
            return response;
        } catch(error) {
            const asError = error as Error;

            throw new Error(asError.message);
        }
    }
}