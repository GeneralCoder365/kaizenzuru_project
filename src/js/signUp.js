//replaces text in dropdown for colorSelect to selected option
$(function(){
  
    $(".dropdown-menu a").click(function(){
      $(".btn:first-child").text($(this).text());
       $(".btn:first-child").val($(this).text());
    });
});

