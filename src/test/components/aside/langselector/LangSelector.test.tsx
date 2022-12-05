import { render } from "@testing-library/react"
import { LangSelector } from "../../../../main/components/aside/langselector/LangSelector"

describe("LangSelector component", () => {
    test("renders", () => {
        const component = render(<LangSelector />)
        component.getByRole("button")
        component.getByText("English")
        component.getByText("Español")
    })
})