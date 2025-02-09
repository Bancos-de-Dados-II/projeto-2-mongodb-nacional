import Features from "../../components/Features";
import Footer from "../../components/Footer";
import GenericSection from "../../components/GenericSection";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ServicesSection from "../../components/ServicesSection";
import Testemoials from "../../components/Testemonials";
import "./styles.css"

export default function Home() {
    return (
        <section className="home-section">
            <Header />
            <Hero />
            <GenericSection 
                prev={"Sobre nós"} 
                title={"ReCircular"} 
                content={"A Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fuga delectus aperiam molestiae magni optio asperiores esse, commodi totam temporibus dignissimos perferendis ullam mollitia ex obcaecati, incidunt consectetur. Porro, nemo!"}
                pathImg={"img/logo-icon.png"}
            />
            <ServicesSection />
            <Testemoials />
            <Features />
            <GenericSection
                prev={"Entre em contato"}
                title={"Fale Conosco"}
                content={"A Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fuga delectus aperiam molestiae magni optio asperiores esse, commodi totam temporibus dignissimos perferendis ullam mollitia ex obcaecati, incidunt consectetur. Porro, nemo!"}
                pathImg={"img/talk-section.png"}
            />
            <Footer />
        </section>
    );
}