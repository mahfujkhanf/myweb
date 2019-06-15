$(document).ready(function(){

	$('.carousel').carousel({
	interval: 2000
	})

	// Menu Color change
		// Menu_Home
			$('.home').click(function(){

			$('body').addClass('menu_home').removeClass('menu_service menu_contacts menu_work menu_about ');;

			});

		// Menu_Service
			$('.service').click(function(){

			$('body').addClass('menu_service').removeClass('menu_home menu_about menu_contacts menu_work');



			});
		// Menu_about
			$('.about').click(function(){

			$('body').addClass('menu_about').removeClass('menu_service menu_work menu_home menu_contacts');

			});
		// Menu_work
			$('.work').click(function(){

			$('body').addClass('menu_work').removeClass('menu_about menu_contacts menu_home menu_service');

			});
		// Menu_contacts
			$('.contacts').click(function(){

			$('body').addClass('menu_contacts').removeClass('menu_work menu_home menu_service menu_about');
			});

	// Menu Color change

	// service scroll


});


