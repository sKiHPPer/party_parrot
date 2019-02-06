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
		let full_menu = [];
		for (let dish in this.dinner_menu) {
			let dis = this.getDish(this.dinner_menu[dish]);
			full_menu.push(dis);
		}
		return full_menu;
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
		let total_price = 0;
		let all_ingredients = this.getAllIngredients();
		let i;
		for (let dish in all_ingredients) {
			for (i in all_ingredients[dish]) {
				let ingredient = all_ingredients[dish][i];
				total_price = total_price + (ingredient.price * this.numberOfGuests);
			}
		}
		return total_price;
	}

	getTotalDishPrice(id) {
		let total_price = 0;
		let dish = this.getDish(id);
		let i;

		for (let i in dish.ingredients) {
			let ingredient = dish.ingredients[i];
			total_price = total_price + (ingredient.price * this.numberOfGuests);
		}
		return total_price;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.

	addDishToMenu(id) {
		let new_dish = this.getDish(id);
		let type = new_dish.type;
		let old_dish = this.getSelectedDish(type);
		if (typeof old_dish !== 'undefined') {
			this.removeDishFromMenu(old_dish);
		}
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
		return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type=${type}&number=20`, { //kan ta bort 100
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
			.catch(console.error); //fångar upp ifall vi fick error
	}

	/*let filtered = this.dishes.filter((dish) => {
		let found = true;
		if (filter) {
			found = false;
			
			dish.ingredients.forEach(function (ingredient) {
				if (ingredient.name.indexOf(filter) != -1) {	
					found = true;
				}
			});
		
			if (dish.name.indexOf(filter) != -1) {
				found = true;
			}
		}
		
		return (dish.type == type && found);
	});

	return filtered*/


	//function that returns a dish of specific ID
	getDish(id) {
		for (let key in this.dishes) {
			if (this.dishes[key].id == id) {
				return this.dishes[key];
			}
		}
		return undefined;
	}
}

