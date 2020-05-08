$(function(){
  $("[data-show]").on("click", function(){
    let element = $(this).data("data-show");
    $(element).show();
  });
  $("[data-hide]").on("click", function(){
    let element = $(this).data("data-hide");
    $(element).hide();
  });
  $("[data-toggle]").on("click", function(){
    let element = $(this).data("data-toggle");
    $(element).toggle();
  });
});
