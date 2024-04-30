import categoriaModel from "../schemas/categoria.schema"
import { categoriaType } from "../types/categoria.type"

class categoriaService {
    async create(categoria: categoriaType) {
        const createdCategoria = await categoriaModel.create(categoria)
        return createdCategoria
    }

    async findById(id: any) {
        const findedCategoria = await categoriaModel.findById(id)
        return findedCategoria
    }

    async findAll() {
        const findedCategorias = await categoriaModel.find()
        return findedCategorias
    }

    async updateById(id: any, categoria: categoriaType) {
        const updatedCategoria = await categoriaModel.findByIdAndUpdate(id, categoria)
        return updatedCategoria
    }

    async deleteById(id: any) {
        const deletedCategoria = await categoriaModel.findByIdAndDelete(id)
        return deletedCategoria
    }
}

export default new categoriaService()