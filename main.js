$(document).ready(function(){
    $('header button').click(function(){
        alert('expand form');
    })

    $('form').on('submit', function(e) {
        console.log("submit");
        e.preventDefault();
    })
})