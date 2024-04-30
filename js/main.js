const num = 20; // NUmero de cartas que irão ser carregadas

function main() {
    let offset = 0; // Numero que indica a partir de 
    // carregar();
    carregar(`?num=${num}&offset=${offset}`); // chama função que carrega os dados
    offset = offset + num; // Aumenta o parametro offset para a proxima busca

    const carregarMais = document.getElementById("carregar-mais"); // Pega o botão no HTML
    carregarMais.addEventListener("click", () => { // Verifica o evento do tipo click
        carregar(`?num=${num}&offset=${offset}`); // Chama a função carregar passando os parametros de busca
        offset = offset + num; // Aumenta o parametro offset para a proxima busca
    });
}

// Função que chama outras funções (carregar e setDadosForm)
const carregar = async(parametros) => {
    const dados = await busca(parametros); // chamando a função que busca os dados e passando os parametros
    dados.data.forEach((element) => { // Loop sobre os dados do array
        setDadosForm(element); // Passando cada dado do loop do array
    });
}

// função que busca os dados na API
const busca = async (parametros) => {
    let apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php${parametros? parametros: ''}`; // url da API que recebe parametros
    const resposta = await fetch(apiUrl);
    const dados = await resposta.json();
    return dados; // retorna o JSON da api
}

// FUNÇÂO QUE VOCE IRÀ UTILIZAR NA FUNÇÃO DE BUSCA
// FUNÇÂO QUE VOCE IRÀ UTILIZAR NA FUNÇÃO DE BUSCA
// FUNÇÂO QUE VOCE IRÀ UTILIZAR NA FUNÇÃO DE BUSCA
// FUNÇÂO QUE VOCE IRÀ UTILIZAR NA FUNÇÃO DE BUSCA
// FUNÇÂO QUE VOCE IRÀ UTILIZAR NA FUNÇÃO DE BUSCA
// FUNÇÂO QUE VOCE IRÀ UTILIZAR NA FUNÇÃO DE BUSCA
// FUNÇÂO QUE VOCE IRÀ UTILIZAR NA FUNÇÃO DE BUSCA
// FUNÇÂO QUE VOCE IRÀ UTILIZAR NA FUNÇÃO DE BUSCA
// FUNÇÂO QUE VOCE IRÀ UTILIZAR NA FUNÇÃO DE BUSCA
// FUNÇÂO QUE VOCE IRÀ UTILIZAR NA FUNÇÃO DE BUSCA
// FUNÇÂO QUE VOCE IRÀ UTILIZAR NA FUNÇÃO DE BUSCA
// FUNÇÂO QUE VOCE IRÀ UTILIZAR NA FUNÇÃO DE BUSCA
const deletaPagina = () => {
    let container = document.getElementById('cards'); // pega o container no HTML
    container.innerHTML = ""; // Substitui o que tem no container para vazio
}

const setDadosForm = function (dados) {

    // Recebe a div cards do HTML
    let divCard = document.getElementById('cards');

    // Cria um elemento no HTML
    let divBoxCard = document.createElement('div');
    let divImagem = document.createElement('div');
    let img = document.createElement('img');
    let divInfo = document.createElement('div');
    let h2Nome = document.createElement('h2');
    let textNome = document.createTextNode(dados.name);
    let h3Tipo = document.createElement('h3');
    let textTipo = document.createTextNode(dados.type);
    let h3Raca = document.createElement('h3');
    let textRaca = document.createTextNode(dados.race);
    let h3Desc = document.createElement('h3');
    let textDesc = document.createTextNode(dados.desc);

    // Coloca um atributo em uma tag no HTML
    divBoxCard.setAttribute('class', 'card');
    divImagem.setAttribute('class', 'imagem');
    img.setAttribute('src', dados.card_images[0].image_url_small);

    divInfo.setAttribute('class', 'info');
    h2Nome.setAttribute('class', 'nome');
    h3Tipo.setAttribute('class', 'tipo');
    h3Raca.setAttribute('class', 'raca');
    h3Desc.setAttribute('class', 'desc');

    // Coloca um elemento Filho dentro de elemento pai
    divCard.appendChild(divBoxCard);
    divBoxCard.appendChild(divImagem);
    divImagem.appendChild(img);
    divBoxCard.appendChild(divInfo);
    divInfo.appendChild(h2Nome);
    h2Nome.appendChild(textNome);
    divInfo.appendChild(h3Tipo);
    h3Tipo.appendChild(textTipo);
    divInfo.appendChild(h3Raca);
    h3Raca.appendChild(textRaca);
    divInfo.appendChild(h3Desc);
    h3Desc.appendChild(textDesc);
}

main()