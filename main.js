const form = document.getElementById("form-contato");

let linhas = '';
let nomes = [];
let numeros = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    adicionaLinha();
    atualizaTabela();



})

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function adicionaLinha() {
    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");

    let converteTelefone = Number(telefone.value);

    if (telefone.value.length < 9) {
        alert(`Contato deve conter no minimo 9 caracteres, inclua ${9 - telefone.value.length} numeros `);
        telefone.focus();
    } else if (Number.isNaN(converteTelefone)) {
        alert("Seu contato precisa incluir apenas números")
        telefone.focus();
    } else if (nomes.includes(nome.value)) {
        alert(`O nome ${nome.value} já está registrado na em sua agenda`);
        nome.value = '';
        nome.focus();
    } else {
        nomes.push(nome.value);
        numeros.push(telefone.value)

        let linha = "<tr>";
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${telefone.value}</td>`;
        linha += "</tr>"

        linhas += linha;
        estiloNovoContato();

        nome.value = '';
        telefone.value = '';
    }

}

function estiloNovoContato() {
    setTimeout(function () {
        document.querySelector("tbody").classList.add("novo-contato");
    }, 100)
    setTimeout(function () {
        document.querySelector("tbody").classList.remove("novo-contato");
    }, 2000)
}