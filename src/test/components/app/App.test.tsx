import { getAllByText, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { App } from "../../../main/components/app/App"

describe("App component", () => {
    
    test("Renders", () => {
        const component = render(<App />)
        component.getByText("Francisco Vigo García")
        component.getByText("About")
        
    })

    test("Switches language", () => {
        const component = render(<App />)
        expect(component.queryAllByText("Sobre mí")).toHaveLength(0)
        userEvent.click(component.getByText("Español"))
        component.getByText("Sobre mí")
    })
})

