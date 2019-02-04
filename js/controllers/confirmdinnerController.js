class ConfirmDinnerController {
    constructor(generalController, view){
        //this.generalController = generalController;
        //this.view = new ConfirmdinnerView(container, model);
        view.confirm_btn.addEventListener("click", () => {
            console.log("funkar!")
            generalController.showPrintview()});
        view.back_btn.addEventListener("click", () => {
            console.log("funkar!")
            generalController.showMenuview()});
    }
}