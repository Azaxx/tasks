menu.onclick = function myFuction() {
    var x = document.getElementById(`myTopnav`);

    if (x.className === "topnav"){
        x.className += " responsive";
    } else{
        x.className = "topNave"
    }
}