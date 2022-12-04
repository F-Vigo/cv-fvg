import "./Data.scss"
import { FC } from "react"
import { DataLi } from "./DataLi"
import { Button } from "../../button/Button"

interface DataProps {}

export const Data: FC<DataProps> = () => {

    const getCurrentAge = (): number => {
        
        const today: Date = new Date()
        const birthDate: Date = new Date("1997-06-06")
        let age: number = today.getFullYear() - birthDate.getFullYear()
        const monthDiff = today.getMonth() - birthDate.getMonth()
        const beforeBirthdayDay = today.getDate() < birthDate.getDate()
        
        if (monthDiff < 0 || monthDiff === 0 && beforeBirthdayDay) {
            age--
        }
        return age
    }

    return(
        <div>
            <div id="data_separator"></div>
            <h1 id="data_name">Francisco Vigo García</h1>
            <div id="data_icons_wrapper">

                <a className="icon_button_a" href="https://www.linkedin.com/in/francisco-vigo-garcia/" target="_blank" rel="noreferrer">
                    <Button f={()=>{}}>
                        <i className="icon fa-brands fa-linkedin" title="LinkedIn"></i>
                    </Button>
                </a>

                <a className="icon_button_a" href="https://github.com/F-Vigo" target="_blank" rel="noreferrer">
                    <Button f={()=>{}}>
                        <i className="icon fa-brands fa-square-github" title="GitHub"></i>
                    </Button>
                </a>

            </div>
            <ul id="data_ul">
                {
                    [
                        ["Correo electrónico", "f.vigo00@gmail.com"],
                        ["Edad actual", getCurrentAge().toString()],
                        ["Residencia actual", "Málaga"]

                    ].map(item => <DataLi key={item[0]} title={item[0]} content={item[1]} />)
                }                
            </ul>
        </div>
    )
}