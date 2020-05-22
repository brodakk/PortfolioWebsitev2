// Drop down menu functionality
function dropdownMenu () {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
        /*Change topnav to topnav.responsive*/
    } else {
        x.className = "topnav";
    }
    
}