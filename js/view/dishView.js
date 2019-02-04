class DishView {
    constructor (container, model, dish_id) {
        model.addObserver(this);
        this.model = model;
        this.long_text = model.long_text;
        this.dish = model.getDish(dish_id);
        this.dishPrice = model.getTotalDishPrice(dish_id);
        this.guests = model.getNumberOfGuests();

        //Stor div som allt på sidan ligger i.
        this.div = document.createElement("div");

        //Ruta med dish name, bild och latinsk text.
        this.description = document.createElement("div");
        this.name = document.createElement("h4");
        this.name.innerHTML = this.dish.name;
        this.image = document.createElement("img");
        this.image.src = "images/"+this.dish.image;
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
        this.prep.innerHTML = this.dish.description;
        
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
        //html = html + "<div class='col-md-5'><div class='big_box_ingredients'><p>INGREDIENTS FOR " + guests + " PEOPLE</p><div class='small_box_ingredients'>";
        

        //for (ingredient in dish.ingredients) 
        
            this.dish.ingredients.forEach((ingredient) => {
                //tha_ingredient = dish.ingredients[ingredient];
                //The row with all the columns.
                this.dish_row = document.createElement("tr");

                //Cells with data.
                this.quantity = document.createElement("td");
                this.quantity.innerHTML = (this.guests*ingredient.quantity)+" "+ingredient.unit;
                this.dish_row.appendChild(this.quantity);

                this.ingr_name = document.createElement("td");
                this.ingr_name.innerHTML = ingredient.name;
                this.dish_row.appendChild(this.ingr_name);

                this.SEK = document.createElement("td");
                this.SEK.innerHTML = "SEK";
                this.dish_row.appendChild(this.SEK);

                this.ingr_price = document.createElement("td");
                this.ingr_price.innerHTML = this.guests * ingredient.price;
                this.dish_row.appendChild(this.ingr_price);

                //Appending the row with the ingredient to the big table.
                this.table_ingredients.appendChild(this.dish_row);


                //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
                //html = html + "<p>" + (guests * tha_ingredient.quantity) + " " + tha_ingredient.unit + " " + tha_ingredient.name + " SEK " + (guests * tha_ingredient.price) + "</p>";

                });
            
        //html = html + "</div><button class='button' id='btn'>Add to menu</button><p class='price'> SEK " + dishPrice + "</p></div></div>";
        
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
        console.log("Här är priset på rätten!")
        console.log(this.dishPrice);
        this.total_dish_price.innerHTML = "SEK "+this.dishPrice;
        this.box_ingredients.appendChild(this.total_dish_price);

        //Lägg till boxen med ingredienser till stora diven samt appenda stora diven.
        this.div.appendChild(this.box_ingredients);
        container.appendChild(this.div);
        //container.innerHTML = html;
    

    }

    update(model){
        this.guests= model.getNumberOfGuests();
        this.model = model;
        console.log(this.dish);

        this.showDish(this.dish);
    }

    showDish(dish){
        this.dish = dish;
        this.name.innerHTML = this.dish.name;

        while(this.table_ingredients.firstChild){
            this.table_ingredients.removeChild(this.table_ingredients.firstChild);
        }


        this.dish.ingredients.forEach((ingredient) => {
            //tha_ingredient = dish.ingredients[ingredient];
            //The row with all the columns.
            this.dish_row = document.createElement("tr");

            //Cells with data.
            this.quantity = document.createElement("td");
            this.quantity.innerHTML = (this.guests*ingredient.quantity)+" "+ingredient.unit;
            this.dish_row.appendChild(this.quantity);

            this.ingr_name = document.createElement("td");
            this.ingr_name.innerHTML = ingredient.name;
            this.dish_row.appendChild(this.ingr_name);

            this.SEK = document.createElement("td");
            this.SEK.innerHTML = "SEK";
            this.dish_row.appendChild(this.SEK);

            this.ingr_price = document.createElement("td");
            this.ingr_price.innerHTML = this.guests * ingredient.price;
            this.dish_row.appendChild(this.ingr_price);

            //Appending the row with the ingredient to the big table.
            this.table_ingredients.appendChild(this.dish_row);

        });

        this.image.src = "images/"+this.dish.image;
 

        this.prep.innerHTML = this.dish.description;
        this.dishPrice = this.model.getTotalDishPrice(this.dish.id);

        this.dish.ingredients.forEach((ingredient) => {
            this.quantity.innerHTML = (this.guests*ingredient.quantity)+" "+ingredient.unit;
            this.ingr_name.innerHTML = ingredient.name;
            this.ingr_price.innerHTML = this.guests * ingredient.price;
            });

        this.total_dish_price.innerHTML = "SEK " + (this.dishPrice*this.guests);
    }



}

