/**
 * Created by n0m4dz on 11/24/16.
 */
import $ from 'jquery'
import io from 'socket.io-client'

$(function () {
    var socket = io('localhost:3000');
    $('#chatFrm').submit(function(e){
        e.preventDefault()
        var msg = $('#chatBox').val();
        socket.emit('send', {msg: msg})
        $('#chatBox').val('');
    })

    socket.on('received', function(data){
        var msg = '<li>'+ data.msg +'</li>'
        $('#msgList').append(msg)
    })
})
