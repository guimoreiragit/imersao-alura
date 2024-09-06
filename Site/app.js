function button() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let botaoPesquisa = document.getElementById("botao-pesquisa").value;

    // Inicializa uma string vazia para armazenar os resultados
    let results = "";
    let titulo = "";
    let descricao = "";
    let tag = "";


    // Itera sobre cada dado e adiciona o HTML correspondente aos resultados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tag = dado.tags.toLowerCase()

        if (titulo.includes(botaoPesquisa) || descricao.includes(botaoPesquisa) || tag.includes(botaoPesquisa)) {
            // Cria um novo elemento div para cada resultado
            results += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">mais informações</a>
        </div>
    `;

            if (botaoPesquisa == "") {
                section.innerHTML = "<p>Nenhum personagem foi encontrado</p>"
                return false
            }
            botaoPesquisa = botaoPesquisa.toLowerCase()

        
            if (botaoPesquisa == " "){
                section.innerHTML = "<p>Nenhum personagem foi encontrado</p>"
                return false
            }
        }
        if (!results){
            results ="<p>Nenhum personagem foi encontrado</p>"
        }

        // Atribui o HTML gerado à seção
        section.innerHTML = results
    }
}