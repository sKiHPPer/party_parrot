var MenuTable = function (container, model) {

    if (document.getElementById('MenuPrice')) {
        var TotalPrice = model.getTotalMenuPrice();
        var guests = model.getNumberOfGuests();
        console.log(TotalPrice)
        var html = "<p class='price'>SEK " + TotalPrice + "<p>";
        document.getElementById('MenuPrice').innerHTML = html;
    }

}