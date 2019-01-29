class generalController {


	constructor(model) {
		this.dataModel = model;
		//skapa controllers som skapar views typ DishController()
		this.container = document.getElementById("content");
		console.log(document.getElementById("content"));
		this.headerView = new HeaderView($("#headerView"), model);
		this.showMenuview();
	}

	showHomeview() {
		//Visa homeView.js
		this.hide();
		this.homeController = new HomeController(this.container, this, this.dataModel);

	}

	hide() {
		this.container.innerHTML = "";
	}

	showDishview() {
		//Visa dishView.js
		this.hide();
		this.sidebarView = new Sidebar($("#sidebar"), this.dataModel);
		this.dishView = new DishView(this.container, this.dataModel);

	}

	showMenuview() {
		//Visa menuView.js
		this.hide();
		this.sidebarView = new Sidebar($("#sidebar"), this.dataModel);
		this.menuView = new MenuView(this.container, this.dataModel);

	}


	showConfirmdinnerview() {
		//Visa confirmdinner.js
		this.sidebarView = new Sidebar($("#sidebar"), this.dataModel);

	}

	showPrintview() {
		//Visa printView.js
		this.sidebarView = new Sidebar($("#sidebar"), this.dataModel);

	}

}

window.onload = function () {
	//We instantiate our model
	var model = new DinnerModel();

	var stateController = new generalController(model);

	// And create the instance of ExampleView

	//var exampleView = new ExampleView($("#exampleView"), model);
	//var headerView = new HeaderView($("#headerView"), model);
	//var dishView = new DishView($("#dishView"), model);
	//var menuView = new MenuView($("#menuView"),model);
	//var sidebarView = new Sidebar($("#sidebar"),model);
	//var confirmdinnerView = new ConfirmdinnerView(document.getElementById("content"),model);
	//var printView = new PrintView($("#printView"),model);
	//var MenuPrice = new MenuTable($("#MenuPrice"),model);
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



