adicionar = document.getElementById('btnAdd').addEventListener('click', add) // relaciona btnAdd e atribui click
limpar = document.getElementById('btnLim').addEventListener('click', limpar) // relaciona btnLimpar e atribui click
let ulLi = document.getElementById('ulLis')

function add(){
    let txtTodo = document.getElementById("txtadd").value
    let novoLi = document.createElement('li')
    var novoP = document.createElement('p')
    let novoAbbr = document.createElement('abbr')
    novoAbbr.setAttribute('title' , 'Remover')
    novoLi.className = 'list'
    novoP.className = 'para'
    novoAbbr.innerHTML = `<button><span class="material-icons">delete</span></button>` // ID de POS para que caso clicado no elemento SPAN ou ABBR o ID seja puxado no DELETAR.
    if (txtTodo == 0){ // 0 --> VAZIO, espaço também conta como VAZIO, sacrifica a tarefa "0"
        window.alert('Digite uma tarefa antes de adicionar.')
    } else{
        novoP.innerHTML = `${txtTodo}`
        novoLi.appendChild(novoP)
        novoLi.appendChild(novoAbbr)
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