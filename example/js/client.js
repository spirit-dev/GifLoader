	
	function execute() {
		var al = new ajaxLoader(".ajaxLoader");

		setTimeout(function() {
			al.remove();
		}, 5000);
	}