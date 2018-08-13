describe("Consulta", function() {
    var Consulta = require('../lib/Consulta');
    var Paciente = require('../lib/Paciente');
    var PacienteBuilder = require('./PacienteBuilder');

    var guilherme;

    beforeEach(function() {
        guilherme = PacienteBuilder().constroi();
    });

    describe("consulta do tipo retorno", function() {
        it("não deve cobrar nada se for um retorno", function() {
            var consulta = new Consulta(guilherme, [], true, true);
    
            expect(consulta.preco()).toEqual(0);
        });
    });

    describe("consultas com procedimentos", function() {
        it("deve cobrar 25 por cada procedimento comum", function() {
            var consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);
    
            expect(consulta.preco()).toEqual(50);
        });
    
        it("deve cobrar preco especifico dependendo do procedimento", function() {
            var consulta = new Consulta(guilherme, ["proc-comum", "raio-x", "proc-2", "gesso"], false, false);
    
            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    
        it("deve cobrar 50 por cada procedimento comum em consulta particular", function() {
            var consulta = new Consulta(guilherme, ["proc1", "proc2"], true, false);
    
            expect(consulta.preco()).toEqual(100);
        });
    
        it("deve cobrar o dobro por cada procedimento em consulta particular", function() {
            var consulta = new Consulta(guilherme, ["proc-comum", "raio-x", "proc-2", "gesso"], true, false);
    
            expect(consulta.preco()).toEqual((25 * 2) + (55 * 2) + (25 * 2) + (32 * 2));
        });
    });
});