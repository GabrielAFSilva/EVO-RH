function somenteNumeros(e) {

    var charCode = (e.which) ? e.which : e.keyCode

    if (charCode > 31 && (charCode < 48 || charCode > 57))

        e.preventDefault();

}
function formatarCPF(e) {

    var v = e.target.value.replace(/\D/g, "");

    v = v.replace(/(\d{3})(\d)/, "$1.$2");

    v = v.replace(/(\d{3})(\d)/, "$1.$2");

    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    e.target.value = v;
}
function formatarCep(e) {

    var v = e.target.value.replace(/\D/g, "")

    v = v.replace(/^(\d{5})(\d)/, "$1-$2")

    e.target.value = v;
}

function formatarTelefone(e) {
    somenteNumeros(e);
    var v = e.target.value.replace(/\D/g, "");

    v = v.replace(/^(\d\d)(\d)/g, "($1)$2");

    v = v.replace(/(\d{5})(\d)/, "$1-$2");

    e.target.value = v;
}
function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function desabilitarCheck() {
    if (numFun.value == '') {
        ntemFun.disabled = false;
    }
    else {
        ntemFun.disabled = true;
    }
}
function desabilitarNum() {
    if (ntemFun.enable = true) {
        numFun.disabled = true;
    }
    else {
        numFun.disabled = false;
    }
}