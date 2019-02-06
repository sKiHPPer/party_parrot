class SmalldishController {
    constructor(generalController, view) {
        this.generalController = generalController;
        this.view = view;
                view.btn_image.addEventListener("click", () => this.generalController.showDishview(view.dish.id));  

    }

}