var HomeView = function (container, model) {

    var latin = model.long_text;

    var start_box = document.createElement("div");
    start_box.className = "start_box";
    var p = document.createElement("p");
    p.className = "start_latin";
    p.innerHTML = model.long_text;
    var div = document.createElement("div");
    div.className = "start_button";
    var button = document.createElement("button");
    button.className = "btn";
    button.innerHTML = "Create dinner";

    start_box.appendChild(p);
    div.appendChild(button);
    start_box.appendChild(div);
    container.appendChild(start_box);
    //container.appendChild(p);
    
    //container.appendChild(div);
}

