class SmallDishView {
    constructor(dish, URL, container) {

        this.dish = dish
        this.btn_image = document.createElement("button");
        this.btn_image.className = "btn_image";
        this.btn_image.id = "image";
        this.img = document.createElement("img");
        this.img.className = "small_img";
        this.img.src = URL + dish.image; //skickar baseUri innan bildnamnet
        this.img.width = "114";
        this.img.height = "114";
        this.dish_name_menu = document.createElement("p");
        this.dish_name_menu.className = "dish_name_menu";
        this.dish_name_menu.innerHTML = dish.title;
        this.btn_image.appendChild(this.img);
        this.btn_image.appendChild(this.dish_name_menu);
        container.appendChild(this.btn_image);
    }


}