
class HeaderView{

	constructor(container,model){
		this.button = document.createElement("button");
		this.button.class = "head_btn btn-link";
		this.header = document.createElement("h1");
		this.header.innerHTML = "Dinner planner";
		this.button.appendChild(this.header);
		container.appendChild(this.button);

	}
}