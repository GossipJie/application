app.controller("applyCtrl",['$scope','$location',function($scope,$location){
	
	$scope.init = function () {
		var $validation = false;
		$('#fuelux-wizard').ace_wizard().on('change' , function(e, info){
			if(info.step == 1 && $validation) {
				if(!$('#validation-form').valid()) return false;
			}
		}).on('finished', function(e) {
			bootbox.dialog({
				message: "Thank you! Your information was successfully saved!", 
				buttons: {
					"success" : {
						"label" : "OK",
						"className" : "btn-sm btn-primary"
					}
				}
			});
		}).on('stepclick', function(e){
			//return false;//prevent clicking on steps
		});
	}
	
	
	$scope.initFile = function(){
	//	try {
			  $(".dropzone").dropzone({
			    paramName: "file", // The name that will be used to transfer the file
			    maxFilesize: 0.5, // MB
			  
				addRemoveLinks : true,
				dictDefaultMessage :
				'<span class="bigger-150 bolder"><i class="icon-caret-right red"></i>拖动文件</span> to upload \
				<span class="smaller-80 grey">(or click)</span> <br /> \
				<i class="upload-icon icon-cloud-upload blue icon-3x"></i>'
			,
				dictResponseError: 'Error while uploading file!',
				
				//change the previewTemplate to use Bootstrap progress bars
				previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-details\">\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n    <div class=\"dz-size\" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class=\"progress progress-small progress-striped active\"><div class=\"progress-bar progress-bar-success\" data-dz-uploadprogress></div></div>\n  <div class=\"dz-success-mark\"><span></span></div>\n  <div class=\"dz-error-mark\"><span></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n</div>"
			  });
		//	} catch(e) {
		// 	  alert('Dropzone.js does not support older browsers!');
		//	}
	}
}]);

app.controller("payCtrl",['$scope','$location',function($scope,$location){
	
}]);

app.controller("statusCtrl",['$scope','$location',function($scope,$location){
	
}]);

app.controller("cardCtrl",['$scope','$location',function($scope,$location){
	
}]);

app.controller("scoresCtrl",['$scope','$location',function($scope,$location){
	
}]);
