const expect = require('chai').expect;
const converter = require('../src/converter');

// No Mocha, nós descrevemos a funcionalidade utilizando esta função,
// cujo primeiro parâmetro é um nome da feature e o segundo é o
// corpo desta descrição.
describe('Color Code Converter', () => {
    // Aqui nós descrevemos o recurso com mais detalhes

    describe('RGB to Hex', () => {
        it('converts the basic colors', () => {
            const redHex = converter.rgbToHex(255, 0, 0);
            const greenHex = converter.rgbToHex(0, 255, 0);
            const blueHex = converter.rgbToHex(0, 0, 255);

            expect(redHex).to.equal('ff0000');
            expect(greenHex).to.equal('00ff00')
            expect(blueHex).to.equal('0000ff');
        });
    });

    describe('Hex to RGB', () => {
        it('converts the basic colors', () => {
            var red   = converter.hexToRgb('ff0000');
            var green = converter.hexToRgb('00ff00');
            var blue  = converter.hexToRgb('0000ff');

            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
        });
    });
});