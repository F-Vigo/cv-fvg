import { FC } from "react"

interface SkillsProps {}

export const Skills: FC<SkillsProps> = () => {
    return(
        <div className="page" id="skills">
            <h1>Tecnologías</h1>
            <article>
                <ul>

                    <li>
                        <p style={{display: "inline"}}>Relacionadas con Java.</p>
                        <ul>
                            <li>Java.</li>
                            <li>Scala.</li>
                            <li>Spring y Spring Boot.</li>
                        </ul>
                    </li>

                    <li>
                        <p style={{display: "inline"}}>Relacionadas con JavaScript.</p>
                        <ul>
                            <li>HTML5 (HTML + CSS + JavaScript).</li>
                            <li>Typescript.</li>
                            <li>React.js.</li>
                        </ul>
                    </li>

                    <li>
                        <p style={{display: "inline"}}>Otros lenguajes.</p>
                        <ul>
                            <li>Python.</li>
                            <li>R.</li>
                        </ul>
                    </li>

                    <li>
                        <p style={{display: "inline"}}>Otros.</p>
                        <ul>
                            <li>Git.</li>
                            <li>Bases de datos relacionales (MySQL, PostgreSQL).</li>
                            <li>Google Sheets.</li>
                            <li>LaTeX.</li>
                        </ul>
                    </li>
                </ul>


            </article>
        </div>
    )
}