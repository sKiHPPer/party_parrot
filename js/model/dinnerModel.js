//DinnerModel Object constructor
class DinnerModel {
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu

	constructor() {
		this.numberOfGuests = 1;
		this.dinner_menu = [];
		this.long_text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		this._observers = [];
		this.dinner_id = 0;
		//this.API_KEY = API.API_KEY;
	}

	addObserver(observer) {
		this._observers.push(observer);
	}

	notifyObservers(changeDetails) {
		for (let i = 0; i < this._observers.length; i++) {
			this._observers[i].update(this, changeDetails);
		}
	}

	removeObserver(observer) {
		/* remove observer from array */
		for (let i = 0; i < this._observers.length; i++) {
			if (this._observers[i] === observer) {
				this._observers.splice(i, 1);
			}
		}
	}

	setNumberOfGuests(num) {
		this.numberOfGuests = num;
		this.notifyObservers(this);
	}

	getNumberOfGuests() {
		return this.numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type 
	getSelectedDish(type) {
		for (let dish in this.dinner_menu) {
			let dish_id = this.dinner_menu[dish];
			let dish_type = this.getDish(dish_id);
			if (dish_type.type == type) {
				return dish_type.id;
			}
		}
	}

	//Returns all the dishes on the menu.
	getFullMenu() {
		return this.dinner_menu;
	}

	//Returns all ingredients for all the dishes on the menu.
	getAllIngredients() {
		let full_menu = this.getFullMenu();
		let all_ingredients = [];
		for (let dish in full_menu) {
			all_ingredients.push(full_menu[dish].ingredients);
		}
		return all_ingredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	getTotalMenuPrice() {
		this.total_price = 0;
		this.dinner_menu.forEach((dish) => {
			this.total_price += this.getTotalDishPrice(dish);
		})
		return this.total_price;
	}

	getTotalDishPrice(dish) {
		this.total_price = dish.extendedIngredients.length*this.numberOfGuests;
		return this.total_price;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.

	addDishToMenu(id) {
		this.dinner_menu.push(id);
		this.notifyObservers(this);
	}

	//Removes dish from menu
	removeDishFromMenu(id) {
		for (let i = 0; i < this.dinner_menu.length; i++) {
			if (this.dinner_menu[i] === id) {
				this.dinner_menu.splice(i, 1);
			}
		}
		this.notifyObservers(this);
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	getAllDishes(type, filter) {
		//fetch returnerar en promise
		this.error = 'Error: Could not get dishes from data...'
		//document.getElementById("container").innerHTML = this.error
		return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type=${type}&number=20&query=${filter}`, { //kan ta bort 100
			headers: {
				'X-Mashape-Key': API_KEY
			}
		})
			.then(response => {//kollar att vi inte fått error när vi försökte fetcha
				if (response.ok) {
					return response;
				}
				throw Error(response.statusText);
			})
			.then(response => response.json())
			//.catch(console.error); //fångar upp ifall vi fick error
	}


	//function that returns a dish of specific ID
	getDish(id) {
		return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information?includeNutrition=false`, {
			headers: {
				'X-Mashape-Key': API_KEY
			}
		})
			.then(response => {//kollar att vi inte fått error när vi försökte fetcha
				if (response.ok) {
					return response;
				}
				throw Error(response.statusText);
			})
			.then(response => response.json())
	}
}




