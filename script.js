$(document).ready(function () {
    $('.submit').on('click', function () {
        let Message = $('#message').val();
        if (Message.trim() !== '') {
            let newMessage = $('<div class="col-4 offset-4 rounded mb-3">' + Message + '</div>');
            let youtubeLink = Message.match(/(http(s)?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)(&\S*)?/);
            if (youtubeLink) {
                let videoId = youtubeLink[5];
                let iframe = $('<iframe></iframe>', {
                    src: 'https://www.youtube.com/embed/' + videoId,
                    width: '100%',
                    height: 315,
                    frameborder: 0,
                    allowfullscreen: true
                });
                newMessage.append(iframe);
            }
            $('.messages').append(newMessage);
        }

    });

});


