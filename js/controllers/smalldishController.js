class SmalldishController {
    constructor(generalController, view) {
        this.generalController = generalController;
        this.view = view;
                console.log("Knappen funkar1")
                view.btn_image.addEventListener("click", () => this.generalController.showDishview(view.dish));  

    }

}