class HomeController {
    //Skapar allt som ska skapas när klassen körs första gången för classobjektet. Tar emot container, bigController och model
    constructor(container, generalController, model) {
        this.generalController = generalController; //Skapar en väg till stora kontrollern
        this.view = new HomeView(container, model); //Kör HomeView och visar därmed Viewn
        this.view.button.addEventListener("click", () => this.generalController.showMenuview()); //Lägger till en eventlistner på knappen i viewn som skickar vidare till nästa view
    
    }
}