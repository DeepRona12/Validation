$(function(){
	/*
	var frase = 'lucas@hotmail.com';

	var verifica = frase.match(/^(.*?)(@)(.*?)$/);


	if(verifica != null){
		console.log("encontramos algo ");
		console.log(verifica[1]);
		console.log(verifica[2]);
		console.log(verifica[3]);
	}else{
		console.log("nao encontramos nada");
	}
	*/

	verificarClickfechar();
	abrirJanela();

	function abrirJanela(){
		 $('.btn').click(function(e){
		 	e.stopPropagation();
			$('.bg').fadeIn();	
	 }); 
	}
	function verificarClickfechar(){
		
		var el = $('body,.close');

		el.click(function(){

			$('.bg').fadeOut();
		});
			$('.form').click(function(e){
				e.stopPropagation();
			});
	}


	$('form#form1').submit(function(e){
		e.preventDefault();
		var nome = $('input[name=nome]').val();
		var telefone = $('input[name=telefone]').val();
		var email = $('input[name=email]').val();

		// contando a quantidade de espaços e os respectivos valores.
		var amount = nome.split(' ').length;
		var splitStr = nome.split(' ')	
		
		if(amount >= 2){
			for(var i = 0; i < amount; i++){
				if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
					
				}else{
					aplicarCampoInvalido($('input[name=nome]'));
					return false;
				}
			}
		}else{
			aplicarCampoInvalido($('input[name=nome]'));
		}

		return false;
		// se chegou ate o final e por que esta tudo okay!

	})

	function  aplicarCampoInvalido (el){
		el.css('border','2px solid red');
		el.data('Invalido','true');
		el.val('Campo Invalido');
	}

});


