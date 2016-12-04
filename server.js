import express from 'express';
import socket from 'socket.io'

const app = new express();
const http = require('http').Server(app);
const io = new socket(http);

import config from './config/app';
import middlewares from './core/middlewares';

middlewares(app, config.env);

app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    var data = {
        users: [
            {
                name: 'bat'
            },
            {
                name: 'dorj'
            }
        ],
        pageTitle: 'IT IS HOME PAGE'
    };
    res.render('todo', {data: data})
})

app.get('/chat', function (req, res) {
    res.render('chat')
})

io.on('connection', function (socket) {
    console.log('HTTP client is connected')
    socket.on('send', function (data) {
        console.log(data);
        io.emit('received', data)
    })

    socket.on('disconnect', function () {
        console.log('Client disconnected');
    })
})


http.listen(3000, function () {
    console.log('React App is running on port 3000!')
})
