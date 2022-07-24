var pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "Desenvolvedora"
};
pessoa.idade = 34;
var andre = {
    nome: "André",
    idade: 25,
    profissão: "Pintor"
};
var trabalho;
(function (trabalho) {
    trabalho[trabalho["Professora"] = 0] = "Professora";
    trabalho[trabalho["Desenvolvedora"] = 1] = "Desenvolvedora";
    trabalho[trabalho["Atriz"] = 2] = "Atriz";
    trabalho[trabalho["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(trabalho || (trabalho = {}));
var Vanessa = {
    nome: "Vanessa",
    idade: 24,
    profissao: trabalho.Desenvolvedora
};
var Jessica = {
    nome: "Jessica",
    idade: 21,
    materias: ["Matemática discreta", "Programação",]
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log("-", item);
    }
}
listar(Jessica.materias);
