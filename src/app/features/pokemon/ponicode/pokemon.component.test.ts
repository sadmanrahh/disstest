import * as pokemon_component from "../pokemon.component"
// @ponicode
describe("pokemon_component.PokemonComponent.ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new pokemon_component.PokemonComponent()
    })

    test("0", () => {
        inst.ngOnInit()
    })
})

// @ponicode
describe("pokemon_component.PokemonComponent.addPokemon", () => {
    let inst: any

    beforeEach(() => {
        inst = new pokemon_component.PokemonComponent()
    })

    test("0", () => {
        inst.addPokemon()
    })
})

// @ponicode
describe("pokemon_component.PokemonComponent.selectPokemon", () => {
    let inst: any

    beforeEach(() => {
        inst = new pokemon_component.PokemonComponent()
    })

    test("0", () => {
        inst.selectPokemon(undefined)
    })
})
