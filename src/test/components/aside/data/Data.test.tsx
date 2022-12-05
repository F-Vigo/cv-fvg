import { render } from "@testing-library/react"
import { Data } from "../../../../main/components/aside/data/Data"

describe("Data component", () => {
    test("renders", () => {
        const component = render(<Data />)
        component.getByText("f.vigo00@gmail.com")
    })
})