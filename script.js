function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 20
    msg.innerHTML = `Agora são: ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = "manha.png"
        document.body.style.background = "#ccab9d"
    }else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.scr ="tarde.png"
        document.body.style.background = "#826442"
    }else{
        //Boa Noite
        img.scr = "noite.png"
        document.body.style.background = "#091416"
    }
}
