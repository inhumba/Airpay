$(function () {
	$('.selectpicker').selectpicker({
		mobile: true
	});

	$('.datepicker').datepicker({
		autoclose: true,
		format: 'dd/mm/yyyy',
		startDate: '1d'
	});

	$('[data-toggle="tooltip"]').tooltip();
});
