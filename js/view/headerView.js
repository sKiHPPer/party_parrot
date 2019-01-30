
class HeaderView{

	constructor(container,model){
		this.headbutton = document.createElement("button");
		this.headbutton.class = "head_btn btn-link";
		this.header = document.createElement("h1");
		this.header.innerHTML = "Dinner planner";
		this.headbutton.appendChild(this.header);
		container.appendChild(this.headbutton);

	}
}