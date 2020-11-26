import getUrlWithParamsConfig from "./getUrlWithParamsConfig";

describe('getUrlWithParamsConfig', () => {
    test('Should get 2 args & { name: "Pikachu" } and return object with pathname, protocol, host & query with name ', () => {
        const url = getUrlWithParamsConfig('getPokemons', {name: 'Pikachu'});

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemons',
            query: {name: 'Pikachu'}
        })
    })
})