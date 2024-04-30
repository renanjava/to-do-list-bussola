class Categoria {
    id: Number | undefined;
    nome: String | undefined;
    cor: String | undefined;

    constructor(id: number, nome: string, cor: string) {
        this.id = id;
        this.nome = nome;
        this.cor = cor;
    }
}