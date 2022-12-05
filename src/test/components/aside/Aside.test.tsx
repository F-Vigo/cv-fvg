import { render } from "@testing-library/react"
import { Aside } from "../../../main/components/aside/Aside"

describe("Aside component", () => {
    test("renders", () => {
        const component = render(<Aside />)
        component.getByText("Francisco Vigo García")
    })
})