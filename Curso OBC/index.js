alert("Olá Mundo!")

var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click',function (){
        duvida.classList.toggle('ativa')

    })

}
)

// function nome(argument) {
// conteúdo da função
//}