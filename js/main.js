//Tooltip initialize trigger
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Datepicker
$(function () {
  $("#datepicker").datepicker();
  $("#datepicker-show").datepicker();
  $('#timepicker1,#timepicker2').timepicker({
    minuteStep: 1,
    appendWidgetTo: 'body',
    showSeconds: false,
    showMeridian: false,
    defaultTime: 'current'
  });
});