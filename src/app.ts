import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors())

app.get('/home', (req, res) => {
  res.send('ok')
})

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000')
})