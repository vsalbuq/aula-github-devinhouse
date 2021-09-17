const lista = document.querySelector('ul');
const input = document.querySelector('input');
const botao = document.querySelector('button');

const tarefas = [];

function exibirTarefas() {
  lista.innerHTML = '';

  for (tarefa of tarefas) {
    const Tarefa = document.createElement('li');
    const txtTarefa = document.createTextNode(tarefa);

    const link = document.createElement('a');
    const pos = tarefas.indexOf(tarefa);

    /* ====== Tentativa de incluir checkbox ======
    const input = document.createElement('input');
    input.type = 'checkbox';
    selec.appendChild(input); */

    /*-- <input type="checkbox" /> */

    const linkText = document.createTextNode('   ' + 'X');

    link.appendChild(linkText);

    link.setAttribute('href', '#');
    link.setAttribute('onclick', `excluirTarefa(${pos})`);

    Tarefa.appendChild(txtTarefa);
    lista.appendChild(Tarefa);
    Tarefa.appendChild(link);
    /*Tarefa.appendChild(checkbox);*/
  }
}
exibirTarefas();

function addTarefa() {
  const txtTarefa = input.value;
  tarefas.push(txtTarefa);
  input.value = '';

  exibirTarefas();
}

botao.setAttribute('onclick', 'addTarefa()');

function excluirTarefa(pos) {
  tarefas.splice(pos, 1);
  exibirTarefas();
}
