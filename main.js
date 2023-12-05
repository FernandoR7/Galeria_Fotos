$('header button').click(function(){
    $('form').slideDown();
});

$('#Cancelar').click(function() {
    $('form').slideUp();
});

$('form').on('submit', function(e){
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    console.log('Endereco da Nova Imagem:', enderecoDaNovaImagem);

    const novoItem = $('<li></li>');

    // Append image to the new list item
    const novaImagem = $(`<img src="${enderecoDaNovaImagem}" />`);
    console.log('Nova Imagem HTML:', novaImagem[0].outerHTML);
    novaImagem.appendTo(novoItem);

    // Append overlay link to the new list item
    const overlayLink = $(
        `<div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>`
    );
    console.log('Overlay Link HTML:', overlayLink[0].outerHTML);
    overlayLink.appendTo(novoItem);

    // Append the new list item to the unordered list
    console.log('Novo Item HTML:', novoItem[0].outerHTML);
    novoItem.appendTo('ul');
});
