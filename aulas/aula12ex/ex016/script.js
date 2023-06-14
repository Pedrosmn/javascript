function contar() {
    var iinicio = document.querySelector('input#inicio')
    var ifim = document.querySelector('input#fim')
    var ipasso = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
    var contador = Number(iinicio.value) + Number(ipasso.value)

    for (var c = 1; c <= Number(ifim.value); c = c + Number(ipasso.value)) {
        res.innerHTML = `${contador}`
        contador = contador + Number(ipasso.value)
        /*O res.innerHTML só está se substituindo, encontrar
        um jeito de ir adicionando */
    }
}