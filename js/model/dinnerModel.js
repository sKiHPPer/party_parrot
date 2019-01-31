//DinnerModel Object constructor
class DinnerModel {
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu

	constructor() {
		this.numberOfGuests = 1;
		this.dishes = dishesConst; // to be replaced in lab 3
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
		let filtered = this.dishes.filter((dish) => {
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
		return filtered
	}

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


// the dishes letiable contains an array of all the 
// dishes in the database. each dish has id, name, type,
// image (name of the image file), description and
// array of ingredients. Each ingredient has name, 
// quantity (a number), price (a number) and unit (string 
// defining the unit i.e. "g", "slices", "ml". Unit
// can sometimes be empty like in the example of eggs where
// you just say "5 eggs" and not "5 pieces of eggs" or anything else.

const dishesConst = [{
	'id': 1,
	'name': 'French toast',
	'type': 'starter',
	'image': 'toast.jpg',
	'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
	'ingredients': [{
		'name': 'eggs',
		'quantity': 0.5,
		'unit': '',
		'price': 10
	}, {
		'name': 'milk',
		'quantity': 30,
		'unit': 'ml',
		'price': 6
	}, {
		'name': 'brown sugar',
		'quantity': 7,
		'unit': 'g',
		'price': 1
	}, {
		'name': 'ground nutmeg',
		'quantity': 0.5,
		'unit': 'g',
		'price': 12
	}, {
		'name': 'white bread',
		'quantity': 2,
		'unit': 'slices',
		'price': 2
	}]
}, {
	'id': 2,
	'name': 'Sourdough Starter',
	'type': 'starter',
	'image': 'sourdough.jpg',
	'description': "Here is how you make it... Lore ipsum...",
	'ingredients': [{
		'name': 'active dry yeast',
		'quantity': 0.5,
		'unit': 'g',
		'price': 4
	}, {
		'name': 'warm water',
		'quantity': 30,
		'unit': 'ml',
		'price': 0
	}, {
		'name': 'all-purpose flour',
		'quantity': 15,
		'unit': 'g',
		'price': 2
	}]
}, {
	'id': 3,
	'name': 'Baked Brie with Peaches',
	'type': 'starter',
	'image': 'bakedbrie.jpg',
	'description': "Here is how you make it... Lore ipsum...",
	'ingredients': [{
		'name': 'round Brie cheese',
		'quantity': 10,
		'unit': 'g',
		'price': 8
	}, {
		'name': 'raspberry preserves',
		'quantity': 15,
		'unit': 'g',
		'price': 10
	}, {
		'name': 'peaches',
		'quantity': 1,
		'unit': '',
		'price': 4
	}]
}, {
	'id': 100,
	'name': 'Meat balls',
	'type': 'main dish',
	'image': 'meatballs.jpg',
	'description': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
	'ingredients': [{
		'name': 'extra lean ground beef',
		'quantity': 115,
		'unit': 'g',
		'price': 20
	}, {
		'name': 'sea salt',
		'quantity': 0.7,
		'unit': 'g',
		'price': 3
	}, {
		'name': 'small onion, diced',
		'quantity': 0.25,
		'unit': '',
		'price': 2
	}, {
		'name': 'garlic salt',
		'quantity': 0.7,
		'unit': 'g',
		'price': 2
	}, {
		'name': 'Italian seasoning',
		'quantity': 0.6,
		'unit': 'g',
		'price': 3
	}, {
		'name': 'dried oregano',
		'quantity': 0.3,
		'unit': 'g',
		'price': 3
	}, {
		'name': 'crushed red pepper flakes',
		'quantity': 0.6,
		'unit': 'g',
		'price': 3
	}, {
		'name': 'Worcestershire sauce',
		'quantity': 6,
		'unit': 'ml',
		'price': 7
	}, {
		'name': 'milk',
		'quantity': 20,
		'unit': 'ml',
		'price': 4
	}, {
		'name': 'grated Parmesan cheese',
		'quantity': 5,
		'unit': 'g',
		'price': 8
	}, {
		'name': 'seasoned bread crumbs',
		'quantity': 15,
		'unit': 'g',
		'price': 4
	}]
}, {
	'id': 101,
	'name': 'MD 2',
	'type': 'main dish',
	'image': 'bakedbrie.jpg',
	'description': "Here is how you make it... Lore ipsum...",
	'ingredients': [{
		'name': 'ingredient 1',
		'quantity': 1,
		'unit': 'pieces',
		'price': 8
	}, {
		'name': 'ingredient 2',
		'quantity': 15,
		'unit': 'g',
		'price': 7
	}, {
		'name': 'ingredient 3',
		'quantity': 10,
		'unit': 'ml',
		'price': 4
	}]
}, {
	'id': 102,
	'name': 'MD 3',
	'type': 'main dish',
	'image': 'meatballs.jpg',
	'description': "Here is how you make it... Lore ipsum...",
	'ingredients': [{
		'name': 'ingredient 1',
		'quantity': 2,
		'unit': 'pieces',
		'price': 8
	}, {
		'name': 'ingredient 2',
		'quantity': 10,
		'unit': 'g',
		'price': 7
	}, {
		'name': 'ingredient 3',
		'quantity': 5,
		'unit': 'ml',
		'price': 4
	}]
}, {
	'id': 103,
	'name': 'MD 4',
	'type': 'main dish',
	'image': 'meatballs.jpg',
	'description': "Here is how you make it... Lore ipsum...",
	'ingredients': [{
		'name': 'ingredient 1',
		'quantity': 1,
		'unit': 'pieces',
		'price': 4
	}, {
		'name': 'ingredient 2',
		'quantity': 12,
		'unit': 'g',
		'price': 7
	}, {
		'name': 'ingredient 3',
		'quantity': 6,
		'unit': 'ml',
		'price': 4
	}]
}, {
	'id': 200,
	'name': 'Chocolat Ice cream',
	'type': 'dessert',
	'image': 'icecream.jpg',
	'description': "Here is how you make it... Lore ipsum...",
	'ingredients': [{
		'name': 'ice cream',
		'quantity': 100,
		'unit': 'ml',
		'price': 6
	}]
}, {
	'id': 201,
	'name': 'Vanilla Ice cream',
	'type': 'dessert',
	'image': 'icecream.jpg',
	'description': "Here is how you make it... Lore ipsum...",
	'ingredients': [{
		'name': 'ice cream',
		'quantity': 100,
		'unit': 'ml',
		'price': 6
	}]
}, {
	'id': 202,
	'name': 'Strawberry',
	'type': 'dessert',
	'image': 'icecream.jpg',
	'description': "Here is how you make it... Lore ipsum...",
	'ingredients': [{
		'name': 'ice cream',
		'quantity': 100,
		'unit': 'ml',
		'price': 6
	}]
}
];


