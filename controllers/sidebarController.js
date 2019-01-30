class SidebarController {

    constructor(container, generalController, model) {
        this.generalController = generalController;
        this.view = new Sidebar(container, model);
        this.view.button.addEventListener("click", () => this.generalController.showConfirmdinnerview());
    }
}