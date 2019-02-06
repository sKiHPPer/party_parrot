class ConfirmDinnerController {
    constructor(generalController, view) {
        //this.generalController = generalController;
        //this.view = new ConfirmdinnerView(container, model);
        view.confirm_btn.addEventListener("click", () => {
            generalController.showPrintview()
        });
        view.back_btn.addEventListener("click", () => {
            generalController.showMenuview()
        });
    }
}