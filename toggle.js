toggle = {
	toggle: function(prefix = "data") {
		$(`[${prefix}-show]`).on("click", function(){
			let element = $(this).attr(`${prefix}-show`);
			$(element).show();
			$(element).removeAttr("hidden");
		});
		$(`[${prefix}-hide]`).on("click", function(){
			let element = $(this).attr(`${prefix}-hide`);
			$(element).hide();
		});
		$(`[${prefix}-toggle]`).on("click", function(){
			let element = $(this).attr(`${prefix}-toggle`);
			$(element).toggle();
		});
	}
}
$(function(){
  toggle.toggle();
});
