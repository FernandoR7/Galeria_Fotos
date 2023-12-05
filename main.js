$('header button').click(function(){
    $('form').slideDown();
});

$('#Cancelar').click(function() {
    $('form').slideUp();
});

$('form').on('submit', function(e){
    console.log("submit");
    e.preventDefault();
});
