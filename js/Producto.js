$(document).ready(function(){
	var URLhash = window.location.hash;
	console.log(URLhash);
	
	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.CategoriaMedicinas[category="Todo"]').addClass('ct_item-active');


//FILTRO NAV ===================================
	
	//Antibioticos----------------------------------------------
	if(URLhash === '#?Antibioticos')
	{
		// AGREGANDO CLASE ACTIVE ====================
		$('.CategoriaMedicinas').removeClass('ct_item-active');
		$('.CategoriaMedicinas[category="Antibioticos"]').addClass('ct_item-active');


		// OCULTANDO PRODUCTOS =========================
		$('.ListaProductos').css('transform', 'scale(0)');
		function hideProduct(){
			$('.ListaProductos').hide();
		} setTimeout(hideProduct,400);
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.ListaProductos[category="Antibioticos"]').show();
			$('.ListaProductos[category="Antibioticos"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	}
	//Antiinflamatorios ----------------------------------------------
	if(URLhash === '#?Antiinflamatorios')
	{
		// AGREGANDO CLASE ACTIVE ====================
		$('.CategoriaMedicinas').removeClass('ct_item-active');
		$('.CategoriaMedicinas[category="Antiinflamatorios"]').addClass('ct_item-active');


		// OCULTANDO PRODUCTOS =========================
		$('.ListaProductos').css('transform', 'scale(0)');
		function hideProduct(){
			$('.ListaProductos').hide();
		} setTimeout(hideProduct,400);
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.ListaProductos[category="Antiinflamatorios"]').show();
			$('.ListaProductos[category="Antiinflamatorios"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	}
	//Analgesicos ----------------------------------------------
	if(URLhash === '#?Analgesicos')
	{
		// AGREGANDO CLASE ACTIVE ====================
		$('.CategoriaMedicinas').removeClass('ct_item-active');
		$('.CategoriaMedicinas[category="Analgesicos"]').addClass('ct_item-active');
		// OCULTANDO PRODUCTOS =========================
		$('.ListaProductos').css('transform', 'scale(0)');
		function hideProduct(){
			$('.ListaProductos').hide();
		} setTimeout(hideProduct,400);
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.ListaProductos[category="Analgesicos"]').show();
			$('.ListaProductos[category="Analgesicos"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	}
	//Antiacidos ----------------------------------------------
	if(URLhash === '#?Antiacidos')
	{
		// AGREGANDO CLASE ACTIVE ====================
		$('.CategoriaMedicinas').removeClass('ct_item-active');
		$('.CategoriaMedicinas[category="Antiacidos"]').addClass('ct_item-active');
		// OCULTANDO PRODUCTOS =========================
		$('.ListaProductos').css('transform', 'scale(0)');
		function hideProduct(){
			$('.ListaProductos').hide();
		} setTimeout(hideProduct,400);
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.ListaProductos[category="Antiacidos"]').show();
			$('.ListaProductos[category="Antiacidos"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	}

	//Antigripales ----------------------------------------------
	if(URLhash === '#?Antigripales')
	{
		// AGREGANDO CLASE ACTIVE ====================
		$('.CategoriaMedicinas').removeClass('ct_item-active');
		$('.CategoriaMedicinas[category="Antigripales"]').addClass('ct_item-active');
		// OCULTANDO PRODUCTOS =========================
		$('.ListaProductos').css('transform', 'scale(0)');
		function hideProduct(){
			$('.ListaProductos').hide();
		} setTimeout(hideProduct,400);
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.ListaProductos[category="Antigripales"]').show();
			$('.ListaProductos[category="Antigripales"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	}
	//Antihistaminicos ----------------------------------------------
	if(URLhash === '#?Antihistaminicos')
	{
		// AGREGANDO CLASE ACTIVE ====================
		$('.CategoriaMedicinas').removeClass('ct_item-active');
		$('.CategoriaMedicinas[category="Antihistaminicos"]').addClass('ct_item-active');
		// OCULTANDO PRODUCTOS =========================
		$('.ListaProductos').css('transform', 'scale(0)');
		function hideProduct(){
			$('.ListaProductos').hide();
		} setTimeout(hideProduct,400);
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.ListaProductos[category="Antihistaminicos"]').show();
			$('.ListaProductos[category="Antihistaminicos"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	}

	//Perfumes ----------------------------------------------
	if(URLhash === '#?Perfumes')
	{
		// AGREGANDO CLASE ACTIVE ====================
		$('.CategoriaMedicinas').removeClass('ct_item-active');
		$('.CategoriaMedicinas[category="Perfumes"]').addClass('ct_item-active');
		// OCULTANDO PRODUCTOS =========================
		$('.ListaProductos').css('transform', 'scale(0)');
		function hideProduct(){
			$('.ListaProductos').hide();
		} setTimeout(hideProduct,400);
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.ListaProductos[category="Perfumes"]').show();
			$('.ListaProductos[category="Perfumes"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	}
	//Esmaltes ----------------------------------------------
	if(URLhash === '#?Esmaltes')
	{
		// AGREGANDO CLASE ACTIVE ====================
		$('.CategoriaMedicinas').removeClass('ct_item-active');
		$('.CategoriaMedicinas[category="Esmaltes"]').addClass('ct_item-active');
		// OCULTANDO PRODUCTOS =========================
		$('.ListaProductos').css('transform', 'scale(0)');
		function hideProduct(){
			$('.ListaProductos').hide();
		} setTimeout(hideProduct,400);
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.ListaProductos[category="Esmaltes"]').show();
			$('.ListaProductos[category="Esmaltes"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	}
	//Maquillajes ----------------------------------------------
	if(URLhash === '#?Maquillajes')
	{
		// AGREGANDO CLASE ACTIVE ====================
		$('.CategoriaMedicinas').removeClass('ct_item-active');
		$('.CategoriaMedicinas[category="Maquillajes"]').addClass('ct_item-active');
		// OCULTANDO PRODUCTOS =========================
		$('.ListaProductos').css('transform', 'scale(0)');
		function hideProduct(){
			$('.ListaProductos').hide();
		} setTimeout(hideProduct,400);
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.ListaProductos[category="Maquillajes"]').show();
			$('.ListaProductos[category="Maquillajes"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	}
	//Maquillajes ----------------------------------------------
	if(URLhash === '#?Labiales')
	{
		// AGREGANDO CLASE ACTIVE ====================
		$('.CategoriaMedicinas').removeClass('ct_item-active');
		$('.CategoriaMedicinas[category="Labiales"]').addClass('ct_item-active');
		// OCULTANDO PRODUCTOS =========================
		$('.ListaProductos').css('transform', 'scale(0)');
		function hideProduct(){
			$('.ListaProductos').hide();
		} setTimeout(hideProduct,400);
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.ListaProductos[category="Labiales"]').show();
			$('.ListaProductos[category="Labiales"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	}
	//Delineadores ----------------------------------------------
	if(URLhash === '#?Delineadores')
	{
		// AGREGANDO CLASE ACTIVE ====================
		$('.CategoriaMedicinas').removeClass('ct_item-active');
		$('.CategoriaMedicinas[category="Delineadores"]').addClass('ct_item-active');
		// OCULTANDO PRODUCTOS =========================
		$('.ListaProductos').css('transform', 'scale(0)');
		function hideProduct(){
			$('.ListaProductos').hide();
		} setTimeout(hideProduct,400);
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.ListaProductos[category="Delineadores"]').show();
			$('.ListaProductos[category="Delineadores"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	}
	// FILTRANDO PRODUCTOS  ============================================

	$('.CategoriaMedicinas').click(function(){
		
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.CategoriaMedicinas').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.ListaProductos').css('transform', 'scale(0)');
		function hideProduct(){
			$('.ListaProductos').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.ListaProductos[category="'+catProduct+'"]').show();
			$('.ListaProductos[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.CategoriaMedicinas[category="Todo"]').click(function(){
		function showAll(){
			$('.ListaProductos').show();
			$('.ListaProductos').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================
});

