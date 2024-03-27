import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DefaultWrapper = (props) => {
    const [mouseXY, setMouseXY] = useState(0);

    const navigate = useNavigate();

    const updateMousePosition = (event) => {
        setMouseXY({ x: event.clientX, y: event.clientY })
    }

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);
        // eslint-disable-next-line
    }, [])

    return (
        <main>
            <aside>
                <h1 
                    onClick={() => navigate("/portfolio")} 
                    className="banner"
                >
                    KOŁODZIEJ.DEV
                </h1>
            </aside>
            <div 
                style={{ backgroundPosition: `${-mouseXY.x/100}px ${(-mouseXY.y/100)}px` }}
                className="contentContainer project"
            >
                { props.children }
            </div>
        </main>
    )
}

export const ProjectView = (props) => {

    return (
        <DefaultWrapper>
            <div className="projectView">
                <div className="imageContainer">
                    {
                        (props?.video) && (
                            <video controls>
                                <source src={props?.video} type="video/mp4"></source>
                            </video> 
                        )
                    }
                    {
                        props.images?.map((e, i) => <img key={i} src={e.src} alt={e.alt} /> )
                    }
                </div>
                <div className="descriptionContainer">
                    <h1> { props.title } </h1>
                    <p>
                        { props.description }
                    </p>
                </div>
            </div>
        </DefaultWrapper>
    );
}

export const ThirdEyeModule = () => {
    return (
        <ProjectView 
            video="./screenshoots/thirdeye/thirdeyepresentation.mp4"
            images={[
                { src: "./screenshoots/thirdeye/thirdeye1.webp", alt: "Third Eye Module" },
                { src: "./screenshoots/thirdeye/thirdeye2.webp", alt: "Third Eye Module" },
                { src: "./screenshoots/thirdeye/thirdeye3.webp", alt: "Third Eye Module" },
                { src: "./screenshoots/thirdeye/thirdeye4.webp", alt: "Third Eye Module" }
            ]}
            title="Third Eye Module"
            description={<>
                <p className="highlighted">
                    Użyte technologie: Javascript, Python, React.js, Saas, Editor.js MongoDB, ChromaDB, Jsonwebtoken, Node.js, Express.js, Flask, Deepl API, Wikipedia API, Stable Diffusion, Transformers
                </p>
                <p>Third Eye Module to program, który wykorzystując sztuczną inteligencję pomaga organizować zbieraną podczas przeszukiwania Internetu wiedzę w postaci notatek.
                Edytor notatek jest oparty o strukturę blokową, w której każdy blok posiada inne właściwości. Użytkownik ma do dyspozycji wyszukiwarki obsługujące język naturalny, dzięki czemu znalezienie interesujących informacji staje się szybkie i proste. Uzupełnieniem programu jest wtyczka do przeglądarki, która jest cały czas na wyciągnięcie ręki i pozwala na streszczanie artykułów, tłumaczenie ich, a także na zarządzanie zapisem notatki. 
                Idea, jaka przyświecała projektowi, to stworzenie oprogramowania open source, możliwego do uruchomienia na większości współczesnych komputerów, bez wykorzystania płatnych interfejsów api z zamkniętym źródłem świadczących dostęp do sztucznej inteligencji przez firmy trzecie. Modele AI są uruchamiane lokalnie dzięki czemu użytkownik ma kontrolę nad danymi, które przetwarza.
                </p>
            </>
            }
        />
    )
}
export const Possibility = () => {
    return (
        <ProjectView 
            images={[
                { src: "./screenshoots/possibility/possibility1.webp", alt: "Possibility rover" },
                { src: "./screenshoots/possibility/possibility2.webp", alt: "Possibility rover" },
                { src: "./screenshoots/possibility/possibility3.webp", alt: "Possibility rover" }
            ]}
            title="Possibility"
            description={
                <>
                    <p className="highlighted">
                    Użyte technologie: Python, Javascript, Electron.js, CSS3, Autodesk Eagle, Autodesk Fusion 360, GNU/Linux, 
                    </p>
                    <p>Zainspirowani misją łazika Perseverence w roku szkolnym 2020/2021 zrodził się pomysł stworzenia własnej wersji robota, zdolnego do eksploracji terenu. W projekcie 
                    zostały zastosowane koncepcje znajdujące się w łazikach czynnie eksplorujących marsa, m. in. Zawieszenie rocker-bogie, obrotowa wieżyczka z kamerą, ramie robotyczne, antena o zdalnie sterowanym kierunku wypromieniowania. 
                    </p>
                    <a href="./screenshoots/possibility/dokumentacja_lazik.pdf" target="_blank">Dokumentacja techniczna</a> <br />
                    <a href="https://drive.google.com/file/d/1aKPja_FUfu3k2xQ6c12rMo9Mw1GYJLAd/view?usp=sharing" target="_blank">Film</a>
                </>
            }
        />
    )
}

export const Edusat = () => {
    return (
        <ProjectView
            images={[
                { src: "./screenshoots/edusat/edusat1.webp", alt: "EDUSAT" },
            ]}
            title="EDUSAT"
            description={
                <>
                    <p className="highlighted">
                        Użyte technologie: C++, Javascript, Electron.js, CSS3 
                    </p>
                    <p>
                    EDUSAT jest to projektu programu na zajęcia dydaktyczne z zakresu
informatyki, elektroniki i druku 3D, który ma na celu popularyzację astronomii wśród
ambitnej młodzieży, rozwój umiejętności i nabywanie wiedzy w wyżej wymienionych
kierunkach. Jako motyw przewodni wybraliśmy satelitę, ponieważ jego budowa wydała nam
się ciekawa i satysfakcjonująca ze względu na konfrontację z prawdziwymi problemami
związanymi z budową satelity oraz finalnie zbudowanie od podstaw przez uczniów
amatorskiego satelity typu CubeSat.
Naszym celem jest rozwinięcie uczniów w dziedzinach druku 3D, aby zdobyć umiejętności
związane z przygotowywaniem modeli do druku, kalibracji oraz obsługi drukarki. Elektroniki,
a dokładniej w zakresie interfejsów komunikacji między urządzeniami, a także w zakresie
oprogramowywania i pracy z mikroprocesorami. W kontekście informatyki przedstawiamy
materiał z zakresu teorii informacji opisując algorytmy wykrywające i korygujące
przekłamania zaistniałe w wyniku transmisji danych. Chcemy także dać uczniom podwaliny
do projektowania własnych niezawodnych protokołów transmisji danych. Uczniowie będą
mogli także zdobyć wiedzę na temat budowy użytecznych interfejsów graficznych
wykorzystując nowoczesne technologie. Podsumowaniem zdobytej wiedzy będzie zaś
samodzielne wydrukowanie, zbudowanie i oprogramowanie satelity przez uczniów.
W dokumentacji prezentujemy opracowany przez nas program wraz
z przygotowanymi przez nas materiałami dydaktycznymi dotyczącymi poszczególnych
tematów.
                    </p>
                    <a href="./screenshoots/edusat/dokumentacja_satelita.pdf" target="_blank">Dokumentacja techniczna</a> <br />
                    <a href="./screenshoots/edusat/edusat_source_code.zip" target="_blank">Kod źródłowy</a>
                </>
            }
        />
    )

}
