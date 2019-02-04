class HeaderController {
    constructor( generalController, view) {
        this.generalController = generalController;
        view.headbutton.addEventListener("click", () => this.generalController.showHomeview());
    }
}