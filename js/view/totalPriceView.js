var MenuTable = function (container, model, guests) {

    if(document.getElementById('MenuPrice')){
    var TotalPrice = model.getTotalMenuPrice();
    console.log(TotalPrice)
    var html="<p class='price'>SEK "+TotalPrice+"<p>";
    document.getElementById('MenuPrice').innerHTML=html;
    }
	
}