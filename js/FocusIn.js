if(!$('#fcsn1').length){
  $('body').append('
      &lt;div id="fcsn1" class="fcsn"/&gt;
      &lt;div id="fcsn2" class="fcsn"/&gt;
      '); //add elements
}
$('.fcsn').css({
    'background': 'rgba(0,0,0,0.7)',
    'position': 'absolute',
    'width':'100%',
    'left': '0'
    });
$('#fcsn1').css({
    'top': '-30px',
    'border-bottom': '30px solid rgba(0,0,0,.7)'
    });
$('#fcsn2').css({
    'padding-top': '30px',
    'border-top': '30px solid rgba(0,0,0,.7)'
    });
var BlockHeight = 100; // Change this to alter the height of the gap.

$(document).mousemove(function(e){
  var FocusInTop = e.pageY-(BlockHeight/2);
  var FocusInBottomTop = e.pageY+(BlockHeight/2);
  var FocusInBottom = $(document).height()-e.pageY-(BlockHeight);
  $('#fcsn1').css('height', FocusInTop);
  $('#fcsn2').css({'height': FocusInBottom,'top': FocusInBottomTop});
});