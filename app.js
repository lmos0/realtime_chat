const express = require('express')

const app = express()
const dotenv = require('dotenv').config()


const PORT = process.env.PORT || 3500
const server = app.listen(PORT, () => console.log(`rodando em ${PORT}`))

const io = require('socket.io')(server)


app.use(express.static('public'))

io.on('connection',(socket)=> {
    console.log(socket.id)
} )