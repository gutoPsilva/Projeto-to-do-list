adicionar = document.getElementById('btnAdd').addEventListener('click', add) // relaciona btnAdd e atribui click
limpar = document.getElementById('btnLim').addEventListener('click', limpar) // relaciona btnLimpar e atribui click
let ulLi = document.getElementById('ulLis')

function add(){
    let txtTodo = document.getElementById("txtadd").value
    let novoLi = document.createElement('li')
    var novoP = document.createElement('p')
    let novoAbbrD = document.createElement('abbr')
    let novoAbbrE = document.createElement('abbr')
    novoAbbrD.setAttribute('title', 'Remover')
    novoAbbrE.setAttribute('title', 'Editar')
    novoAbbrD.innerHTML = '<button><span class="material-icons">delete</span></button>'
    novoAbbrE.innerHTML = '<button><span class="material-icons">edit</span></button>'
    novoLi.className = 'list'
    novoP.className = 'para'
    if (txtTodo == 0){ // 0 --> VAZIO, espaço também conta como VAZIO, sacrifica a tarefa "0"
        window.alert('Digite uma tarefa antes de adicionar.')
    } else{
        novoP.innerHTML = `${txtTodo}`
        novoLi.appendChild(novoP)
        novoLi.appendChild(novoAbbrD)
        novoLi.appendChild(novoAbbrE)
        ulLi.appendChild(novoLi)
        document.getElementById("txtadd").value = ''
    }
}

ulLi.addEventListener('click', (e) => {
    // instanciar cada elemento e dizer quem é o seu parent, para remover tudo com o removeChildren
    let abbr 
    let button 
    let span
    // 3 if's pois o botão em si é composto desses 3 elementos, portanto, isso garante que em qualquer área do botão clicada, ele pegue o target do evento correto
    if(e.target.tagName == 'ABBR'){
        abbr = e.target
        let li = abbr.parentNode
        if(abbr.innerHTML == '<button><span class="material-icons">delete</span></button>'){
            ulLi.removeChild(li)
        }
    }else if(e.target.tagName == 'BUTTON'){
        button = e.target
        abbr = button.parentNode
        let li =  abbr.parentNode
        if(button.innerHTML == '<span class="material-icons">delete</span>'){
            ulLi.removeChild(li)
        }
    }else if(e.target.tagName == 'SPAN'){
        span = e.target
        button = span.parentNode
        abbr = button.parentNode
        let li = abbr.parentNode
        if(span.textContent == 'delete'){
            ulLi.removeChild(li)
        }
    }
})

function limpar(){
    if(ulLi.children.length>0){
        while (ulLi.children.length > 0) {
            ulLi.removeChild(ulLi.children[0]) // sempre apaga a inicial
        }
    }else{
        window.alert('Não há nada para remover.')
    }
}

function msg(){
    window.alert('Ainda existem alguns bugs nesse projeto, a tarefa adicionada pode passar da seção e o editar ainda não funciona.')
    window.alert('Posteriormente ajustarei esses erros, mas peço que entenda que fiz o meu melhor por agora!')
}

/* 
editar tarefa, pegar pelo ID da tf
function alterar(){
    let txtTodo = document.getElementById("txtadd").value
    id.innerText = txtTodo
    document.getElementById("txtadd").value = ''
 }

  while (ulLi.children.length > element) {
                    ulLi.removeChild(ulLi.children[element]) // sempre apaga a inicial
                }
*/