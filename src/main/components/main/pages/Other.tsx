import { FC } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "../../../const/page"

interface OtherProps {}

export const Other: FC<OtherProps> = () => {

    const [t, i18n] = useTranslation("global")

    return(
        <div className="page" id="other">
            <h1>{t(Page[Page.OTHER])}</h1>
            <article>
                <ul>
                    <li dangerouslySetInnerHTML={{__html: t("otherPageLi1")}}/>
                    <li dangerouslySetInnerHTML={{__html: t("otherPageLi2")}}/>
                    <li>
                        <p style={{display: "inline"}} dangerouslySetInnerHTML={{__html: t("otherPageLi3")}}/>
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