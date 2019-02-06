class generalController {


	constructor(model) {
		this.dataModel = model;
		this.view_list = [];
		this.container = document.getElementById("container");
		//Här skapas alla views
		this.headerView = new HeaderView(document.getElementById("header"), this.dataModel);
		this.dishView = new DishView(this.container, this.dataModel);
		this.homeView = new HomeView(this.container, this.dataModel);
		this.menuView = new MenuView(this.container, this.dataModel, this)
		this.sidebar = new Sidebar(document.getElementById("sidebar"), this.dataModel);
		this.confirmdinner = new ConfirmdinnerView(this.container, this.dataModel);
		this.printView = new PrintView(this.container, this.dataModel);

		//Pushar till lista och gör hidden
		this.view_list.push(this.dishView);
		this.view_list.push(this.homeView);
		this.view_list.push(this.menuView);
		this.view_list.push(this.sidebar);
		this.view_list.push(this.confirmdinner);
		this.view_list.push(this.printView);
		//Här skapas alla controllers
		this.homeController = new HomeController(this, this.homeView);
		this.sidebarController = new SidebarController(this, this.sidebar, this.dataModel);
		this.menuController = new MenuController(this, this.menuView);
		this.headerController = new HeaderController(this, this.headerView);
		this.dishController = new DishController(this, this.dishView, this.dataModel);
		this.confirmdinnerController = new ConfirmDinnerController(this, this.confirmdinner);
		this.printController = new PrintController(this, this.printView);
		this.showHomeview();
	}

	hide() {
		this.view_list.forEach((view) => { view.div.style = "display:none;" });
	}

	showHomeview() {
		//Visa homeView.js
		this.hide();
		this.homeView.div.style = "display:block;";
	}

	showMenuview() {
		//Visa menuView.js
		this.hide();
		this.sidebar.div.style = "display:block;";
		this.menuView.div.style = "display:block;";
	}

	showDishview(dish) {
		//Visa dishView.js
		this.hide();
		this.sidebar.div.style = "display:block;";
		this.dishView.showDish(dish);
		this.dishView.div.style = "display:block;";

	}

	showConfirmdinnerview() {
		//Visa confirmdinner.js
		this.hide()
		this.confirmdinner.div.style = "display:block;";
	}

	showPrintview() {
		//Visa printView.js
		this.hide();
		this.printView.div.style = "display:block;";
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



