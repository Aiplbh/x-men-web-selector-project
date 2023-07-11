/* OBJETIVO 1 - Selecionar um item (personagem) quando o mouse passar sobre a figura 

- Obter a lista dos elementos a serem ativados
- Remover a seleção de um objeto que já esteja selecionado
- Adicionar a classe 'selecionado' quando o mouse passar sobre um elemento


OBJETIVO 2 - Trocar a imagem, nome e descrição do personagem grande

- Obter o elemento do personagem grande para adicionar informações
- alterar a imagem do personagem grande
- alterar o nome do pesonagem grande
- alterar a descrição do personagem grande

*/

/*
Obtem a lista dos personagens a partir de uma pesquisa no seletor (classe .personagem) anteriormente definida e 
atribui essa lista a variável listaDePersonagens
*/
const listaDePersonagens = document.querySelectorAll('.personagem');

/*
Percorre cada item da lista de personagens que está armazenada na variável listaDePersonagens e para cada item 
adiciona uma escuta (Listener) de evento para quando o mouse entrar no item.
*/

const personagens = document.querySelectorAll('.personagem');

listaDePersonagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

       if (window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');

        /* OBJETIVO 2 - Alterar a imagem grande */

        /* Passo 1 */
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        /* Passo 2 */
        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        /* Passo 3 */
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        
        /* Passo 4 */
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})


