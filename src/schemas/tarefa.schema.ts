import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const tarefaSchema = new Schema({
    id: { type: Number, required: true },
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    dataCriacao: { type: String, required: false },
    dataConclusao: { type: String, required: false },
    tipo: { type: String, required: true },
    categoria: { type: String, required: true },
    status: {
        type: String,
        enum: ["pendente", "concluida", "vencida"],
        required: true
    },
    usuarioAssociado: String
}, {
    timestamps: true
}

);

export default model("Tarefa", tarefaSchema)