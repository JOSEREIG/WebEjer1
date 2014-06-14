var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();


function mostrarFormulario()
{
	$form.slideToggle();
	$list.slideToggle();

	return false;
} 

function agregarPost()
{
	var url = $url.val(),
		titulo = $titulo.val(),
		clone = $post.clone();

	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	clone.hide();
	$list.prepend(clone);
	// $clone.fadeIn();
	mostrarFormulario();

	clone.slideDown();

	return false;
}


// Eventos

$button.click( mostrarFormulario );
$form.on('submit', agregarPost );