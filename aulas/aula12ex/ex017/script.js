function tabuada() {
    let num = document.querySelector('input#txtnum')
    let tab = document.querySelector('select#seltab')
    let n = Number(num.value)

    if (num.value.length == 0) {
        window.alert('Por favor digite um número.')
    }
    else {
        tab.innerHTML = ``
        for (let c = 1; c <= 10; c++) {
            let valor = document.createElement('option')
            valor.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(valor)
            
        }
    }
}