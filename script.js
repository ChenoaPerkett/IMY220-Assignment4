//Chenoa Perkett u19109572
$(document).ready(() => {
    $('.submit').on('click', () => {
        const message = $('#message').val();
        if (message.trim() !== '') {
            const newMessage = $('<div class="col-4 offset-4 rounded mb-3">' + message + '</div>');
            const youtubeLinks = message.match(/(http(s)?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)(&\S*)?/g);
            if (youtubeLinks !== null) {
                youtubeLinks.forEach((youtubeLink) => {
                    const videoId = youtubeLink.match(/(http(s)?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)(&\S*)?/)[5];
                    const iframe = $('<iframe></iframe>', {
                        src: `https://www.youtube.com/embed/${videoId}`,
                        width: '100%',
                        height: 315,
                        frameborder: 0,
                        allowfullscreen: true
                    });
                    newMessage.append(iframe);
                });
            }
            $('.messages').append(newMessage);
        }
    });
});

