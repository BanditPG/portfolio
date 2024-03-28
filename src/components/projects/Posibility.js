import ProjectView from "../ProjectView"

export default function Possibility() {
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
                    <p>
                        <a href="./screenshoots/possibility/dokumentacja_lazik.pdf" target="_blank">Dokumentacja techniczna</a> <br />
                        <a href="https://drive.google.com/file/d/1aKPja_FUfu3k2xQ6c12rMo9Mw1GYJLAd/view?usp=sharing" target="_blank">Film</a>
                    </p>
                </>
            }
        />
    )
}