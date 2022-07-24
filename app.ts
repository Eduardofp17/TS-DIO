const pessoa= {
    nome:"Mariana",
    idade: 28,
    profissao: "Desenvolvedora"
};

pessoa.idade = 34;

const andre: {nome:string, idade:number, profissão:string}= {
    nome:"André",
    idade: 25,
    profissão:"Pintor"
}

enum trabalho{
    Professora,
    Desenvolvedora,
    Atriz,
    JogadoraDeFutebol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: trabalho
}

const Vanessa: Pessoa = {
    nome: "Vanessa",
    idade:24,
    profissao:trabalho.Desenvolvedora
}

interface Estudante extends Pessoa{
    materias: string[]
}

const Jessica: Estudante ={
    nome:"Jessica",
    idade:21,
    materias: ["Matemática discreta", "Programação",]
};

function listar(lista:string[]){
    for(const item of lista){
        console.log("-", item)
    }
}

listar(Jessica.materias)