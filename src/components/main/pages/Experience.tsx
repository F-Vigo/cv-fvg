import { FC } from "react"

interface ExperienceProps {}

export const Experience: FC<ExperienceProps> = () => {
    return(
        <div id="experience" className="page">
            <h1>Experiencia laboral</h1>
            <article>
                <ul>
                    <li>
                        <p>The Workshop — <i>Inventors of Play</i></p>
                        <ul>
                            <li><i>Graduate Engineer</i> (septiembre 2019 - marzo 2020)</li>
                            <li><i>Junior Software Engineer</i> (marzo 2020 - septiembre 2020)</li>
                            <li><i>Software Engineer</i> (septiembre 2020 - septiembre 2021)</li>
                        </ul>
                    </li>
                    
                </ul>
                <p>Como desarrollador en The Workshop trabajé fundamentalmente (pero no exclusivamente) en tareas de <i>backend</i> con proyectos escritos en Java (1.8 y 11) con Maven 3 y el <i>framework</i> Spring Boot. Mis responsabilidades iban desde la planificación y escritura del código hasta el testeo (a varios niveles) y el despliegue. Todo el trabajo se enmarcaba en una metodología <i>agile</i> siguiendo el modelo SCRUM.</p>
                <p>Uno de los primeros proyectos en los que trabajé consiste en el desarrollo de un <i>backend</i> desde cero hasta su despligue. Otros proyectos de interés incluyen la participación en una ETL o el diseño de un mecanismo de reporte mediante la consulta a varias bases de datos.</p>
            </article>
        </div>
    )
}