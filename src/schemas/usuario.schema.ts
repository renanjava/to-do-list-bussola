import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const usuarioSchema = new Schema({
    id: Number,
    username: String,
    peso: Number,
    senha: Number,
    email: String
}, {
    timestamps: true
}

);

export default model("Usuario", usuarioSchema)