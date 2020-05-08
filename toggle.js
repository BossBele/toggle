toggle = {
	toggle: function(prefix = "data") {
		$(`[${prefix}-show]`).on("click", function(){
      let element = $(this).data("data-show");
      $(element).show();
    });
    $(`[${prefix}-hide]`).on("click", function(){
      let element = $(this).data("data-hide");
      $(element).hide();
    });
    $(`[${prefix}-toggle]`).on("click", function(){
      let element = $(this).data("data-toggle");
      $(element).toggle();
    });
	}
}
$(function(){
  toggle.toggle();
});
