import ProjectView from "../ProjectView"

export default function ThirdEyeModule() {
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