var HomeView = function (container, model) {
    
    model.long_text;
    <div class="start_button">
				<button id="create_dinner" class="btn">Create dinner</button>
	</div>

    var div = document.createElement("div");
    div.className = "start_button";
    var button = document.createElement("button");
    button.className="btn";
    button.innerHTML = "Create dinner";
    container.innerHTML=html;

    div.appendChild(button);
    container.appendChild(div);
}
 
