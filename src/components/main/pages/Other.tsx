import { FC } from "react"

interface OtherProps {}

export const Other: FC<OtherProps> = () => {
    return(
        <div className="page" id="other">
            <h1>Otros datos de interés</h1>
            <article>
                <ul>
                    <li>Candidato a los VII Premios de Educación «Ciudad de Málaga» 2015.</li>
                    <li>Muy buenas capacidades comunicativas.</li>  
                    <li>
                        <p style={{display: "inline"}}>Publicaciones en Amazon:</p>
                        <ul>

                            <li><a target="_blank" rel="noreferrer"
                                href="https://www.amazon.es/Entrenando-Python-Francisco-Vigo-Garc%C3%ADa/dp/1795437413/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HLTV1JENIYLI&keywords=Entrenando+con+Python&qid=1670181702&sprefix=entrenando+con+python%2Caps%2C122&sr=8-1"
                            ><i>Entrenando con Python</i></a>.</li>
                            
                            <li><a target="_blank" rel="noreferrer"
                                href="https://www.amazon.es/Matem%C3%A1ticas-II-Segundo-Bachillerato-Ciencias-ebook/dp/B07P6T932G/ref=sr_1_3?qid=1670181845&refinements=p_27%3AFrancisco+Vigo+Garc%C3%ADa&s=books&sr=1-3"
                            ><i>Matemáticas II: Segundo de Bachillerato de Ciencias</i></a>.</li>
                            
                            <li><a target="_blank" rel="noreferrer"
                                href="https://www.amazon.es/Morfolog%C3%ADa-sintaxis-Francisco-Vigo-Garc%C3%ADa-ebook/dp/B075QNSBWD/ref=sr_1_1?qid=1670181880&refinements=p_27%3AFrancisco+Vigo+Garc%C3%ADa&s=books&sr=1-1"
                            ><i>Morfología y Sintaxis</i></a>.</li>
                        </ul>

                    </li>                  
                </ul>


            </article>
        </div>
    )
}