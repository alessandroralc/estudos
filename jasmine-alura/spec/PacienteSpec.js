describe("Paciente", function() {
    var Paciente = require('../lib/Paciente');

    it("deve calcular o imc", function() {
        var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

        var imc = guilherme.imc();
        expect(imc).toEqual(72 / (1.82 * 1.82));
    });

    it("deve calcular os batimentos", function() {
        var alessandro = new Paciente("Alessandro", 29, 70, 1.85);

        var batimentos = alessandro.batimentos();
        expect(batimentos).toEqual(365 * 24 * 60 * 80);
    });
});