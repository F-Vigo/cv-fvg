import { FC } from "react"

interface LanguagesProps {}

export const Languages: FC<LanguagesProps> = () => {
    return(
        <div className="page" id="languages">
            <h1>Idiomas</h1>
            <article>
                <ul>
                    <li>Español nivel nativo.</li>
                    <li>Inglés con nivel C1 por Cambridge University Press & Assessment English. Puesto en práctica durante el curso escolar 2017-2018 en la Universidad de Helsinki, Finlandia, y durante mis años de experiencia laboral en un ambiente internacional.</li>
                </ul>


            </article>
        </div>
    )
}