import "./styles.css"
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import UserServices from "../../services/user/UserServices";


export default function FormRegister(){
    const userService = new UserServices();

    const { register, handleSubmit, formState: { errors } } = useForm({mode: "onBlur"});

    const onSubmit = async (data) => {
        const result = await userService.save(data);

        if (result) {
            userService.redirectPage("login");
            alert("Conta criada com sucesso!");
        }
        
        alert("Falha ao criar conta, tente novamente");
    };

    return (
        <div className="form-register">
            <div className="register-text">
                <label>Cadastro</label>
            </div>
            <div className="register-campos">
                <form onSubmit={ handleSubmit(onSubmit)}>
                    <label className="title-text-register">Insira seu nome:</label>
                     <input className="input" type = "text" {...register("nome", { required: true, maxLength: 120 })} />
                    <ErrorMessage errors={ errors } name="nome" message="Nome deve ter menos de 120 caracteres" as = "span" />

                    <br/>
                    <label className="title-text-register">Insira seu Email:</label>
                    <input className="input" type="email" {...register("email",{
                        required: "O email é obrigatório",
                        pattern:{
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Email inválido"
                        },   
                        maxLength:{
                            value: 50,
                            message: "O email deve ter no máximo 50 caracteres"
                        }
                        })} 
                        />
                        <ErrorMessage errors={ errors } name="email" message={errors.email?.message} as = "span" />
                        

                    <br/>
                    <label className="title-text-register">Telefone:</label>
                    <input className="input" type = "tel" {...register("telefone", { 
                        required: true,
                        maxLength:{
                            value:11,
                            message: "O telefone deve possuir no máximo 11 números"
                        } })} />
                    <ErrorMessage errors={ errors } name="telefone" message={errors.tel?.message} as = "span" />

                    <br/>
                    <label className="title-text-register">Criar Senha:</label>
                    <input className="input" type="password"{...register("senha", { required: true, minLength: 6 })} />
                    <ErrorMessage errors={ errors } name="senha" message="Deve haver pelo menos 6 caracteres" as = "span" />
                    <br/>

                    <label className="title-text-register">Localização:</label>
                    <input className="input" {...register("localizacao", { required: true, minLength: 6 })} />
                    <ErrorMessage errors={ errors } name="localizacao" message="Deve possuir formato valido" as = "span" />
                    <br/>

                    <button className="button-send-register" onSubmit={handleSubmit(onSubmit)}>Enviar</button>
                </form>
            </div>     
        </div>
    )
}
