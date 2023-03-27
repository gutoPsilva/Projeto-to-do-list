adicionar = document.getElementById('btnAdd').addEventListener('click', add) // relaciona btnAdd a função add
limpar = document.getElementById('btnLim').addEventListener('click', limpar) // relaciona btnLim a função limpar
const ulLi = document.getElementById('ulLis') // elemento pai da lista

// functions fixas pois são botões que já existem
function add(){
    let txtTodo = document.getElementById('txtadd').value
    const novoLi = document.createElement('li')
    const novoTxt = document.createElement('p')
    const novoAbbrD = document.createElement('abbr') // botão deletar
    const novoAbbrE = document.createElement('abbr') // botão editar
    novoAbbrD.innerHTML = '<button><span class="material-icons">delete</span></button>'
    novoAbbrE.innerHTML = '<button><span class="material-icons">edit</span></button>'
    novoAbbrD.setAttribute('title', 'Remover')
    novoAbbrE.setAttribute('title', 'Editar')
    novoLi.className = 'list'

    if (txtTodo == 0){ // 0 --> VAZIO, espaço também conta como VAZIO, sacrifica a tarefa "0"
        window.alert('Digite uma tarefa antes de adicionar.')
    } else{
        novoTxt.innerText = txtTodo
        novoLi.appendChild(novoTxt)
        novoLi.appendChild(novoAbbrD)
        novoLi.appendChild(novoAbbrE)
        ulLi.appendChild(novoLi)
        document.getElementById("txtadd").value = ''
        document.getElementById('txtadd').setAttribute('placeholder', 'Adicione uma tarefa')
    }
}

function limpar(){
    if(ulLi.children.length>0){
        while (ulLi.children.length > 0) {
            ulLi.removeChild(ulLi.children[0]) // sempre apaga a inicial
        }
    }else{
        window.alert('Não há nada para remover.')
    }
}

// deletar e editar, diferentes do function ADD e LIMPAR pois são gerados dinamicamente
ulLi.addEventListener('click', (e) => {

    // 2 if's pois o botão em si é composto desses 3 elementos, portanto, isso garante que em qualquer área cliada, ele pegue o target event do elemento correto. PS: poderia ter outro if do ABBR, já que ele contém o button e o span, mas sua área é muita pequena, o que mais ocupa espaço é o BTN e o SPAN, sem o abbr o código fica mais limpo também.

    if(e.target.tagName == 'BUTTON'){
        // instanciar cada elemento e dizer quem é o seu parent para saber quem é quem
        const button = e.target
        const abbr = button.parentNode
        const li = abbr.parentNode

        if(button.innerHTML == '<span class="material-icons">delete</span>'){
            ulLi.removeChild(li)
        }
        else if(button.innerHTML == '<span class="material-icons">edit</span>'){
            if(document.getElementById('txtadd').value == 0){
                document.getElementById('txtadd').setAttribute('placeholder', 'Insira o texto aqui!') 
            }else {
                const p = li.firstElementChild
                p.innerText = document.getElementById('txtadd').value
                document.getElementById('txtadd').value = ''
                document.getElementById('txtadd').setAttribute('placeholder', 'Adicione uma tarefa') 
            }
        }
    }

    if(e.target.tagName == 'SPAN'){
        // instanciar cada elemento e dizer quem é o seu parent para saber quem é quem
        const span = e.target    
        const button = span.parentNode
        const abbr = button.parentNode
        const li = abbr.parentNode

        if(span.textContent == 'delete'){
            ulLi.removeChild(li)
        }
        else if(span.textContent == 'edit'){
            if(document.getElementById('txtadd').value == 0){
                document.getElementById('txtadd').setAttribute('placeholder', 'Insira o texto aqui!')
            }else{
                const p = li.firstElementChild
                p.innerText = document.getElementById('txtadd').value
                document.getElementById('txtadd').value = ''
                document.getElementById('txtadd').setAttribute('placeholder', 'Adicione uma tarefa') 
            }
        }
    }
})