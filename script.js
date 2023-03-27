adicionar = document.getElementById('btnAdd').addEventListener('click', add) // relaciona btnAdd e atribui click
limpar = document.getElementById('btnLim').addEventListener('click', limpar) // relaciona btnLimpar e atribui click
const ulLi = document.getElementById('ulLis')

function add(){
    let novoLi = document.createElement('li')
    var novoTxt = document.createElement('p')
    let txtTodo = document.getElementById('txtadd').value
    let novoAbbrD = document.createElement('abbr')
    let novoAbbrE = document.createElement('abbr')
    novoAbbrD.innerHTML = '<button><span class="material-icons">delete</span></button>'
    novoAbbrE.innerHTML = '<button><span class="material-icons">edit</span></button>'
    novoAbbrD.setAttribute('title', 'Remover')
    novoAbbrE.setAttribute('title', 'Editar')
    novoLi.className = 'list'

    if (txtTodo == 0){ // 0 --> VAZIO, espaço também conta como VAZIO, sacrifica a tarefa "0"
        window.alert('Digite uma tarefa antes de adicionar.')
    } else{
        novoTxt.innerHTML = txtTodo
        novoLi.appendChild(novoTxt)
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
    let li
    let para
    // 3 if's pois o botão em si é composto desses 3 elementos, portanto, isso garante que em qualquer área do botão clicada, ele pegue o target do evento correto

    if(e.target.tagName == 'ABBR'){
        abbr = e.target
        if(abbr.innerHTML == '<button><span class="material-icons">delete</span></button>'){
            li = abbr.parentNode
            ulLi.removeChild(li)
        }else if(abbr.innerHTML == '<button><span class="material-icons">edit</span></button>'){
            if(document.getElementById('txtadd').value == 0){
                document.getElementById('txtadd').setAttribute('placeholder', 'Insira o texto aqui!') 
                window.alert('Insira um texto na caixa antes de editar a tarefa.')
            }else{
                let edTxt = document.getElementById('txtadd').value
                document.getElementById('txtadd').value = ''
                document.getElementById('txtadd').setAttribute('placeholder', 'Adicione uma tarefa')
            }
        }
    }else if(e.target.tagName == 'BUTTON'){
        button = e.target
        if(button.innerHTML == '<span class="material-icons">delete</span>'){
            abbr = button.parentNode
            li =  abbr.parentNode
            ulLi.removeChild(li)
        }
        else if(button.innerHTML == '<span class="material-icons">edit</span>'){
            if(document.getElementById('txtadd').value == 0){
                document.getElementById('txtadd').setAttribute('placeholder', 'Insira o texto aqui!') 
                window.alert('Insira um texto na caixa antes de editar a tarefa.')
            }else {
                let edTxt = document.getElementById('txtadd').value
                document.getElementById('txtadd').value = ''
                document.getElementById('txtadd').setAttribute('placeholder', 'Adicione uma tarefa') 
            }
        }
    }else if(e.target.tagName == 'SPAN'){
        span = e.target
        if(span.textContent == 'delete'){
            button = span.parentNode
            abbr = button.parentNode
            li = abbr.parentNode
            ulLi.removeChild(li)
        }
        else if(span.textContent == 'edit'){
            if(document.getElementById('txtadd').value == 0){
                document.getElementById('txtadd').setAttribute('placeholder', 'Insira o texto aqui!') 
                window.alert('Insira um texto na caixa antes de editar a tarefa.')
            }else{
                para = li.
                let edTxt = document.getElementById('txtadd').value
                document.getElementById('txtadd').value = ''
                document.getElementById('txtadd').setAttribute('placeholder', 'Adicione uma tarefa') 
            }
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