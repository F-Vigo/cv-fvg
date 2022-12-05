import { render } from "@testing-library/react"
import { Image } from "../../../../main/components/aside/image/Image"

describe("Image component", () => {
    test("renders", () => {
        const component = render(<Image />)
        component.getByRole("img")
    })
})