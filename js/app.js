
(function () {

	var app = angular.module("MyApp", []);
	var gems = [
	{
		name: "Emrald",
		price: 2.95,
		description: "This is a Red Stone",
		soldOut: true,
		images: {
			image1:"images/emerald.jpg"
		}
	},
	{
		name: "Ruby",
		price: 5.53,
		description: "This is a red stone used in making jwellery",
		soldOut: false,
		images: {
			image1:"images/ruby.jpg"
		}
	},
	{
		name: "Sapphire",
		price: 1,
		description: "Harder gem stone when compared to the other types",
		soldOut: true,
		images: {
			image1:"images/sapphire.jpg"
		}
	}
	]

	app.controller('StoreController',  function(){
		this.products = gems;
	});
})();