import mongoose from "mongoose";
import IUser from "../model/interface/IUser";

interface IUserSechama extends IUser, Document {}

const schema = new mongoose.Schema<IUserSechama>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

export default class UserRepository {

    private User;

    //instanciando o user
    constructor() {
        this.User = mongoose.model("User", schema);
    }

    //retorna o usuário criado
    public saveOne = async (name: string, email: string, password: string) => {
        const userToAdd = new this.User({ name, email, password });
        return await userToAdd.save();
    }

    public findByEmail = async (email: string) => {
        const response = await this.User.findOne({
            email: email
        })

        if (response) {
            return response;
        }

        throw new Error(`Failed to get user with email: ${email}`);
    }
}