import { Request, Response } from "express";
import usuarioService from "../service/usuario.service";
import usuarioSchema from "../schemas/usuario.schema";

class usuarioController {
    async create(req: Request, res: Response) {
        const createdUsuario = await usuarioService.create(req.body)
        res.status(201)
        return res.json(createdUsuario)
    }

    async findById(req: Request, res: Response) {
        const findedUsuario = await usuarioService.findById(req.params.id)
        res.status(200)
        return res.json(findedUsuario)
    }

    async findAll(req: Request, res: Response) {
        const findedUsuarios = await usuarioService.findAll()
        res.status(200)
        return res.json(findedUsuarios)
    }

    async updateById(req: Request, res: Response) {
        const updatedUsuario = await usuarioService.updateById(req.params.id, req.body)
        res.status(200)
        return res.json(updatedUsuario)
    }

    async deleteById(req: Request, res: Response) {
        const deletedUsuario = await usuarioService.deleteById(req.params.id)
        res.status(200)
        return res.json(deletedUsuario)
    }

    async login(req: Request, res: Response) {
        const usuarioLogado = await usuarioService.loginUsuario(req.body)
        res.status(200)
        return res.json(usuarioLogado)
    }

    async register(req: Request, res: Response) {
        const usuarioNovo = await usuarioService.registerUsuario(req.body)
        res.status(201)
        return res.json(usuarioNovo)
    }

}

export default new usuarioController()