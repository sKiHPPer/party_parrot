class PrintController {
    constructor(generalController, view) {
        //this.generalController = generalController;
        //this.view = new ConfirmdinnerView(container, model);
        view.back_btn1.addEventListener("click", () => {
            console.log("printview funkar!")
            generalController.showConfirmdinnerview()
        });
    }
}