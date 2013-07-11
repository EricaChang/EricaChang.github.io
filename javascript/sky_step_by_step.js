(function(window, document, undefined) {
	function remote() {
		$.ajax({
			type: "POST",
			url: "http://demosite2013.herokuapp.com/exercise/blog/platform.php",
			data: { pwd: btoa($('#pwd').val())},
			success: function(data) {
				$('#skycontent').html(data);
			}
		});
	}

	jQuery(document).ready(function(){
		$('#subtn').on("click", remote);
	});
})(window, document);
