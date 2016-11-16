var musicDirective = angular.module("music.directive",[]);
musicDirective.directive('musicWizardSteps',function(){
	return{
		restrict:'S',
		replace:true,
		templateUrl:'views/d_wizard_steps.html'
	}
})