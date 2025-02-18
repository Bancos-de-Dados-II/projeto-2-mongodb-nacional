import "./styles.css"
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";


export default function FormRegister(){
    const { register, handleSubmit, formState: { errors } } = useForm({mode: "onBlur"});
    const onSubmit = (data) => console.log(data );

    return (
        <div className="form-register">
            <div className="login-text">
                <label>Cadastro</label>
            </div>
            <div className="form-campos">
                <form onSubmit={ handleSubmit(onSubmit)}>
                    <label className="name-text">Insira seu nome:</label>
                     <input type = "text" {...register("InserirNome", { required: true, maxLength: 120 })} />
                    <ErrorMessage errors={ errors } name="InserirNome" message="Nome deve ter menos de 120 caracteres" as = "span" />

                    <br/>
                    <label className="email-text">Insira seu Email:</label>
                    <input type="email" {...register("InserirEmail",{
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
                        <ErrorMessage errors={ errors } name="InserirEmail" message={errors.email?.message} as = "span" />
                        

                    <br/>
                    <label className="telefone-text">Telefone:</label>
                    <input type = "tel" {...register("InserirTelefone", { 
                        required: true,
                        maxLength:{
                            value:11,
                            message: "O telefone deve possuir no máximo 11 números"
                        } })} />
                    <ErrorMessage errors={ errors } name="InserirTelefone" message={errors.tel?.message} as = "span" />

                    <br/>
                    <label className="senha-text">Criar Senha:</label>
                    <input type="password"{...register("InserirSenha", { required: true, minLength: 6 })} />
                    <ErrorMessage errors={ errors } name="InserirSenha" message="Deve haver pelo menos 6 caracteres" as = "span" />
                    <br/>

                    <label className="localizacao-text">Localização:</label>
                    <input {...register("InserirLocalizacao", { required: true, minLength: 6 })} />
                    <ErrorMessage errors={ errors } name="InserirLocalizacao" message="Deve possuir formato valido" as = "span" />
                    <br/>

                    <button onSubmit={handleSubmit(onSubmit)}>Enviar</button>
                </form>
            </div>     
        </div>
    )
}
