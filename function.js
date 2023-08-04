$(function(){

	verificarClickFechar();
	abrirJanela();

	function abrirJanela(){
		$('.btn').click(function(e){
			e.stopPropagation();
			$('.bg').fadeIn();	
		}); 
	}

	function verificarClickFechar(){
		var elementos = $('body, .close');

		elementos.click(function(){
			$('.bg').fadeOut();
		});

		$('.form').click(function(e){
			e.stopPropagation();
		});
	}

	$('form#formulario').submit(function(e){
		e.preventDefault();
		var nomeUsuario = $('input[name=nome]').val();
		var telefoneUsuario = $('input[name=telefone]').val();
		var emailUsuario = $('input[name=email]').val();

		// contando a quantidade de espaços e os respectivos valores.
		var quantidadeEspacos = nomeUsuario.split(' ').length;
		var partesNome = nomeUsuario.split(' ');

		if(quantidadeEspacos >= 2){
			for(var i = 0; i < quantidadeEspacos; i++){
				if(partesNome[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
					// Nome válido
				}else{
					aplicarCampoInvalido($('input[name=nome]'));
					return false;
				}
			}
		}else{
			aplicarCampoInvalido($('input[name=nome]'));
		}

		return false;
		// se chegou até o final é porque está tudo ok!

	});

	function aplicarCampoInvalido(el){
		el.css('border', '2px solid red');
		el.data('invalido', 'true');
		el.val('Campo Inválido');
	}

});
