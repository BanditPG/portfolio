import ProjectView from "../ProjectView"

export default function Edusat() {
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
                    <p>
                        <a href="./screenshoots/edusat/dokumentacja_satelita.pdf" target="_blank">Dokumentacja techniczna</a> <br />
                        <a href="./screenshoots/edusat/edusat_source_code.zip" target="_blank">Kod źródłowy</a>
                    </p>
                </>
            }
        />
    )

}