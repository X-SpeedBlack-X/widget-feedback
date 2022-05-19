import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()

app.use(
  cors(/* {
    origin: 'localhost:3000'
  } */)
)
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('HTTP server running')
})

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de um entidade
// PATCH = Atualizar uma informação de uma única entidade
// DELETE = Deletar uma informação
