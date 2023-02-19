import * as user_component from "../user.component"
// @ponicode
describe("user_component.UserComponent.addPokemon", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_component.UserComponent()
    })

    test("0", () => {
        inst.addPokemon()
    })
})
