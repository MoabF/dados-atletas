class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria(){
        if(idade >= 9 && idade <= 11){
            return "Infantil"
        }
        else if(idade >= 12 && idade <= 13){
            return "Juvenil"
        }
        else if(idade >= 14 && idade <= 15){
            return "Intermediário"
        }
        else if(idade >= 16 && idade <= 30){
            return "Adulto"
        }
        else{
            return "Sem categoria"
        }
    }
    calculaIMC(){}
    calculaMediaValida(){}
    obtemNomeAtleta(){}
    obtemIdadeAtleta(){}
    obtemPesoAtleta(){}
    obtemNotasAtleta(){}
    obtemCategoria(){}
    obtemIMC(){}
    obtemMediaValida(){}
}
