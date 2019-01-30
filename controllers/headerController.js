class HeaderController {
    constructor( generalController, view) {
        this.generalController = generalController;
        view.button.addEventListener("click", () => this.generalController.showHomeview());
    }
}