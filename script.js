$('form').submit(function (e){
    e.preventDefault();

    const tarefa = $('#nome-tarefa').val();
    const novaTarefa = $(`<li>${tarefa}</li>`);

    $(novaTarefa).appendTo('ul');

    $('#nome-tarefa').val('');
});

$('ul').on('click', 'li', function(){
    $('li').css('text-decoration' , 'line-through');
});
