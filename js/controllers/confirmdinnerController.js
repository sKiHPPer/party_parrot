class ConfirmDinnerController {
    constructor(container, generalController, model){
        this.generalController = generalController;
        this.view = new ConfirmdinnerView(container, model);
        this.view.button.addEventListener("click", () => this.generalController.showPrintview());
    }
}