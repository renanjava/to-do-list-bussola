import tarefaModel from "../schemas/tarefa.schema"
import { tarefaType } from "../types/tarefa.type"

class tarefaService {
    async create(tarefa: tarefaType) {
        const createdTarefa = await tarefaModel.create(tarefa)
        return createdTarefa
    }

    async findById(id: any) {
        const findedTarefa = await tarefaModel.findById(id)
        return findedTarefa
    }

    async findAll() {
        const findedTarefas = await tarefaModel.find()
        return findedTarefas
    }

    async updateById(id: any, tarefa: tarefaType) {
        const updatedTarefa = await tarefaModel.findByIdAndUpdate(id, tarefa)
        return updatedTarefa
    }

    async deleteById(id: any) {
        const deletedTarefa = await tarefaModel.findByIdAndDelete(id)
        return deletedTarefa
    }
}

export default new tarefaService()