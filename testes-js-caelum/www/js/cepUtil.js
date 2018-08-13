var cepUtil = (function() {
    'use strict';

    function validar(cep) {
        var objER = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
        if (!cep || !objER.test(cep)) {
            return false;
        }

        return true;
    }

    function colocarMascara(cepSemFormatacao) {
        var cepFormatado;

        if (cepSemFormatacao.length === 8) {
            cepFormatado = cepSemFormatacao.substring(0, 2) +
            '.' + cepSemFormatacao.substring(2, 5) +
            '-' + cepSemFormatacao.substring(5, 8);
        }

        return validar(cepFormatado) ? cepFormatado : cepSemFormatacao;
    }

    function retirarMascara(cep) {
        return cep.replace(/\.|\-/g, '');
    }

    return {
        colocarMascara: colocarMascara,
        retirarMascara: retirarMascara,
        validar: validar
    };
}) ();