import { any } from "webidl-conversions"
import usuarioModel from "../schemas/usuario.schema"
import { usuarioType } from "../types/usuario.type"
import usuarioSchema from "../schemas/usuario.schema"

class usuarioService {
    async create(usuario: usuarioType) {
        const createdUsuario = await usuarioModel.create(usuario)
        return createdUsuario
    }

    async findById(id: any) {
        const findedUsuario = await usuarioModel.findById(id)
        return findedUsuario
    }

    async findAll() {
        const findedUsuarios = await usuarioModel.find()
        return findedUsuarios
    }

    async updateById(id: any, usuario: usuarioType) {
        const updatedUsuario = await usuarioModel.findByIdAndUpdate(id, usuario)
        return updatedUsuario
    }

    async deleteById(id: any) {
        const deletedUsuario = await usuarioModel.findByIdAndDelete(id)
        return deletedUsuario
    }

    async loginUsuario(usuario: usuarioType) {
        const findedUsuarios = await usuarioModel.find()
        findedUsuarios.forEach(element => {
            if (element.username?.includes(usuario.username.toString()) &&
                element.senha?.toString().includes(usuario.senha.toString())) {
                const usuario = element
                return usuario
            }
        });
        return null
    }

    async registerUsuario(usuario: usuarioType) {
        const novoUsuario = new usuarioModel()
        novoUsuario.username = usuario.username.toString()
        novoUsuario.senha = usuario.senha.valueOf()
        return novoUsuario
    }
}

export default new usuarioService()