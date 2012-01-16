(function( $ ) {

	T5.extendInitializers(function(){
		
		function init(spec) {
			var element = spec.element;
	        var zoneId = spec.zoneId;
	        var dialogId = spec.dialogId;
	        var url = spec.url;
	        var onOpen = function(event, ui) {
	            $("#" + zoneId).tapestryZone("update", {
	                url: url
	            });
			};
			

	        $("#" + element).click(function(e) {
				$('#' + dialogId).live("dialogopen", onOpen);
	            $('#' + dialogId).dialog('open');
				
				return false;
	        });
		}
		
		return {
			dialogAjaxLink : init
		}
	});
	
}) ( jQuery );