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
        const NewItem = $('<li></li>');
        $(`<img src="${newImageLink}" />`).appendto(NewItem);
        $(`<div class="overlay-image-link"> <a href="${newImageLink}" target="_blank" title="ver imagen en tamanho real" </a> </div>`).appendto(NewItem);
        $(NewItem).appendto('ul');
    })
})