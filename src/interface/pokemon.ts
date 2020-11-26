export interface IPokemons {
    total: number,
    pokemons: PokemonsRequest[]
}

let pokemonsData = {
    "name_clean": "bulbasaur",
    "abilities": [
        "overgrow",
        "chlorophyl"
    ],
    "stats": {
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "special-attack": 49,
        "special-defense": 49,
        "speed": 45
    },
    "types": [
        "grass",
        "poison"
    ]
}

export type PokemonsRequest = typeof pokemonsData;