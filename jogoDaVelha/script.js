
const currentPlayer = document.querySelector(".currentPlayer");
console.log(currentPlayer);

let selected;//São as posições do meu player
let player = "X";//Meu jogador

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];//Posições ganhadoras

function init() {
  selected = [];//São as posições do meu player

  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;//Jogador atual, sempre começa com o X

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";//Cada espaço do meu jogog vai começar em branco
    item.addEventListener("click", newMove);//evento ao clicar nos espaços em branco
  });
}

init();

function newMove(e) {
  const index = e.target.getAttribute("data-i");//vai pegar o numero do data-i que eu passei no HTML.
  e.target.innerHTML = player;//Vai adicionar dentro do meu espaço em branco qual player ele é.
  e.target.removeEventListener("click", newMove);//Usado para não haver repetições de espaços
  selected[index] = player;//Toda vez que meu player muda ele recebe dentro do meu selected X ou O;Exemplo:
  /*(10) [empty, 'X', empty × 3, 'O', empty × 3, 'X']
1: "X"
5:"O"
9: "X"
length: 10*/
  setTimeout(() => {
    check();
  }, [100]);

  player = player === "X" ? "O" : "X";//condição para ser X ou O
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

function check() {
  let playerLastMove = player === "X" ? "O" : "X";
  const items = selected//Aqui eu estou com o meu Selected normal
    .map((item, i) => [item, i])//Agora ele ja me devolve um array que possui outros arrays com o seu player e seu index
    /*(6) [empty, Array(2), empty × 3, Array(2)]
    1: (2) ['X', 1]
    5: (2) ['O', 5]
    length: 6 */
    .filter((item) => item[0] === playerLastMove)//Vai pegar array por array do meu map e verificar se o meu player do array, no caso meu item[0] é o player que fez o ultimo movimento, e ira me devolver arrays diferentes para cada player.
    .map((item) => item[1]);//Ele agora vai me devolver para cada array seu posicionamento
  for (pos of positions) {//vai pecorrer cada posição que é possivel para ganhar
    if (pos.every((item) => items.includes(item))) {//vai verificar atrasves do every, se os itens selecionados do ultimo player possuem o item dessa posição, ou seja, vai pegar o meu array de posicionamentos e verificar se ele possui o mesmos numeros que os numeros de chance de vitoria.
      alert("O JOGADOR '" + playerLastMove + "' GANHOU!");
      init();//Vai reiniciar meu game
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {//Se ele ocupou 9 casas, ele ocupou todas as casas deu empate
    alert("DEU EMPATE!");
    init();
    return;
  }
}
