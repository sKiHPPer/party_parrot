class MenuView {
    constructor(container, model, generalController) {
        this.generalController = generalController;
        this.showList;
        this.button_list = [];
        this.model = model;
        //div tag som allt i search baren ligger i.
        this.div = document.createElement("div");
        this.div.className = "search_bars menuTable";
        //Rubrik för searchbar
        this.h6 = document.createElement("h6");
        this.h6.innerHTML = "FIND A DISH";
        //Input grej till searchbaren. den man skriver in i.
        this.input = document.createElement("input");
        this.input.className = "three_bar";
        this.input.type = "text";
        this.input.placeholder = "Enter key words";
        //Input där man väljer alternativ.
        this.select = document.createElement("select");
        this.select.className = "three_bar";
        this.select.id = "sel1";
        this.all = document.createElement("option");
        this.all.innerHTML = "all";
        this.MainCourse = document.createElement("option");
        this.MainCourse.innerHTML = "main course";
        this.SideDish = document.createElement("option");
        this.SideDish.innerHTML = "side dish";
        this.dessert = document.createElement("option");
        this.dessert.innerHTML = "dessert";
        this.appetizer = document.createElement("option");
        this.appetizer.innerHTML = "appetizer";
        this.salad = document.createElement("option");
        this.salad.innerHTML = "salad";
        this.bread = document.createElement("option");
        this.bread.innerHTML = "bread";
        this.breakfast = document.createElement("option");
        this.breakfast.innerHTML = "breakfast";
        this.soup = document.createElement("option");
        this.soup.innerHTML = "soup";
        //Search knappen
        this.button = document.createElement("button");
        this.button.className = "three-bar";
        this.button.id = "search";
        this.button.innerHTML = "Search";

        this.div.appendChild(this.h6);

        this.div.appendChild(this.input);
        this.select.appendChild(this.all);
        this.select.appendChild(this.MainCourse);
        this.select.appendChild(this.SideDish);
        this.select.appendChild(this.dessert);
        this.select.appendChild(this.appetizer);
        this.select.appendChild(this.salad);
        this.select.appendChild(this.bread);
        this.select.appendChild(this.breakfast);
        this.select.appendChild(this.soup);
        this.div.appendChild(this.select);
        this.div.appendChild(this.button);



        //this.AllDishes = model.getAllDishes();
        this.tha_dish = '';
        this.dish;
        this.divimg = document.createElement("div");

        //Här kör vi funktionen som skapar alla rätter
        this.createDishes('all', '')

        //container.innerHTML += html;
        this.div.appendChild(this.divimg);
        container.appendChild(this.div);

    }

    updateSearch(type, filter) {

        //clear the view
        while (this.divimg.firstChild) {
            this.divimg.removeChild(this.divimg.firstChild);
        }
        this.createDishes(type, filter);
    }

    createDishes(type, filter) {

        this.button_list = [];
        this.divimg.innerHTML = 'Loading...';

        // Börja med att begära API kall från modellen
        
        this.model.getAllDishes(type,filter).catch(result => {
            this.divimg.innerHTML = '<br>...could not load recipes, please check internet connection and refresh the page.'
            this.divimg.innerHTML += '<br>'+result;

        })
           this.model.getAllDishes(type, filter)
            // registrera vad view ska göra när API kallet går igenom
            .then(result => { //unpacking
                this.showList = result.results; //skickar med hela result istället för bara bit av det
                this.divimg.innerHTML = '';
                this.showList.forEach((element) => {
                    this.smalldishView = new SmallDishView(element, result.baseUri, this.divimg);
                    this.smalldishController = new SmalldishController(this.generalController, this.smalldishView);
                });
            });
    }
}