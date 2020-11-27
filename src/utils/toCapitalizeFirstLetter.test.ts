import toCapitalizeFirstLetter from "./toCapitalizeFirstLetter";

describe('toCapitalizeFirstLetter', () => {
    test('Should capitalize first letter of the word', () => {
        const result = toCapitalizeFirstLetter('word');

        expect(result).toEqual('Word');
    })
})