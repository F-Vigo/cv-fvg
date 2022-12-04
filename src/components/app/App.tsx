import React, { FC } from "react"
import { ContextProvider } from "../../context/Context"
import { Main } from "../main/Main"
import { Aside } from "../aside/Aside"
import "./App.scss"
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"

import global_es from "../../i18n/es/global.json"

interface AppProps {}

export const App: FC<AppProps> = () => {

    i18next.init({
        interpolation: {escapeValue: false},
        lng: "es",
        resources: {
            es: {global: global_es}
        }
    })

    return (
        <I18nextProvider i18n={i18next} >
            <ContextProvider>
                <div id="app">
                    <Aside />
                    <Main />
                    <div className="clearFloat"></div>
                </div>
            </ContextProvider>
        </I18nextProvider>
    )
}
