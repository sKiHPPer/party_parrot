class ConfirmdinnerView {

    constructor(container, model) {
        model.addObserver(this);
        //Allt som hämtas från modellen.
        this.fullMenu = model.getFullMenu();
        this.totalPrice = model.getTotalMenuPrice();
        this.guests = model.getNumberOfGuests();
        this.tha_dish = '';

        //Stora diven som allt i viewn ligger i.
        this.div = document.createElement("div");

        //Rubriken med hur många rätten är för samt tillbaka knapp.
        this.menu = document.createElement("div");
        this.rubrik = document.createElement("p");
        this.rubrik.innerHTML = "My DINNER: " + this.guests + " PEOPLE";

        //Tillbaka knapp.
        this.back_btn = document.createElement("button");
        this.back_btn.className = "button";
        this.back_btn.id = "btn";
        this.back_btn.innerHTML = "Go back and edit dinner";

        this.menu.appendChild(this.rubrik);
        this.menu.appendChild(this.back_btn);
        this.div.appendChild(this.menu);

        //HTML koden för alla rätter i menyn 
        this.divimg = document.createElement("div");
        this.fullMenu.forEach((dish) => {
            this.dishPrice = model.getTotalDishPrice(dish.id);
            //HTML koden där bilden och namnet på rätten visas.
            this.btn_image = document.createElement("button");
            this.btn_image.className = "btn_image";
            this.btn_image.id = "image";
            this.img = document.createElement("img");
            this.img.className = "small_img";
            this.img.src = "images/" + dish.image;
            this.img.width = "114";
            this.img.height = "114";
            this.dish_name_menu = document.createElement("p");
            this.dish_name_menu.className = "dish_name_menu";
            this.dish_name_menu.innerHTML = dish.name;
            this.btn_image.appendChild(this.img);
            this.btn_image.appendChild(this.dish_name_menu);
            this.divimg.appendChild(this.btn_image);

            //HTML koden för priset på rätten.
            this.dish_price = document.createElement("p");
            this.dish_price.className = "price";
            this.dish_price.innerHTML = this.dishPrice + " SEK";
            this.divimg.appendChild(this.dish_price);
        });

        //Alla rätter lägs in i stora diven.
        this.div.appendChild(this.divimg);
        //Total price, för alla rätter på menyn.
        this.total_price = document.createElement("p");
        this.total_price.className = "price";
        this.total_price.innerHTML = "Total: " + this.totalPrice + " SEK";
        //Totala priset läggs in i stora diven.
        this.div.appendChild(this.total_price);

        //HTML kod för printmenuView knappen.
        this.printdiv = document.createElement("div");
        this.confirm_btn = document.createElement("button");
        this.confirm_btn.className = "btn";
        this.confirm_btn.id = "button";
        this.confirm_btn.innerHTML = "Print Full Recipe";
        this.printdiv.appendChild(this.confirm_btn);
        //Appendar till stora diven.
        this.div.appendChild(this.printdiv);
        //Stora diven appendas till containern.
        container.appendChild(this.div);
    }

    update(model){
        // redraw just the portion affected by the changeDetails
        // or remove all graphics in the view, read the whole model and redraw 
        //Uppdaterar rubriken
        this.rubrik.innerHTML = "My DINNER: " + model.getNumberOfGuests() + " PEOPLE";
        
        this.button_list = [];
        this.the_menu = model.getFullMenu();

        //clear the view 
        while(this.divimg.firstChild){
            this.divimg.removeChild(this.divimg.firstChild);
        }

        //Uppdaterar menyn.
        this.the_menu.forEach((dish) => {
            this.dishPrice = model.getTotalDishPrice(dish.id);
            //HTML koden där bilden och namnet på rätten visas.
            this.btn_image = document.createElement("button");
            this.btn_image.className = "btn_image";
            this.btn_image.id = "image";
            this.img = document.createElement("img");
            this.img.className = "small_img";
            this.img.src = "images/" + dish.image;
            this.img.width = "114";
            this.img.height = "114";
            this.dish_name_menu = document.createElement("p");
            this.dish_name_menu.className = "dish_name_menu";
            this.dish_name_menu.innerHTML = dish.name;
            this.btn_image.appendChild(this.img);
            this.btn_image.appendChild(this.dish_name_menu);
            this.divimg.appendChild(this.btn_image);

            //HTML koden för priset på rätten.
            this.dish_price = document.createElement("p");
            this.dish_price.className = "price";
            this.dish_price.innerHTML = this.dishPrice + " SEK";
            this.divimg.appendChild(this.dish_price);
        });

        //Uppdaterar total priset på menyn.
        this.total_price.innerHTML = "Total: " + model.getTotalMenuPrice(); + " SEK";

       } 
}


