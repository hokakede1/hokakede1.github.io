const socket = io('https://videostream02.herokuapp.com/');
socket.on('OnlinePeople', arrUserInfo => {
  arrUserInfo.forEach(user => {
    const {username, peerId} = user;
    $('#ulUser').append(`<li id='${peerId}'>${username}</li>`)
  })

  socket.on('newUserSignUp', user => {
    const {username, peerId} = user;
    $('#ulUser').append(`<li id='${peerId}'>${username}</li>`)
  });

  socket.on('SomeoneDisconnected', peerId => {
    $(`#${peerId}`).remove();
  });
})






function openStream() {
  const config = { audio: false, video: true };
  return navigator.mediaDevices.getUserMedia(config);
}

function playStream(idVideoTag, stream) {
  const video = document.getElementById(idVideoTag);
  video.srcObject = stream;
  video.play();
}

openStream()
.then(stream => playStream('localStream', stream) );

var peer = new Peer({key: '0j24mz34djgojemi'});

peer.on('open', id => {

  $('#my-peer').append(id)
  $('#btnSignUp').click(() => {
    const username = $('#txtUsername').val();
    socket.emit('UserSignUp', {username: username, peerId: id})
  })

});

//Caller

$('#btnCall').click(() => {
  const id = $('#remoteId').val();
  openStream()
  .then(stream => {
    playStream('localStream', stream);
    const call = peer.call(id, stream);
    call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
  });
});

//answer

peer.on('call', call => {
  openStream()
  .then(stream => {
    call.answer(stream);
    playStream('localStream', stream);
    call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
  });
});

$('#ulUser').on('click', 'li', function(){
  const id = ($(this).attr('id'));
  openStream()
  .then(stream => {
    playStream('localStream', stream);
    const call = peer.call(id, stream);
    call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
  });
});
