adicionar = document.getElementById('btnAdd').addEventListener('click', add) // relaciona btnAdd e atribui click
limpar = document.getElementById('btnLim').addEventListener('click', limpar) // relaciona btnLimpar e atribui click
let recDel = []
let pos = 0
const elementoPai = document.getElementById('artLis')

function add(){
    let txtTodo = document.getElementById("txtadd").value
    let novoDiv = document.createElement('div')
    var novoP = document.createElement('p')
    let novoDel = document.createElement('button')
    novoDel.innerHTML = `<abbr title="Remover" id="${pos}"><span id="${pos}" class="material-icons">delete</span></abbr>` // ID de POS para que caso clicado no elemento SPAN ou ABBR o ID seja puxado no DELETAR.
    novoDel.addEventListener('click', deletar) // btn não existe, então em sua criação é atribuido a função
    novoDiv.className = 'list'
    novoDiv.id = pos //

    if (txtTodo == ''){ // condicionar os espaços vazios dps
        window.alert('Digite uma tarefa antes de adicionar.')
    } else{
        elementoPai.appendChild(novoDiv)
        novoP.innerHTML = txtTodo
        novoDiv.appendChild(novoP)
        novoDiv.appendChild(novoDel)
        document.getElementById("txtadd").value = ''
        window.alert('posID: ' + pos)
        pos+=1 // soma a posiçãoID depois de adicionar o objeto, isso permite limpar dps
    }
}

function deletar(e){
    let element = e.target.id // SUBSTITUIR O ID DOS EXISTENTES
    window.alert('Inicial: ' + element)
    if(elementoPai.children.length == 1){ // somente 1 task na lista
        elementoPai.removeChild(elementoPai.children[0]) // Remove a única TASK, que fica na pos[0]
        pos = 0 // p Garantir q foi zerado
    }else{ // mais de 1 task na list
        elementoPai.removeChild(elementoPai.children[element])
        window.alert('eventID: ' + element)
        }
    document.body.style.background = 'blue' // teste func
}

function limpar(){
    if(pos>0){
        while (pos > 0) {
            elementoPai.removeChild(elementoPai.children[0]) // sempre apaga a inicial
            pos-=1
        }
    }else{
        window.alert('Não há nada para remover.')
    }
}

/* 
editar tarefa, pegar pelo ID da tf
function alterar(){
    let txtTodo = document.getElementById("txtadd").value
    id.innerText = txtTodo
    document.getElementById("txtadd").value = ''
 }
*/