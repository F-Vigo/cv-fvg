import React, { useState } from "react"
import { Page } from "../const/page"

interface ContextProps {
    activePage: Page
    changeActivePage: (newPage: Page) => void
}

export const Context: React.Context<ContextProps> = React.createContext<ContextProps>({activePage: Page.SELECTOR, changeActivePage: () => {}})

export const ContextProvider = ({children}: any) => {
    const [activePage, setActivePage] = useState<Page>(Page.SELECTOR)
    const changeActivePage = (newPage: Page): void => setActivePage(newPage)
    return <Context.Provider value = {{activePage, changeActivePage}}>{children}</Context.Provider>
}