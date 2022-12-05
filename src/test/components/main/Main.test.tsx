import { render } from "@testing-library/react"
import { Main } from "../../../main/components/main/Main"
import { pageList } from "../../../main/const/page"

describe("Main component", () => {

    test("renders", () => {
        const component = render(<Main />)
        expect(component.queryAllByRole("button")).toHaveLength(pageList.length - 1)
    })
/* 
    test("changes page", () => {
        const component = render(<Main />)
        expect(component.queryAllByText("Java related")).toHaveLength(0)
        userEvent.click(component.getByText("SKILLS"))
        component.getByText("Java related")
    }) */
})