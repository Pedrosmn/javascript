function verificar() {
    var ano_nasc = document.querySelector('input#ano')
    var res = document.querySelector('div#res')
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - Number(ano_nasc.value)
    if (ano_nasc.value.length == 0 || ano_nasc.value > ano) {
        window.alert('ERRO, digite os dados corretamente!')
    }
    else {
        var form_sex = document.getElementsByName('sex')
        var genero = ''
        if (form_sex[0].checked) {
            genero = 'Homem'
        }
        else {
            genero = 'Mulher'
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
    }
}
