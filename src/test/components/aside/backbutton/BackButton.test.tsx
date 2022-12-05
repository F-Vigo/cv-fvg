import { render } from "@testing-library/react"
import { BackButton } from "../../../../main/components/aside/backbutton/BackButton"

describe("BackButton component", () => {
    test("renders", () => {
        const component = render(<BackButton />)
        component.getByRole("button")
    })
})

export {}