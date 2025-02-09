import Button from "../Button";
import "./styles.css"

export default function Hero() {
    return (
        <section className="hero-container section-dimensions-default padding-default">
           <div className="text-hero-content">
                <h1>ReCircular</h1>

                <p>Olá, somos a Lorem Ipsum.
                Nosso trabalho é desenvolver textos de marcação.</p>
           </div>

           <Button content={"SAIBA MAIS"} />
        </section>
    );
}