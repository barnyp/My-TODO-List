$(document).ready(function () {
    $('#button').click(function () {
      var addVar = $("input[name=checkListItem]").val();
      $('.list').append('<div class="item">' + addVar + '</div>');
    });
 });
