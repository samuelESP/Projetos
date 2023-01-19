const INPUT_BUSCA = document.getElementById('input-busca');//Meu input
const CORPO_TABELA = document.getElementById('corpo');//Corpo da minha tabela


INPUT_BUSCA.addEventListener('keyup', () => {
    let palavra = INPUT_BUSCA.value.toLowerCase();//Palavra digitada no meu input
     
    if (palavra.length === 1) {
        return
    }

let linhas = CORPO_TABELA.getElementsByTagName('tr');//HTML collection com todas as minhas linhas e outras informações da minha tabela(length, named, Item)
for(posicao in linhas){//Como eu nn quero essas outras informações eu preciso retirar elas da minha linhas; vou fazer um for que retorna os index das minhas linhas;
    if(true === isNaN(posicao)){//"Se for verdade que posicao não é um numero faça continue"
        continue;
    }

    let conteudoLinha = linhas[posicao].innerHTML.toLowerCase();//Agora eu tenho todo o conteudo das minhas 10 linhas, de 0 até 9;

    if (true === conteudoLinha.includes(palavra)) {//"Se verdadeiro que meu conteudoLinha possui a palvra escrita no meu input faça...."
        linhas[posicao].style.display='';
    }else{
        linhas[posicao].style.display='none';
    }
}
});