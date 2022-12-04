import { FC } from "react"

interface DataLiProps {
    title: string
    content: string
}

export const DataLi: FC<DataLiProps> = ({title, content}) => {
    return(
        <li className="data_li">
            <p className="data_li_title">{title}</p>
            <p className="data_li_content">
                {
                    title === "LinkedIn" 
                        ? <a href={content} target="_blank" rel="noreferrer"><i className="icon fa-brands fa-linkedin" title={title}></i></a>
                        : title === "GitHub"
                            ? <a href={content} target="_blank" rel="noreferrer"><i className="icon fa-brands fa-square-github" title={title}></i></a>
                            : content
                }
            </p>
        </li>
    )
}