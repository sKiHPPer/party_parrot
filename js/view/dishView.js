class DishView {
    constructor (container, model) {
        model.addObserver(this);
        this.model = model;
        this.long_text = model.long_text;
        this.guests = model.getNumberOfGuests();

        //Stor div som allt på sidan ligger i.
        this.div = document.createElement("div");

        //loading sign
        this.Loading = document.createElement("div");
        this.div.appendChild(this.Loading);
        //Ruta med dish name, bild och latinsk text.
        this.description = document.createElement("div");
        this.name = document.createElement("h4");
        this.image = document.createElement("img");
        //this.image.src = "images/"+this.dish.image;
        this.image.width = "200";
        this.image.height = "200";
        this.latin = document.createElement("p");
        this.latin.innerHTML = this.long_text;

        this.description.appendChild(this.name);
        this.description.appendChild(this.image);
        this.description.appendChild(this.latin);

        //Tillbaka knapp.
        this.back_btn = document.createElement("button");
        this.back_btn.className = "button";
        this.back_btn.id = "btn";
        this.back_btn.innerHTML = "Back to search";

        this.description.appendChild(this.back_btn);

        //Preparations avsnittet.
        this.head_prep = document.createElement("h4");
        this.head_prep.innerHTML = "PREPARATION";
        this.prep = document.createElement("p");
        
        this.description.appendChild(this.head_prep);
        this.description.appendChild(this.prep);

        //Appendar description diven till stora diven.
        this.div.appendChild(this.description);

        //Rutan med ingredienser osv.
        this.box_ingredients = document.createElement("div");
        this.amount_for_guests = document.createElement("p");
        this.amount_for_guests.innerHTML = "INGREDIENTS FOR "+this.guests+" PEOPLE";
        //The big table with the ingredients.
        this.table_ingredients = document.createElement("table");
       
        //lägger till the table med alla ingredienser till box_ingredients.
        this.box_ingredients.appendChild(this.table_ingredients);

        //Add to menu button.
        this.add_to_menu = document.createElement("button");
        this.add_to_menu.className = "button";
        this.add_to_menu.id = "btn";
        this.add_to_menu.innerHTML = "Add to menu"
        this.box_ingredients.appendChild(this.add_to_menu);


        //Total price for dish.
        this.total_dish_price = document.createElement("p");
        this.total_dish_price.className = "price";
        this.box_ingredients.appendChild(this.total_dish_price);

        //Lägg till boxen med ingredienser till stora diven samt appenda stora diven.
        this.div.appendChild(this.box_ingredients);
        container.appendChild(this.div);
        //container.innerHTML = html;
    

    }

    update(model){
        this.guests= model.getNumberOfGuests();
        this.model = model;

        this.showDish(this.dish.id);
    }

    showDish(id){
        while(this.table_ingredients.firstChild){
            this.table_ingredients.removeChild(this.table_ingredients.firstChild);
        }

        this.Loading.innerHTML = 'Loading...';
        // Börja med att begära API kall från modellen
        this.model.getDish(id)
            // registrera vad view ska göra när API kallet går igenom
            .then(dish => { //unpacking
                this.dish = dish;
                this.Loading.innerHTML = '';
                this.dish.extendedIngredients.forEach((ingredient) => {
                    //tha_ingredient = dish.ingredients[ingredient];
                    //The row with all the columns.
                    this.dish_row = document.createElement("tr");
        
                    //Cells with data.
                    this.quantity = document.createElement("td");
                    this.quantity.innerHTML = (this.guests*ingredient.amount)+" "+ingredient.unit;
                    this.dish_row.appendChild(this.quantity);
        
                    this.ingr_name = document.createElement("td");
                    this.ingr_name.innerHTML = ingredient.name;
                    this.dish_row.appendChild(this.ingr_name);
        
                    this.SEK = document.createElement("td");
                    this.SEK.innerHTML = "SEK";
                    this.dish_row.appendChild(this.SEK);
        
                    this.ingr_price = document.createElement("td");
                    this.ingr_price.innerHTML = this.guests;
                    this.dish_row.appendChild(this.ingr_price);
        
                    //Appending the row with the ingredient to the big table.
                    this.table_ingredients.appendChild(this.dish_row);
        
                });
        
                this.image.src = this.dish.image;
         
        
                this.prep.innerHTML = this.dish.instructions;
                this.dishPrice = this.model.getTotalDishPrice(dish);
        
                this.dish.extendedIngredients.forEach((ingredient) => {
                    this.quantity.innerHTML = (this.guests*ingredient.amount)+" "+ingredient.unit;
                    this.ingr_name.innerHTML = ingredient.name;
                    this.ingr_price.innerHTML = this.guests;
                    });
        
                this.total_dish_price.innerHTML = "SEK " + (this.dishPrice*this.guests);
                //this.dish=dish;
                
                   

        this.name.innerHTML = this.dish.title;
    }); 
       


        
    }



}

