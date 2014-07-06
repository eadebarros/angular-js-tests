var app = angular.module("myApp", []);

app.controller('PlayerController', ['$scope', function($scope){
	
	$scope.playing = false;

	$scope.audio = document.createElement("audio");

	$scope.audio.src = "audio/npr.mp4";

	$scope.play = function() {
		
		$scope.audio.play();
		
		$scope.playing = true;
	};

	$scope.stop = function() {
		
		$scope.audio.pause();

		$scope.playing = false;

	};

	$scope.audio.addEventListener('ended', function() {
		$scope.apply(function() {
			$scope.stop();
		});
	});

}]);

app.controller('RelatedController', ['$scope', function($scope){
	
}]);

app.controller('MyController', ['$scope', function($scope){
	
	$scope.person = { name: "Edu Barros" };
	
	var updateClock = function() {
	
		$scope.clock = new Date();

		$timeout(function updateTime() {
			$scope.clock = new Date();
			$timeout(updateTime, 1000);
		}, 1000);
	}
}]);