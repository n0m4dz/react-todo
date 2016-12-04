/**
 * Created by n0m4dz on 11/24/16.
 */
import io from 'socket.io-client'

$(function () {
    let socket = io('localhost:3000');
    $('#chatFrm').submit(function(e){
        e.preventDefault()
        let msg = $('#chatBox').val();
        socket.emit('send', {msg: msg})
        $('#chatBox').val('');
    })

    socket.on('received', function(data){
        let msg = '<li>'+ data.msg +'</li>'
        $('#msgList').append(msg)
    })
})
