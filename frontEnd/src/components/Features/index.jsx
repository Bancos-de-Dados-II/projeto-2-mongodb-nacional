import FeatureItem from "../FeatureItem";
import "./styles.css"

export default function Features() {
    return (
        <section className="features-container padding-default section-dimensions-default">
            <h2>Funcionalidades</h2>

            <div className="features-itens">
                <FeatureItem iconPath={"/img/personIcon.png"} title={"Loren"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fuga delectus aperiam."} />

                <FeatureItem iconPath={"/img/pointMap.png"} title={"Loren"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fuga delectus aperiam."} />

                <FeatureItem iconPath={"/img/list.png"} title={"Loren"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fuga delectus aperiam."} />

                <FeatureItem iconPath={"/img/trash.png"} title={"Loren"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fuga delectus aperiam."} />
            </div>
        </section>
    );
}