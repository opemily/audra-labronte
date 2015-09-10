$(function() {

var $container = $('#packery');
var pckry = $container.data('packery');
// initialize
$container.packery({
  itemSelector: '.item',
  gutter: 3.5,
  "columnWidth": 5,
  "rowHeight": 5
});

$( function() {
  
  $container.on( 'click', '.content', function( event ) {
    // change size of item via class
    $( event.target).closest('.content').toggleClass('gigante');
    if ($(this).hasClass('gigante')){
    	$(this).find('div').removeClass('hidden');
    } else {
    	$(this).find('div').addClass('hidden');
    }
    // trigger layout
    $container.packery();
  });
  
});




});