class Sidebar {

    constructor(container, model){
        model.addObserver(this);

        this.div = document.createElement("div");

        this.WholeMenu = model.getFullMenu();
        this.TotalPrice = model.getTotalMenuPrice();
        this.tha_dish='';
        this.p = document.createElement("p");
        this.p.className = "input_guests";
        this.p.innerHTML = "People";
        this.guestInput = document.createElement("div");
        //The "menu":
        this.inp_guests = document.createElement("div");
        this.inp_guests.className = "input_guests";
        this.input = document.createElement("input");
        this.input.type = "number";
        this.input.min = "0";
        this.input.max = "40";
        this.input.id = "number_guests";
        this.input.value = model.getNumberOfGuests();
        this.side_cost = document.createElement("div");
        this.side_cost.className = "side_cost";
        this.side_something1 = document.createElement("p");
        this.side_something1.className = "side_something1";
        this.side_something1.innerHTML = "Dish Name";
        this.side_something2 = document.createElement("p");
        this.side_something2.className = "side_something2";
        this.side_something2.innerHTML = "Cost";

        this.div.appendChild(this.p);

        this.inp_guests.appendChild(this.input);
        this.div.appendChild(this.inp_guests);
        this.side_cost.appendChild(this.side_something1);
        this.side_cost.appendChild(this.side_something2);
        this.div. appendChild(this.side_cost);

        this.dish;

        //var html="<p class='input_guests'>People</p><div class='input_guests'><input type='number' min='0' max='40' id='number_guests' value='"+guests+"'></div><div class='side_cost'><p class='side_something1'>Dish Name</p><p class='side_something2'>Cost</p></div>";
    
        for(this.dish in this.WholeMenu){
            this.tha_dish=this.WholeMenu[this.dish];
            console.log(this.tha_dish)
            this.dishPrice = model.getTotalDishPrice(this.tha_dish.id);
            this.button = document.createElement("button");
            this.button.className = "sidebar_btn";
            this.side_name = document.createElement("p");
            this.side_name.className = "side_name";
            this.side_name.innerHTML = this.tha_dish.name;
            this.price = document.createElement("p");
            this.price.className = "price";
            this.price.innerHTML = this.dishPrice;

            this.button.appendChild(this.side_name);
            this.button.appendChild(this.price);
            this.div.appendChild(this.button);
            //html=html+"<button class='sidebar_btn' id='btn'><p class='side_name'>"+tha_dish.name+"</p><p class='price'>"+dishPrice+"</p></button>";
        }

        //html=html+"<p class='price'>SEK "+TotalPrice+"<p>";
        //html=html+"<button id='button' class='btn'>Confirm Dinner</button>";
        //document.getElementById('sidebar').innerHTML=html;
        //var parent = document.getElementById('sidebar');
        this.SEKstring = document.createElement("p");
        this.SEKstring.className = "price";
        this.SEKstring.innerHTML = "SEK "+this.TotalPrice;
        this.confirm_btn = document.createElement("button");
        this.confirm_btn.className = "btn";
        this.confirm_btn.id = "button";
        this.confirm_btn.innerHTML = "Confirm Dinner";

        this.div.appendChild(this.SEKstring);
        this.div.appendChild(this.confirm_btn);
        container.appendChild(this.div);
        

    }

    update(model, changeDetails){
        // redraw just the portion affected by the changeDetails
        // or remove all graphics in the view, read the whole model and redraw 
       } 

}