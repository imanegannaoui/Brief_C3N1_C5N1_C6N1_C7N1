$(function(){
	function genereCadran(){
		var reperes = [];

		for(var i=0; i<60; i++){
			//test += ' test';
			var repere = $('<div/>',{class:'repere repere-'+i});
			repere.css({'-webkit-transform':'rotate('+6*i+'deg)','-moz-transform':'rotate('+6*i+'deg)','transform':'rotate('+6*i+'deg)'})

			reperes.push(repere);//on ajoute une ligne au tableau avec .push()
		}
		$('.cadran').append(reperes);
	}

	function fnHeureActuelle(){//calcul l'heure actuelle et retourne un tableau
		var date = new Date();

		var heure = date.getHours();
		if(heure<10){heure = '0'+ heure;}
		else{heure = ''+ heure;}

		var minutes = date.getMinutes();
		if(minutes<10){minutes = '0'+ minutes;}
		else{minutes = ''+ minutes;}

		var secondes = date.getSeconds();
		if(secondes<10){secondes = '0'+ secondes;}
		else{secondes = ''+ secondes;}

		return [heure, minutes, secondes];
	}

	function fnHeureMaj(){
		var heure_actuelle = fnHeureActuelle();
		var secondes = heure_actuelle[2];
		var heures = heure_actuelle[0];
		var minutes = heure_actuelle[1];
		heures = (Number(heures)*3600+Number(secondes)+Number(minutes)*60)*30/3600;
		minutes = (Number(minutes*60) + Number(secondes))*6/60;

		console.log(minutes+' '+heures);

	$('.secondes').css({'-webkit-transform':'rotate('+secondes*6+'deg)','-moz-transform':'rotate('+secondes*6+'deg)','transform':'rotate('+secondes*6+'deg)'});
	$('.minutes').css({'-webkit-transform':'rotate('+minutes+'deg)','-moz-transform':'rotate('+minutes+'deg)','transform':'rotate('+minutes+'deg)'});
	$('.heures').css({'-webkit-transform':'rotate('+heures+'deg)','-moz-transform':'rotate('+heures+'deg)','transform':'rotate('+heures+'deg)'});

		setTimeout(fnHeureMaj, 1000);
	}
	genereCadran();
	fnHeureMaj();//affiche l'horloge
	
});