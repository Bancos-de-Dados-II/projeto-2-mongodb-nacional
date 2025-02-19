import LocalStorageService from "../../services/localStorage/LocalStorageService";
import UserServices from "../../services/user/UserServices";
import { useForm } from "react-hook-form";
import "./styles.css"

export default function FormLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm({mode: "onBlur"});
    const userService = new UserServices();
    const storageService = new LocalStorageService();

    //deve receber data
    const onSubmit = async () => {
        //const { email, password } = data;
        const email = "pires@gmail.com"
    
        const userJson = await userService.get(email);

        const isOk = await userService.validateUser(userJson, "12345678");

        if (isOk) {
            userService.redirectPage("servicos");
            alert("Aproveite a plataforma!");
            storageService.setData(email);
        }
    };

    return (
        <div className="form-login">
            <div className="login-text">
                <label>Login</label>
            </div>
            <div className="form-campos">
                <form action="#">
                    <label className="email-text">Insira seu email:</label>
                    <input className="email-input"></input>
                    <label className="password-text">Insira sua senha:</label>
                    <input className="password-input"></input>

                    <button className="button-login" onClick={onSubmit}>Entrar</button>
                </form>
            </div>     
        </div>
    )
}
