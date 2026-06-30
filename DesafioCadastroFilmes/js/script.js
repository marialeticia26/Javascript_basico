let botaoCadastrar = document.getElementById("cadastrar")

let botaoModoEscuro = document.getElementById("modoEscuro")

let quantidadeFilmes = 0

botaoCadastrar.addEventListener("click", function () {
    let nome = document.getElementById("nome").value

    let genero = document.getElementById("genero").value

    let ano = document.getElementById("ano").value

    let mensagem = document.getElementById("mensagem")

    let contador = document.getElementById("contador")

    if (nome == "" || genero == "" || ano == "") {
        mensagem.textContent = "Preencha todos os campos!"
        return
    }

    mensagem.textContent = ""

    let card = document.createElement("div")

    card.classList.add("filme")

    card.innerHTML = "• " + nome + "<br>" + "• " + genero + "<br>" + "• " + ano + "<br><br>"

    let botaoExcluir = document.createElement("button")

    botaoExcluir.textContent = "Excluir"

    card.appendChild(botaoExcluir)

    botaoExcluir.addEventListener("click", function () {
        card.remove()
        quantidadeFilmes--
        contador.textContent = "Filmes cadastrados: " + quantidadeFilmes
    })

    let listaFilmes = document.getElementById("listaFilmes")

    listaFilmes.appendChild(card)

    quantidadeFilmes++

    contador.textContent = "Filmes cadastrados: " + quantidadeFilmes

    document.getElementById("nome").value = ""
    document.getElementById("genero").value = ""
    document.getElementById("ano").value = ""

})

botaoModoEscuro.addEventListener("click", function () {
    document.body.classList.toggle("escuro")

})


