describe('cepUtil é uma biblioteca destinada ao tratamento de CEP.', function() {
    describe('validarCep é uma função que deve validar se o valor de entrada é um CEP válido.', function() {
        it('Deve validar quando o CEP for composto por dois números, seguido de um ponto, três número, um hífen e mais três números', function() {
            expect(cepUtil.validar('70.673-410')).toBeTruthy();
        });
        it('Deve invalidar se a máscara não for informada', function() {
            expect(cepUtil.validar('70673410')).toBeFalsy();
        });
        it('Deve invalidar se houverem caracteres alfabéticos', function() {
            expect(cepUtil.validar('70.673-41X')).toBeFalsy();
        });
        it('Deve invalidar se a quantidade de números estiver incorreta', function() {
            expect(cepUtil.validar('70.673-4100')).toBeFalsy();
        })
    });

    describe('Máscara', function() {
        describe('deve ser colocada', function() {
            it('quando cep estiver correto', function() {
                expect(cepUtil.colocarMascara('70673410')).toBe('70.673-410');
            });
        });
        describe('não deve ser colocada', function() {
            it('quando cep for tiver mais que 8 números', function() {
                expect(cepUtil.colocarMascara('706734100')).toBe('706734100');
            });
            it('quando cep estiver com letras', function() {
                expect(cepUtil.colocarMascara('7067341X')).toBe('7067341X');
            });
        });
        describe('deve ser retirada', function() {
            it('quando cep estiver formatado', function() {
                expect(cepUtil.retirarMascara('70.673-410')).toBe('70673410');
            })
        });
    });
});