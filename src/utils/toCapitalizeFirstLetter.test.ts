import toCapitalizeFirstLetter from "./toCapitalizeFirstLetter";

describe('toCapitalizeFirstLetter', () => {
    test('Should capitalize first letter of the word', () => {
        const url = toCapitalizeFirstLetter('word');

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemons',
            query: {}
        })
    })
})