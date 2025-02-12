import "./styles.css"

export default function FormLogin(){
    return (
        <div className="form-login">
            <div className="login-text">
                <label>Login</label>
            </div>
            <div className="form-campos">
                <label className="email-text">Insira seu email:</label>
                <input className="email-input"></input>
                <label className="password-text">Insira sua senha:</label>
                <input className="password-input"></input>
            </div>     
        </div>
    )
}
