import { Router } from 'express'
import tarefaController from './controller/tarefa.controller'
import categoriaController from './controller/categoria.controller'
import usuarioController from './controller/usuario.controller'

const routes = Router()
routes.post('/tarefas', tarefaController.create)
routes.get('/tarefas/:id', tarefaController.findById)
routes.get('/tarefas', tarefaController.findAll)
routes.put('/tarefas/:id', tarefaController.updateById)
routes.delete('/tarefas/:id', tarefaController.deleteById)

routes.post('/usuarios', usuarioController.create)
routes.get('/usuarios/:id', usuarioController.findById)
routes.get('/usuarios', usuarioController.findAll)
routes.put('/usuarios/:id', usuarioController.updateById)
routes.delete('/usuarios/:id', usuarioController.deleteById)

routes.post('/categorias', categoriaController.create)
routes.get('/categorias/:id', categoriaController.findById)
routes.get('/categorias', categoriaController.findAll)
routes.put('/categorias/:id', categoriaController.updateById)
routes.delete('/categorias/:id', categoriaController.deleteById)

routes.post('/register', usuarioController.register)
routes.get('/login', usuarioController.login)

routes.get('/tarefas_categoria/:categoria', tarefaController.findByCategoria)
routes.get('/tarefas_pendentes', tarefaController.findTarefasPendentes)
routes.get('/tarefas_concluidas', tarefaController.findTarefasConcluidas)
routes.get('/tarefas_vencidas', tarefaController.findTarefasVencidas)
routes.get('/tarefas_mediaconclusao', tarefaController.getMediaConclusao)
routes.get('/tarefas_tamanhodescricao', tarefaController.findTamanhoDescricao)
routes.get('/tarefas_agruparcategoria/:categoria', tarefaController.groupByCategoria)
routes.get('/tarefas_tarefaantiga/:id', tarefaController.findTarefaAntigaByUsuario)

export {
    routes
}