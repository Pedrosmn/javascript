let num = document.querySelector('input#num')
let vetor = []
let tab = document.querySelector('select#seltab')

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inTab(n, t) {
    if (t.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(num.value) && inTab(num.value, vetor)) {
        vetor.push(num)
        let opcao_tab = document.createElement('option')
        opcao_tab.text = `Valor ${num} adicionado na lista`
        tab.appendChild(opcao_tab)
    } else {
        window.alert('Valor inválido ou já adicionado')
    }
}