$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var type='dessert';
	var guests=10;
	model.setNumberOfGuests(guests);
	var dish_id=1;
	
	// And create the instance of ExampleView

	var exampleView = new ExampleView($("#exampleView"), model);
	var headerView = new HeaderView($("#headerView"), model);
	var dishView = new DishView($("#dishView"), model,dish_id, guests);
	var menuView = new MenuView($("#menuView"),model,type);
	var menuView = new Sidebar($("#sidebar"),model, guests);
	var confirmdinnerView = new ConfirmdinnerView($("#confirmdinnerView"),model, guests);
	var printView = new PrintView($("#printView"),model, guests);
	//var confirmHeader = new ConfirmHeader($("#confirmHeader"),guests);
	
	//var homeView = new HomeView($("#homeView"), model);
	//var confirmdinnerView = new ConfirmdinnerView($("#confirmdinnerView"), model);
	//var menuView = new MenuView($("#menuView"), model);
	//var printView = new PrintView($("#printView"), model);
	//var sidebar = new Sidebar($("#sidebar"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});