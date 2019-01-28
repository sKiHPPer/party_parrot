var ConfirmHeader = function (model) {
    
    if(document.getElementById('confirmHeader')){
        console.log(guests);
        var guests = model.getNumberOfGuests();
        var html="<div class='big_box_ingredients'><p>MY DINNER: "+guests+" PEOPLE</p>";
        html=html+"<button class='button' id='btn'>Go back and edit dinner</button></div>";
        document.getElementById('confirmHeader').innerHTML=html;
}
}
 