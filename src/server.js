import express from 'express'
import http from 'http'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'
import 'dotenv/config'


const app = express()
const server = http.createServer(app)

app.use(cors())

const PORT = process.env.PORT

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/data', (req, res) => {
    res.json({ success: true })
})

/* End */
server.listen(PORT, () => {
    console.log("Server running at %d port", PORT)
})