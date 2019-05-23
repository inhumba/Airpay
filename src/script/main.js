$(function () {
	$('.selectpicker').selectpicker({
		mobile: true
	});

	$('.datepicker').datepicker({
		autoclose: true,
		format: 'dd/mm/yy',
		startDate: '1d'
	});

	$('#label-checkbox-accept').on('click', function() {
		$('#modal').modal('show');
	});
});
