adicionar = document.getElementById('btnAdd')
adicionar.addEventListener('click', add)

function add(){
    let saida = document.getElementById('todaLis')
    let txtTodo = document.getElementById("txtadd").value
    let p1 = document.getElementById('tf1')
    if (txtTodo == ''){ // incrementar condicões c espaço dps
        window.alert('Digite uma tarefa antes de adicionar.')
    } else{
        p1.innerText = txtTodo // teste dp substituir
        // saida.appendChild()
        document.getElementById("txtadd").value = '' // clear
    }
    document.body.style.background = 'red' // teste func
}

function deletar(){
    document.body.style.background = 'blue' // teste func
}

/* 
editar tarefa, pegar pelo ID da tf
function alterar(){
    let txtTodo = document.getElementById("txtadd").value
    id.innerText = txtTodo
    document.getElementById("txtadd").value = ''
 }
*/