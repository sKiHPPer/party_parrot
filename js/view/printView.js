class PrintView {
    constructor(container, model) {
        model.addObserver(this);
        this.fullMenu = model.getFullMenu();//Här hämtar jag menyn från modelen
        this.guests = model.getNumberOfGuests();//Här hämtar jag antalet gäster från the model
        //Stora diven som allt i viewn ligger i.
        this.div = document.createElement("div");//Här skapar jag en <div> tag som jag kommer att lägga in all html kod som skapas i denna fil i.

        //Rubriken med hur många rätten är för samt tillbaka knapp.
        this.menu = document.createElement("div");//Här skapar jag en <div> tag som själva rubriken eller menyn med hur många menyn är för samt en tillbaka knapp
        this.rubrik = document.createElement("p");//Här skapar jag en <p> tag som ska innehålla rubrik texten
        this.rubrik.innerHTML = "My DINNER: " + this.guests + " PEOPLE";//Här lägger jag in det som ska ligga innanför <p> tagen

        //Tillbaka knapp.
        this.back_btn1 = document.createElement("button");//Här skapar jag en <button> tag som ska innehålla tillbaka knappen
        this.back_btn1.className = "button";//Här skapar jag ett class namn
        this.back_btn1.id = "btn";//Här ger jag knappen ett id
        this.back_btn1.innerHTML = "Go back and edit dinner";//Här lägger jag in det som ska stå i knappen

        //Här läggs rubriken och tillbaka knappen först in i sin egna div class och sedan läggs den classen
        //in i den stora diven som allt ligger i.
        this.menu.appendChild(this.rubrik);//Här lägger jag in rubrik texten (<p> tagen) innanför <div> tagen på rad 9. dvs tagen som ska innehålla allt som har med menyn att göra
        this.menu.appendChild(this.back_btn1);//Här lägger jag till knappen innaför samma <div> tag som jag gjorde med texten ovan
        this.div.appendChild(this.menu);//Här lägger jag till <div> tagen som nu innehåller menyn/rubriken och tillbaka knappen i den stora <div> tagen som ska innehålla all html som skapas i denna fil

        //Menyn
        //this.html = "<div class='row text-center' id='my_dinner'><p class='col-md-8'>MY DINNER: " + guests + " PEOPLE</p>";
        //html = html + "<div class='col-md-4'><button class='button' id='btn'>Go back and edit dinner</button></div></div><div class='row'>";
        //Alla rätter i menyn
        this.dishes = document.createElement("div");
        this.fullMenu.forEach((dish) => {
            this.dish_row = document.createElement("div");//Diven som allt som ingår i vad som ska visas för en rätt ligger i
            this.dish_row.className = "print_dish";//class-namnet på diven som skapades ovan
            this.dish_image = document.createElement("img");//Här skapas en <img> tag som bilden ska ligga i
            this.dish_image.className = "dish_image";//Här lägger jag till ett class-namn för <img> tagen
            this.dish_image.src = "images/"+dish.image;//Här lägger jag till själva "bilden" i <img> tagen
            this.dish_image.width = "200";
            this.dish_image.height = "200";
            this.name_and_latintext = document.createElement("div");//Här skapar jag en <div> tag som ska innehålla rättens namn samt info text som i detta fall bara blir latinsk text
            this.dish_name_printview = document.createElement("h4");//Här skapas en <h4> tag som namnet på rätten ska ligga i
            this.dish_name_printview.innerHTML = dish.name;//Här lägger jag in rättens namn innanför <h4> tagen
            this.latin_text = document.createElement("p");//Här skapar jag en <p> tag som den latinska texten ska ligga i
            this.latin_text.innerHTML = model.long_text;//Här lägger jag in den latinska texten innanför <p>tagen
            this.prep_and_latintext = document.createElement("div");//Här skapar jag en ny <div> tag som PREPARATION rubriken ska ligga i samt latinsk text igen för vi är lata
            this.preparation = document.createElement("h4");//Här skapar jag en <h4> tag som PREAPARATION rubriken ska ligga i
            this.preparation.innerHTML = "PREPARATION";//Här lägger jag in PREPARATION innanför <h4>tagen
            
            //Här lägger jag in alla taggar ovan i de taggar jag vill att de ska ligga innanför
            this.name_and_latintext.appendChild(this.dish_name_printview);//Här lägger jag in rättens namn som ligger innanför en <h4> tag, innanför <div> tagen som ska innehålla namnet samt latinsk text
            this.name_and_latintext.appendChild(this.latin_text);//Här lägger jag in den latinska texten innanför samma som ovan
            this.dish_row.appendChild(this.name_and_latintext);//lägger in i raden för rätten
            this.prep_and_latintext.appendChild(this.preparation);//Lägger in rubrik PREPARATION, 
            this.prep_and_latintext.appendChild(this.latin_text);//lägger in latinska texten under preparation rubrken
            this.dish_row.appendChild(this.prep_and_latintext);//Lägger in preparation grejen i raden
            this.dishes.appendChild(this.dish_row);//Lägger in hela rätten i den stora diven
        });
        this.div.appendChild(this.dishes);
        /*for (dish in fullMenu) {
            tha_dish = fullMenu[dish];
            //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
            html = html + "<div class='row'><img class='col-md-4' src='images/" + tha_dish.image + "'></img>" + "<div class='col-md-4'><h4 class='dish_name_menu'>" + tha_dish.name + "</h4>" + long_text + "</div><div class='col-md-4'><h4>PREPARATION</h4>" + long_text + long_text + "</div></div>";
        }
        */
        container.appendChild(this.div);
        //container.innerHTML = html;

    }
    update(model){
        //clear the view 
        while(this.dishes.firstChild){
            this.dishes.removeChild(this.dishes.firstChild);
        }


        this.fullMenu = model.getFullMenu();//Här hämtar jag menyn från modelen
        this.guests = model.getNumberOfGuests();//Här hämtar jag antalet gäster från the model
        this.rubrik.innerHTML = "My DINNER: " + this.guests + " PEOPLE";//Här lägger jag in det som ska ligga innanför <p> tagen
        this.fullMenu.forEach((dish) => {
            this.dish_row = document.createElement("div");//Diven som allt som ingår i vad som ska visas för en rätt ligger i
            this.dish_row.className = "print_dish";//class-namnet på diven som skapades ovan
            this.dish_image = document.createElement("img");//Här skapas en <img> tag som bilden ska ligga i
            this.dish_image.className = "dish_image";//Här lägger jag till ett class-namn för <img> tagen
            this.dish_image.src = "images/"+dish.image;//Här lägger jag till själva "bilden" i <img> tagen
            this.dish_image.width = "200";
            this.dish_image.height = "200";
            this.name_and_latintext = document.createElement("div");//Här skapar jag en <div> tag som ska innehålla rättens namn samt info text som i detta fall bara blir latinsk text
            this.dish_name_printview = document.createElement("h4");//Här skapas en <h4> tag som namnet på rätten ska ligga i
            this.dish_name_printview.innerHTML = dish.name;//Här lägger jag in rättens namn innanför <h4> tagen
            this.latin_text = document.createElement("p");//Här skapar jag en <p> tag som den latinska texten ska ligga i
            this.latin_text.innerHTML = model.long_text;//Här lägger jag in den latinska texten innanför <p>tagen
            this.prep_and_latintext = document.createElement("div");//Här skapar jag en ny <div> tag som PREPARATION rubriken ska ligga i samt latinsk text igen för vi är lata
            this.preparation = document.createElement("h4");//Här skapar jag en <h4> tag som PREAPARATION rubriken ska ligga i
            this.preparation.innerHTML = "PREPARATION";//Här lägger jag in PREPARATION innanför <h4>tagen
            
            //Här lägger jag in alla taggar ovan i de taggar jag vill att de ska ligga innanför
            this.dish_row.appendChild(this.dish_image);
            this.name_and_latintext.appendChild(this.dish_name_printview);//Här lägger jag in rättens namn som ligger innanför en <h4> tag, innanför <div> tagen som ska innehålla namnet samt latinsk text
            this.name_and_latintext.appendChild(this.latin_text);//Här lägger jag in den latinska texten innanför samma som ovan
            this.dish_row.appendChild(this.name_and_latintext);//lägger in i raden för rätten
            this.prep_and_latintext.appendChild(this.preparation);//Lägger in rubrik PREPARATION, 
            this.prep_and_latintext.appendChild(this.latin_text);//lägger in latinska texten under preparation rubrken
            this.dish_row.appendChild(this.prep_and_latintext);//Lägger in preparation grejen i raden
            this.dishes.appendChild(this.dish_row);//Lägger in hela rätten i den stora diven
        });
    }
}
