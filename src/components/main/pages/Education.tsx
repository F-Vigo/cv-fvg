import { FC } from "react"

interface EducationProps {}

export const Education: FC<EducationProps> = () => {
    return(
        <div className="page" id="education">
            <h1>Datos académicos</h1>
            <article>
                <ul>
                    <li>
                        <p style={{display: "inline"}}>Formación universitaria.</p>
                        <ul>
                            <li>Grado en Matemáticas por la Universidad de Málaga (UMA). 2015-2019. Nota media: 8,49.</li>
                            <li>Participante del programa Erasmus+ en la Universidad de Helsinki, Finlandia, como estudiante de Matemáticas durante el curso 2017-2018.</li>
                            <li>Máster en Ciencia de datos e Ingeniería de computadores por la Universidad de Granada (UGR). 2021-2022. Nota media: 8,63.</li>
                            <li>Participante en la Cátedra Talento y Liderazgo de la Universidad de Granda y Alight (V Edición) durante el curso 2021-2022.</li>
                        </ul>
                    </li>

                    <li>
                        <p style={{display: "inline"}}>Formación no universitaria.</p>
                        <ul>
                            <li><i>Fundamentos en redes</i>, por EDteam. Certificado expedido en septiembre de 2020.</li>
                            <li><i>Introducción a la Inteligencia Artificial</i>, por EDteam. Certificado expedido en octubre de 2020.</li>
                            <li><i>Máster en CSS: <i>Responsiveness</i>, SASS, Flexbox, Grid y Bootstrap</i>, por Udemy. Certificado expedido en octubre de 2022.</li>
                            <li><i>The complete Google Sheets Course: Beginner to Advanced!</i>, por Udemy. Certificado expedido en noviembre de 2022.</li>
                            <li><i>The complete SQL Bootcamp 2022: Go from Zero to Hero (PostgreSQL)</i>, por Udemy. Certificado expedido en noviembre de 2022.</li>
                        </ul>
                    </li>

                    <li>
                        <p style={{display: "inline"}}>Idiomas.</p>
                        <ul>
                            <li><i>Cambridge English: Preliminary</i> (B1 en inglés) por Cambridge University Press & Assessment English. Certificado expedido en enero de 2014.</li>
                            <li><i>Cambridge English: First</i> (B2 en inglés) por Cambridge University Press & Assessment English. Certificado expedido en julio de 2014.</li>
                            <li><i>Cambridge English: Advanced</i> (C1 en inglés) por Cambridge University Press & Assessment English. Certificado expedido en agosto de 2016.</li>
                        </ul>
                    </li>
                </ul>


            </article>
        </div>
    )
}