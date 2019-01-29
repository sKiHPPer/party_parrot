class HomeView {
    //Går igenom och skapar saker varje gång ett nytt classobjekt skapas
    constructor(container, model) {
        this.start_box = document.createElement("div");
        this.start_box.className = "start_box";
        this.p = document.createElement("p");
        this.p.className = "start_latin";
        this.p.innerHTML = model.long_text;
        this.div = document.createElement("div");
        this.div.className = "start_button";
    
    
        this.button = document.createElement("button");
        this.button.className = "btn";
        this.button.innerHTML = "Create dinner";


        this.start_box.appendChild(this.p);
        this.div.appendChild(this.button);
        this.start_box.appendChild(this.div);
        container.appendChild(this.start_box);
    }
}

