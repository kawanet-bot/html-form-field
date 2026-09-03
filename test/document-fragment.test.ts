import {strict as assert} from "node:assert"
import {it} from "node:test"
import {formField} from "../src/index.ts"
import {describeWithDOM as DESCRIBE} from "./jsdom-helper.ts"

DESCRIBE("document-fragment", async () => {
    const {HTML} = await import("html-ele")

    // language=HTML
    const form = (HTML`
        <form>
            <ul>
                <li><input type="text" name="TX" value="tx1"></li>
            </ul>
        </form>
    `)

    it("DocumentFragment", () => {
        const field = formField({form, name: "TX"})
        assert.equal(field.name, "TX")
        assert.equal(field.value, "tx1")
    })
})
