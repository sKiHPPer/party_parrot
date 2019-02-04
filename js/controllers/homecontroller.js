class HomeController {
    //Skapar allt som ska skapas när klassen körs första gången för classobjektet. Tar emot container, bigController och model
    constructor( generalController, view) {
        this.generalController = generalController; //Skapar en väg till stora kontrollern
        //view; //Kör HomeView och visar därmed Viewn
        view.button.addEventListener("click", () => this.generalController.showMenuview()); //Lägger till en eventlistner på knappen i viewn som skickar vidare till nästa view
    }
}