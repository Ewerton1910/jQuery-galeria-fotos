$(document).ready(function () {
    //O normal
    //console.log(document.querySelector('header button'))
    //Com jQuery o mesmo código para selecionar elementos
    console.log($("header button"));
    //Para adicionar um evento em js seria
    // document.querySelector('header button').addEventListener('click', ()=>{
    //     //Uma função dentro de outra função é chamada e callback, ou seja tudo que está dentro da arrow function é a resposta(callback da função click)

    // })
    //Agora a mesma função com jQuery, esse ponto click seria uma função ou evento de .click
    $("header button").click(function () {
        $("form").slideDown();
    });

    $("#btn-cancelar").click(() => {
        $("form").slideUp();
    });
    //Outra forma é usando o evento .on
    $("form").on("submit", (e) => {
        e.preventDefault();
        //é como se fosse: const enderecoDaNovaImg = document.getElementById('endereco-nova-img').value
        const enderecoDaNovaImg = $("#endereco-nova-img").val();
        const novoItem = $('<li style="display: none" </li>');
        const novaDiv = $('<div class="teste"></div>');
        //Para criar um item dinamicamente no jQuery e para adicionar utilizamos a função appendTo() e dentro dos parenteses onde será inserido no caso(novoItem)
        $(`<img src ="${enderecoDaNovaImg}" />`).appendTo(novaDiv);
        $(`
            <div class = "overlay-image-link">
                <a href="${enderecoDaNovaImg}" target="_blank" title="Ver imagem em tamanho real" > 
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novaDiv);
        novaDiv.appendTo(novoItem);
        //Agora adicionar a li na ul
        $(novoItem).appendTo("ul");
        //usar animação com jQuery na adição da imagem
        $(novoItem).fadeIn();
        //para limpar o input
        $("#endereco-nova-img").val("");
    });
});
