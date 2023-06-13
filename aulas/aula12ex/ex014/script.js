function iniciar() {
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var dia = new Date()
    var hora = dia.getHours()
    msg.innerHTML = `Já são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/foto-manha.jpg'
        document.body.style.background = '#d5a57d'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#d67f3a'
    } else {
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#232a3d'
    }
}
