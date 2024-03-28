import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Project from './Project'
import Background from "./Background";


export default function Landing() {
    return (
        <>
            <Background>
                <div className="contentContainer profile">
                    <div className="titles">
                        <h1>Dominik Kołodziej</h1>
                    </div>
                </div>
            </Background>

            <div className="contentContainer description">
                <div className="verticalTitle">
                    <h1>O mnie</h1>
                </div>
                <div className="sideText">
                    <h2>Dzień dobry</h2>
                    <p> 
Nazywam się Dominik Kołodziej i jestem absolwentem kierunku Technik informatyk w Zespole Szkół Technicznych w Ostrowie Wielkopolskim. Moje doświadczenie edukacyjne obejmuje szeroki zakres projektów, począwszy od tworzenia gier komputerowych, poprzez rozwijanie umiejętności w zakresie web developmentu, aż po konstruowanie i programowanie robotów. Jestem pasjonatem innowacji, a moje projekty charakteryzują się dążeniem do tworzenia praktycznych rozwiązań, które łączą w sobie bezpieczeństwo, intuicyjność obsługi oraz estetykę. Moim flagowym projektem, który zdobył uznanie zarówno za aspekty programistyczne, jak i konstrukcyjne, był robot o nazwie "Łazik Possibility". Doświadczyłem również pracy jako niezależny programista, realizując różnorodne projekty komercyjne.
                    </p>
                </div>
            </div>
            <div className="contentContainer description">
                <div className="verticalTitle">
                    <h1>Projekty</h1>
                </div>
                <div className="sideText">
                    <Project href="possibility">Possibility Rover</Project>
                    <Project href="3rdem">Third Eye Module</Project>
                    <Project href="edusat">EDUSAT</Project>
                </div>
            </div>
        </>
    )
}