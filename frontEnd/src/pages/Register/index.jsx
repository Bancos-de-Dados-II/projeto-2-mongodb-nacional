import ButtonBack from "../../components/ButtonBack";
import FormRegister from "../../components/FormRegister";
import "./styles.css"

export function Register(){
    return(
        <section className="login-section">
            <div className="lateral-section">
                <ButtonBack/>
                <img src="/img/logo.png"></img>
            </div>
            <div className="form-login-section">
                <FormRegister/>
            </div>
        </section>
    )
}