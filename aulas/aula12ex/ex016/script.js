function contar() {
    var iinicio = document.querySelector('input#inicio')
    var ifim = document.querySelector('input#fim')
    var ipasso = document.querySelector('input#passo')
    var res = document.querySelector('div#res')

    if (iinicio.value.length == 0 || ifim.value.length == 0 || ipasso.value.length == 0) {
        window.alert('[ERRO] Digite todos os dados')
    }
    else if (Number(iinicio.value) == Number(ifim.value)) {
        window.alert('[ERRO] Impossível contar, os números são iguais.')
    }
    else if (Number(iinicio.value) >= Number(ifim.value)) {
        res.innerHTML = `Contando: `
        for (let c = Number(iinicio.value); c >= Number(ifim.value); c -= Number(ipasso.value))
        res.innerHTML += `${c} > `
    }
    else {
        res.innerHTML = `Contando: `
        for (let c = Number(iinicio.value); c <= Number(ifim.value); c += Number(ipasso.value)) {
        res.innerHTML += `${c} > `
        }
    }

    
}