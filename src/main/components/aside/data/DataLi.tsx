import { FC } from "react"
import { useTranslation } from "react-i18next"

interface DataLiProps {
    title: string
    content: string
}

export const DataLi: FC<DataLiProps> = ({title, content}) => {
    
    const [t, i18n] = useTranslation("global")

    return(
        <li className="data_li">
            <p className="data_li_title">{t(title)}</p>
            <p className="data_li_content">{content}</p>
        </li>
    )
}