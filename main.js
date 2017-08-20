const socket = io('https://videostream02.herokuapp.com/');


let customConfig;

$.ajax({
  url: "https://service.xirsys.com/ice",
  data: {
    ident: "hqdang97",
    secret: "2b5c030e-78c9-11e7-93d4-b416ec176587",
    domain: "hokakede1.github.io",
    application: "default",
    room: "default",
    secure: 1
  },
  success: function (data, status) {
    // data.d is where the iceServers object lives
    customConfig = data.d;
    console.log(customConfig);
  },
  async: false
});


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
  const config = { audio: true, video: true };
  return navigator.mediaDevices.getUserMedia(config);
}

function playStream(idVideoTag, stream) {
  const video = document.getElementById(idVideoTag);
  video.srcObject = stream;
  video.play();
}

openStream()
.then(stream => playStream('localStream', stream) );

// var peer = new Peer({key: 'peerjs', host:'https://mypeer300.herokuapp.com/', secure: true, port: 443 });
const peer = new Peer({
    key: 'peerjs',
    host: 'mypeer300.herokuapp.com',
    secure: true,
    port: 443,
    config: customConfig
});


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
