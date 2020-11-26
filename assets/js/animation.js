let assunto = document.querySelector('#assunto')


function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length < 2){
        txtAssunto.innerHTML = 'Você só pode digitar 300 caracteres!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}   


