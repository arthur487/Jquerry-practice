$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })
    

    $('#cancel-button').click(function() {
        $('form').slideUp();
    }) 

    

    $('form').on('submit', function(e) {
        e.preventDefault();
        const newImageLink = $('#link-new-image').val();
        const NewItem = $('<li style="display: none"></li>');
        $(`<img src="${newImageLink}" />`).appendTo(NewItem);
        $(`<div class="overlay-image-link"> <a href="${newImageLink}" target="_blank" title="ver imagen en tamanho real"> ver imagem en tamanho real </a> </div>`).appendTo(NewItem);
        $(NewItem).appendTo('ul');
        $(NewItem).fadeIn();
        $('#link-new-image').val('');
    })
})