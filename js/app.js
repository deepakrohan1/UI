
(function () {

var app = angular.module("MyApp", []);
	var gem = {
		name: "Emrald",
		price: "2.95",
		description: "This is a Red Stone"
	}

app.controller('StoreController',  function(){
	this.product = gem;
});
})();