class generalController {

	constructor(){
		//skapa controllers som skapar views typ DishController()
	}
	showHomeview(){
		//Visa homeView.js
		this.showHomeview.show()
	}
  }

  window.onload = function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	var stateController = new generalController();
	stateController.showHomeview();
	// And create the instance of ExampleView

	var exampleView = new ExampleView(document.querySelector("#exampleView"));
	var headerView = new HeaderView($("#headerView"), model);
	var dishView = new DishView($("#dishView"), model);
	var menuView = new MenuView($("#menuView"),model);
	var menuView = new Sidebar($("#sidebar"),model);
	var confirmdinnerView = new ConfirmdinnerView($("#confirmdinnerView"),model);
	var printView = new PrintView($("#printView"),model);
	var MenuPrice = new MenuTable($("#MenuPrice"),model);
	//var confirmHeader = new ConfirmHeader($("#confirmHeader"),guests);
	
	//var homeView = new HomeView($("#homeView"), model);
	//var confirmdinnerView = new ConfirmdinnerView($("#confirmdinnerView"), model);
	//var menuView = new MenuView($("#menuView"), model);
	//var printView = new PrintView($("#printView"), model);
	//var sidebar = new Sidebar($("#sidebar"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * query for elements in the whole document.
 	 * In other places you should limit the search only to the children 
 	 * of the specific view you're working with (see exampleView.js).
 	 */

};



  