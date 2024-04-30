import { tarefaType } from "types/tarefa.type";

class Tarefa {
    id: Number | undefined;
    titulo: String | undefined;
    descricao: String | undefined;
    dataCriacao: String | undefined;
    dataConclusao: String | undefined;
    tipo: String | undefined;
    categoria: String | undefined;
    status: String | undefined;
    usuarioAssociado: String | undefined;

    constructor() {
        this.dataCriacao = new String(new Date().toLocaleDateString('pt-BR') + " - " + new Date().toLocaleTimeString('pt-BR'))
        this.dataConclusao = new String("N/A")
    }
}

export default new Tarefa();