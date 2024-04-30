import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categoriaSchema = new Schema({
    id: Number,
    nome: String,
    cor: String
}, {
    timestamps: true
}

);

export default model("Categoria", categoriaSchema)