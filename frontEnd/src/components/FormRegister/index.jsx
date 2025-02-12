import "./styles.css"
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";


export default function FormRegister(){
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="form-register">
            <div className="login-text">
                <label>Cadastro</label>
            </div>
            <div className="form-campos">
                <form onSubmit={ handleSubmit(onSubmit)}>
                    <label className="password-text">Insira seu nome:</label>
                    <input name = "InserirNome" ref= { register()}/>
                    <br/>
                    <label className="password-text">Insira seu Email:</label>
                    <input name = "InserirEmail" ref= { register()}/>
                    <br/>
                    <label className="password-text">Telefone:</label>
                    <input name = "InserirTelefone" ref= { register()}/>
                    <br/>
                    <label className="password-text">Senha:</label>
                    <input name = "InserirSenha" ref= { register()}/>
                    <br/>
                    <label className="password-text">Localização:</label>
                    <input name = "InserirLocalizacao" ref= { register()}/>
                    <br/>
                    <input type="submit" />
                </form>
            </div>     
        </div>
    )
}
