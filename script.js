adicionar = document.getElementById('btnAdd').addEventListener('click', add) // relaciona btnAdd e atribui click
limpar = document.getElementById('btnLim').addEventListener('click', limpar) // relaciona btnLimpar e atribui click
const ulLi = document.getElementById('ulLis')

function add(){
    const novoLi = document.createElement('li')
    const novoTxt = document.createElement('p')
    let txtTodo = document.getElementById('txtadd').value
    const novoAbbrD = document.createElement('abbr')
    const novoAbbrE = document.createElement('abbr')
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
// deletar e editar, diferentes do function ADD e LIMPAR pois são gerados dinamicamente'
ulLi.addEventListener('click', (e) => {
    // instanciar cada elemento e dizer quem é o seu parent, para depois então remover tudo com o removeChildren da ul
    let button
    let abbr
    let li

    // 2 if's pois o botão em si é composto desses 3 elementos, portanto, isso garante que em qualquer área cliada, ele pegue o target event do elemento correto. PS: poderia ter outro if do ABBR, já que ele contém o button e o span, mas sua área é muita pequena, o que mais ocupa espaço é o BTN e o SPAN, sem o abbr o código fica mais limpo também.

    if(e.target.tagName == 'BUTTON'){
        button = e.target
        if(button.innerHTML == '<span class="material-icons">delete</span>'){
            abbr = button.parentNode
            li = abbr.parentNode
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
    }
    if(e.target.tagName == 'SPAN'){
        let span = e.target
        if(span.textContent == 'delete'){
            button = span.parentNode
            abbr = button.parentNode
            li = abbr.parentNode
            ulLi.removeChild(li)
        }
        else if(span.textContent == 'edit'){
            if(document.getElementById('txtadd').value == 0){
                document.getElementById('txtadd').setAttribute('placeholder', 'Insira o texto aqui!')
            }else{
                li = ulLi.firstElementChild
                p = li.firstElementChild
                // p.innerText = edTxt
                let edTxt = document.getElementById('txtadd').value
                p.innerText = edTxt
                document.getElementById('txtadd').value = ''
                document.getElementById('txtadd').setAttribute('placeholder', 'Adicione uma tarefa') 
            }
        }
    }
})