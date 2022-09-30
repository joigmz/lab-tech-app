

function gotowhatsapp() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;


    var url = "https://wa.me/+56979945385?text=" 
    + "Nombre: " + name + "%0a"
    + "email: " + email  + "%0a"

    window.open(url, '_blank').focus();
}