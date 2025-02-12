import ButtonBack from "../../components/ButtonBack";
import FormLogin from "../../components/FormLogin";
import "./styles.css"

export function Login(){
    return(
        <section className="login-section">
            <div className="lateral-section">
                <ButtonBack/>
                <img src="/img/logo.png"></img>
            </div>
            <div className="form-login-section">
                <FormLogin/>
            </div>
        </section>
    )
}