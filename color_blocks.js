$('document').ready(function() {
  var numClickedBlue = 0;
  $('.btn-blue').on('click', function() {
    numClickedBlue+= 1;
    $('#Blue').text('Sad Aaron:' + numClickedBlue);
    $('#container').append('<div class="foo blue"></div>');
  });
  var numClickedRed = 0;
  $('.btn-red').on('click', function() {
    numClickedRed+= 1;
    $('#Red').text('Angry Aaron:' + numClickedRed);
    $('#container').append('<div class="foo red"></div>');
  });
  var numClickedGreen = 0;
  $('.btn-green').on('click', function() {
    numClickedGreen+= 1;
    $('#Green').text('Happy Aaron:' + numClickedGreen);
      $('#container').append('<div class="foo green"></div>');
  });
  var numClickedYellow = 0;
  $('.btn-yellow').on('click', function() {
    numClickedYellow+= 1;
    $('#Yellow').text('Excited Aaron:' + numClickedYellow);
      $('#container').append('<div class="foo yellow"></div>');
  });
  $('#container').on('click', '.blue', function () {
     $(this).remove();
     numClickedBlue -= 1;
     $('#Blue').text('Blue Aaron:' + numClickedBlue);
  });
  $('#container').on('click', '.red', function () {
     $(this).remove();
     numClickedRed -= 1;
     $('#Red').text('Red Aaron:' + numClickedRed);
  });
  $('#container').on('click', '.green', function () {
     $(this).remove();
     numClickedGreen -= 1;
     $('#Green').text('Green Aaron:' + numClickedGreen);
  });
  $('#container').on('click', '.yellow', function () {
     $(this).remove();
     numClickedYellow -= 1;
     $('#Yellow').text('Yellow Aaron:' + numClickedYellow);
  });



});
