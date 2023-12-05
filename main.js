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

    const novoItem = $('<li style="display:none" ></li>');

    // Anexar imagem ao novo item da lista
    const novaImagem = $(`<img src="${enderecoDaNovaImagem}" />`);
    console.log('Nova Imagem HTML:', novaImagem[0].outerHTML);
    novaImagem.appendTo(novoItem);

    // Anexar link de sobreposição ao novo item da lista
    const overlayLink = $(
        `<div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>`
    );
    console.log('Overlay Link HTML:', overlayLink[0].outerHTML);
    overlayLink.appendTo(novoItem);

    // Anexe o novo item da lista à lista não ordenada
    console.log('Novo Item HTML:', novoItem[0].outerHTML);
    novoItem.appendTo('ul');
    $(novoItem).fadeIn(1000);
    


    $('#endereco-imagem-nova').val('')
});


