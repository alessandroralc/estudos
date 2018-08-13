describe("MaiorEMenor", function() {
    var MaiorEMenor = require('../lib/MaiorEMenor');
    var algoritmo;

    beforeEach(function() {
        algoritmo = new MaiorEMenor();
    });

    it("deve enteder números em ordem não sequencial", function() {
        algoritmo.encontra([5,15,7,9]);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deve entender números em ordem crescente", function() {
        algoritmo.encontra([5,6,7,8]);

        expect(algoritmo.pegaMaior()).toEqual(8);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deve entender números em ordem decrescente", function() {
        algoritmo.encontra([8,7,6,5]);

        expect(algoritmo.pegaMaior()).toEqual(8);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deve entender lista com um só elemento", function() {
        algoritmo.encontra([3]);

        expect(algoritmo.pegaMaior()).toEqual(3);
        expect(algoritmo.pegaMenor()).toEqual(3);
    });
});
  