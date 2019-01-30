class HomeView {
    //Går igenom och skapar saker varje gång ett nytt classobjekt skapas
    constructor(container, model) {
        this.div = document.createElement("div");
        this.div.className = "start_box";
        this.p = document.createElement("p");
        this.p.className = "start_latin";
        this.p.innerHTML = model.long_text;
        this.start_button = document.createElement("div");
        this.start_button.className = "start_button";
    
    
        this.button = document.createElement("button");
        this.button.className = "btn";
        this.button.innerHTML = "Create dinner";


        this.div.appendChild(this.p);
        this.start_button.appendChild(this.button);
        this.div.appendChild(this.start_button);
        container.appendChild(this.div);
    }

}

