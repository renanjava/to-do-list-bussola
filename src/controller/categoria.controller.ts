import { Request, Response } from "express";
import categoriaService from "../service/categoria.service";
import categoriaSchema from "../schemas/categoria.schema";

class categoriaController {
    async create(req: Request, res: Response) {
        const createdCategoria = await categoriaService.create(req.body)
        res.status(201)
        return res.json(createdCategoria)
    }

    async findById(req: Request, res: Response) {
        const findedCategoria = await categoriaService.findById(req.params.id)
        res.status(200)
        return res.json(findedCategoria)
    }

    async findAll(req: Request, res: Response) {
        const findedCategorias = await categoriaService.findAll()
        res.status(200)
        return res.json(findedCategorias)
    }

    async updateById(req: Request, res: Response) {
        const updatedCategoria = await categoriaService.updateById(req.params.id, req.body)
        res.status(200)
        return res.json(updatedCategoria)
    }

    async deleteById(req: Request, res: Response) {
        const deletedCategoria = await categoriaService.deleteById(req.params.id)
        res.status(200)
        return res.json(deletedCategoria)
    }

}

export default new categoriaController()