const INPUT_BUSCA = document.getElementById('input-busca');//Meu input
const CORPO_TABELA = document.getElementById('corpo');//Corpo da minha tabela

/*Filtrar Elementos*/
INPUT_BUSCA.addEventListener('keyup', () => {
    let palavra = INPUT_BUSCA.value.toLowerCase();//Palavra digitada no meu input
     
    if (palavra.length === 1) {
        return
    }

let linhas = CORPO_TABELA.getElementsByTagName('tr');//HTML collection com todas as minhas linhas e outras informações da minha tabela(length, named, Item)
for(posicao in linhas){
    console.log(typeof posicao);//Como eu nn quero essas outras informações eu preciso retirar elas da minha linhas; vou fazer um for que retorna os index das minhas linhas;
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


/*Remover Elementos */
const btnRemove = document.querySelectorAll('.btnRemove');
btnRemove.forEach((element) =>{
    element.addEventListener('click',() =>{
        element.parentElement.parentElement.remove();
        
    });
})


/*Editar Elementos*/
const containerEdit = document.querySelector('.Edit');

const btnEdit = document.querySelectorAll('.btnEdit');
btnEdit.forEach((element) => {
    element.addEventListener('click', () =>{

        containerEdit.style.display='flex';
        const pais = element.parentElement.parentElement;     


        const salvar = document.querySelector('.save');

        
        salvar.addEventListener('click', function editor(){

        let editarNome = containerEdit.querySelector('.editNome').value;
        let editarDetalhes = containerEdit.querySelector('.editDetalhes').value;
        let editarQuantidade = containerEdit.querySelector('.editQuantidade').value;

        if (editarNome.length < 2 || editarDetalhes.length < 5 || editarQuantidade == 0) {
            
            alert("Nome deve conter no mínimo 3 caracteres | Detalhes deve conter no mínimo 6 caracteres| Quantidade deve ser no mínimo 1 unidade")

        }else{
            
            pais.children[1].innerHTML = editarNome
            pais.children[2].innerHTML = editarDetalhes;
            pais.children[3].innerHTML = editarQuantidade;

        }   
        });

        const cancelar = document.querySelector('.cancel');
        cancelar.addEventListener('click', () =>{
            containerEdit.style.display='none';
        })

        
        
    })
})




function add() {
    //Aumentar em um meu ID
    let ultimoIdAdicionado = CORPO_TABELA.lastElementChild.firstElementChild.textContent;
    let soma = `${parseInt(ultimoIdAdicionado) + 1}`;

    //Pegar todos os meus elementos novos
    let nome = document.getElementById("Nome").value;
    let Detalhes = document.getElementById("Detalhes").value;
    let Quantidade = document.getElementById("Quantidade").value;
    let botoes = document.getElementById('botoes').innerHTML;

    //
    if (nome.length < 2 || Detalhes.length < 5 || Quantidade == 0) {
        alert("Nome deve conter no mínimo 3 caracteres | Detalhes deve conter no mínimo 6 caracteres| Quantidade deve ser no mínimo 1 unidade");
    } else {
            
        let novaLinha = CORPO_TABELA.insertRow(-1);
        let celulaID = novaLinha.insertCell(0);
        let celulaNome = novaLinha.insertCell(1);
        let celulaDetalhes = novaLinha.insertCell(2);
        let celulaQuantidade = novaLinha.insertCell(3);
        let celulaBotoes = novaLinha.insertCell(4);
    
    
        celulaID.innerHTML = soma;
        celulaNome.innerHTML = nome;
        celulaDetalhes.innerHTML = Detalhes;
        celulaQuantidade.innerHTML = Quantidade;
        celulaBotoes.innerHTML = botoes;
        
    }
        
    
    
    
    /*Por algum motivo que eu não sei, minhas NodeList, de botões Remove e de botões Edit, não está atualizando quando eu crio um novo Elemento, então terei que repetir o código para conseguir excluir e editar meus elementos novos */
    
    /*Remover Elementos */
    const btnRemove = document.querySelectorAll('.btnRemove');
    btnRemove.forEach((element) =>{
        element.addEventListener('click',() =>{
            element.parentElement.parentElement.remove();
            
        });
    })


    /*Editar Elementos*/
    const containerEdit = document.querySelector('.Edit');

    const btnEdit = document.querySelectorAll('.btnEdit');
    btnEdit.forEach((element) => {
        element.addEventListener('click', () =>{

            containerEdit.style.display='flex';
            const pais = element.parentElement.parentElement;     


            const salvar = document.querySelector('.save');

            
            salvar.addEventListener('click', function editor(){

            let editarNome = containerEdit.querySelector('.editNome').value;
            let editarDetalhes = containerEdit.querySelector('.editDetalhes').value;
            let editarQuantidade = containerEdit.querySelector('.editQuantidade').value;

            if (editarNome.length < 2 || editarDetalhes.length < 5 || editarQuantidade == 0) {
                
                alert("Nome deve conter no mínimo 3 caracteres | Detalhes deve conter no mínimo 6 caracteres| Quantidade deve ser no mínimo 1 unidade")

            }else{
                
                pais.children[1].innerHTML = editarNome
                pais.children[2].innerHTML = editarDetalhes;
                pais.children[3].innerHTML = editarQuantidade;

            }   
            });

            const cancelar = document.querySelector('.cancel');
            cancelar.addEventListener('click', () =>{
                containerEdit.style.display='none';
            })

            
            
        })
    })

}





