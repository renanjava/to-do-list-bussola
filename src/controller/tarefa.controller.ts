import { Request, Response } from "express";
import tarefaService from "../service/tarefa.service";
import tarefaSchema from "../schemas/tarefa.schema";
import { tarefaType } from "../types/tarefa.type";
import tarefaModel from "../model/tarefa.model";

class tarefaController {
    async create(req: Request, res: Response) {
        const createdTarefa = await tarefaService.create(req.body)
        res.status(201)
        return res.json(createdTarefa)
    }

    async findById(req: Request, res: Response) {
        const findedTarefa = await tarefaService.findById(req.params.id)
        res.status(200)
        return res.json(findedTarefa)
    }

    async findAll(req: Request, res: Response) {
        const findedTarefas = await tarefaService.findAll()
        res.status(200)
        return res.json(findedTarefas)
    }

    async updateById(req: Request, res: Response) {
        const updatedTarefa = await tarefaService.updateById(req.params.id, req.body)
        res.status(200)
        return res.json(updatedTarefa)
    }

    async deleteById(req: Request, res: Response) {
        const deletedTarefa = await tarefaService.deleteById(req.params.id)
        res.status(200)
        return res.json(deletedTarefa)
    }

    async findByCategoria(req: Request, res: Response) {
        const findedTarefas = (await tarefaService.findAll()).filter((e) => {
            return e.categoria?.includes(req.params.categoria)
        })
        res.status(200)
        return res.json(findedTarefas)
    }

    async findTarefasPendentes(req: Request, res: Response) {
        const findedTarefas = (await tarefaService.findAll()).filter((e) => {
            return e.status?.includes("pendente")
        })
        res.status(200)
        return res.json(findedTarefas)
    }

    async findTarefasConcluidas(req: Request, res: Response) {
        const findedTarefas = (await tarefaService.findAll()).filter((e) => {
            return e.status?.includes("concluida")
        })
        res.status(200)
        return res.json(findedTarefas)
    }

    async findTarefasVencidas(req: Request, res: Response) {
        const findedTarefas = (await tarefaService.findAll()).filter((e) => {
            return e.status?.includes("vencida")
        })
        res.status(200)
        return res.json(findedTarefas)
    }

    async getMediaConclusao(req: Request, res: Response) {
        const findedTarefas = await tarefaService.findAll()
        const quantidadeConcluida = new Number(findedTarefas.filter((e) => {
            if (e.status?.includes("concluida"))
                return 1
        }))
        const mediaConclusao = quantidadeConcluida.valueOf() / Object.values(findedTarefas).length
        res.status(200)
        return res.json(mediaConclusao)
    }

    async findTamanhoDescricao(req: Request, res: Response) {


    }

    async groupByCategoria(req: Request, res: Response) {


    }

    async findTarefaAntigaByUsuario(req: Request, res: Response) {


    }

}

export default new tarefaController()